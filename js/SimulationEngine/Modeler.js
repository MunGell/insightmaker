"use strict";
/*

Copyright 2010-2013 Scott Fortmann-Roe. All rights reserved.

This file may distributed and/or modified under the
terms of the Insight Maker Public License (http://insightMaker.com/impl).

*/


var simulatorProgress;
var simulate;
var model;

var strictUnits = null;


function runSimulation(config) {
	try {
		return innerRunSimulation(config);//have an inner function call to escape try-catch performance pathologies
	} catch (err) {
		return checkErr(err, config);
	}
}

function checkErr(err, config){
	if (isLocal()) {
		console.log(err);
	}

	if (isDefined(simulatorProgress) && simulatorProgress != null) {
		simulatorProgress.close()
		threads--;
	};
	
	var errOut;
	if (err.msg) {
		errOut = {
			error: err.msg,
			errorPrimitive: isDefined(err.primitive)?findID(err.primitive.id):null
		};
	} else {
		errOut = {
			error: getText("An unknown simulation error occurred"),
			errorPrimitive: null
		};
		err.msg = errOut.msg;
	}
	
	
	if(config.onError){
		config.onError(errOut)
	}
	if (! config.silent) {
		handleErrorObject(err)
	}else{
		return errOut;
	}
}

var timeUnits = null;
function innerRunSimulation(config) {
	
	simulate = new Simulator();
	
	bootCalc();
	
	
	allPlaceholders = [];
	model = {};
	model.submodels = {"base": {id: "base", "DNAs":[], agents: [{children: [], childrenId: {}}], size: 1}};
	var setting = getSetting();

	strictUnits = isTrue(setting.getAttribute("StrictUnits"));
	//strictUnits = false; //Historical mode, can do "{1 cow}+5"
		
	//Set Up simulation time settings
		
	timeUnits = setting.getAttribute("TimeUnits").toLowerCase();
	var u = new UnitStore([timeUnits],[1]);
	model["timeLength"] = new Material(sn("#i" + setting.getAttribute("TimeLength")), u.clone());
	model["timeStart"] = new Material(sn("#i" + setting.getAttribute("TimeStart")), u.clone());
	model["timeStep"] = new Material(sn("#i" + setting.getAttribute("TimeStep")), u.clone());
	
		
	//End Simulation time settings setup
		
	//Begin custom units setup

	var customUnits = setting.getAttribute("Units");
	if (isDefined(customUnits)) {
		var units = setting.getAttribute("Units").split("\n");
		var newSources = [],
			newScalings = [],
			newTargets = [];
		for (var i = 0; i < units.length; i++) {
			var us = units[i].split("<>");
			if (Ext.String.trim(us[2]) != "") { //It has a synonym, otherwise we don't need to add it
				newSources.push(us[0]);
				newScalings.push(us[1]);
				var newU = createUnitStore(us[2]);
				if(isUndefined(newU)){
					throw {msg: 'You cannot define a units synonym for "unitless".'};
				}else{
					newTargets.push(newU.toStringShort());
				}
			}
		}
		loadUnits(newSources, newTargets, newScalings);

	}
		
		
	//End custom units setup
	var solvers = {}; // Simulation solvers
	solvers.base = {
		timeStep: new Material(sn("#i" + setting.getAttribute("TimeStep")), u.clone()),
		algorithm: setting.getAttribute("SolutionAlgorithm"),
		id: "base"
	};
	
	model.solvers = solvers;
	var folders = findType("Folder");
	for(var i=0; i<folders.length; i++){
		var json = folders[i].getAttribute("Solver");
		if(json){
			var solver = JSON.parse(json);
			if(solver.enabled){ 
				solvers[folders[i].id] = solver;
				solvers[folders[i].id].timeStep = new Material(sn("#i" + solvers[folders[i].id].timeStep), u.clone());
				solvers[folders[i].id].id = folders[i].id;
			}
		}
	}
	
	var solverKeys = Object.keys(solvers);
	for(var i = 0; i < solverKeys.length; i++){
		var solver = solvers[solverKeys[i]];
		
		solver.userTimeStep = solver.timeStep;
		if(solver.algorithm == "RK4"){
			solver.RKOrder = 4;
		}else{
			solver.RKOrder = 1;
		}
		if(solver.RKOrder == 4){
			solver.timeStep = div(solver.userTimeStep, new Material(2));
		}else{
			solver.timeStep = solver.userTimeStep;
		}
		
		solver.stocks = [];
		solver.flows = [];
		solver.transitions = [];
		solver.actions = [];
		solver.states = [];
		solver.valued = [];
		solver.displayed = [];
	}

	var modelItems = primitives();
	
	for(var i = 0; i < modelItems.length; i++){
		
		if (modelItems[i].value.nodeName == "Agents") {
			var item = modelItems[i];
			
			var id = item.getAttribute("Agent");
			var z = parseInt(id, 10);
			if(z == id){
				id = z;
			}
			if(isUndefined(id)){
				throw {msg: getText("You must select a base agent for %s.", "<i>"+clean(item.getAttribute("name"))+"</i>"), primitive: item, showEditor: false};
			}
				
			var x = new Agents();
			
			x.dna = new DNA( "Agents", item, id, item.getAttribute("name"));
			x.id = item.id;
			
			x.agentId = id;
			x.createIds();
			
			x.dna.solver = folderSolvers(item, solvers);
			x.dna.solver.displayed.push(x);
			
			x.geoDimUnits = item.getAttribute("GeoDimUnits");
			x.geoDimUnitsObject = createUnitStore(item.getAttribute("GeoDimUnits"));
			x.geoWidth = simpleUnitsTest(simpleEquation(item.getAttribute("GeoWidth")), x.geoDimUnitsObject);
			x.geoHeight = simpleUnitsTest(simpleEquation(item.getAttribute("GeoHeight")), x.geoDimUnitsObject);
			x.halfWidth = div(x.geoWidth, new Material(2));
			x.halfHeight = div(x.geoHeight, new Material(2));
			x.geoWrap = isTrue(item.getAttribute("GeoWrap"));
			x.placement = item.getAttribute("Placement");
			x.placementFunction = item.getAttribute("PlacementFunction");
			x.network = item.getAttribute("Network");
			x.networkFunction = item.getAttribute("NetworkFunction");
			
			var agentCells = getChildren(findID(id));
			
			x.DNAs = [];
			for(var j=0; j<agentCells.length; j++){
				if(modelType(agentCells[j].value.nodeName)){
					x.DNAs.push(getDNA(agentCells[j], solvers));
				}
				if(agentCells[j].value.nodeName=="State"){
					x.stateIds.push(agentCells[j].id);
				}
			}
			
			x.size = item.getAttribute("Size");
			
			x.agents = [];
			
			x.dna.agents = x;
			
			model.submodels[item.id] = x;
			model.submodels.base.DNAs.push(x.dna);
		}else if(! inAgent(modelItems[i])){
			if(modelType(modelItems[i].value.nodeName)){
				model.submodels.base.DNAs.push(getDNA(modelItems[i], solvers));
			}
		}
	};
	
	
	for(var submodel in model.submodels){
		submodel = model.submodels[submodel];
		for(var j = 0; j < submodel.size; j++){
			var agent = new Agent();
			if(submodel.id == "base"){
				agent = submodel.agents[0];
			}else{
				agent.container = submodel;
				agent.index = j;
				agent.children = [];
				agent.childrenId = {};
				agent.agentId = item.id;
				agent.createIds();
				submodel.agents.push(agent);
			}
			for(var i = 0; i < submodel.DNAs.length; i++){
				if(submodel.DNAs[i].dimensions){
					var dims = submodel.DNAs[i].dimensions;
					var keys = dims[0].data.keys.map(function(x){return [x];});
					for(var d=1; d<dims.length; d++){
						var newKeys = [];
						for(var k=0; k<dims[d].data.keys.length; k++){
							for(var k2=0; k2<keys.length; k2++){
								newKeys.push(keys[k2].slice());
								newKeys[newKeys.length-1].push(dims[d].data.keys[k]);
							}
						}
						keys = newKeys
					}
					decodeDNA(submodel.DNAs[i], agent, keys[k]);
				}else{
					decodeDNA(submodel.DNAs[i], agent);
				}
			}
		}
	}
	
	// Initialize Actual Simulation
	simulate.setup({
		model: model
	});
	
	
	
	for(var submodel in model.submodels){
		//console.log("[[["+submodel+"]]]]");
		submodel = model.submodels[submodel];
		for(var j = 0; j < submodel.size; j++){
			for(var i = 0; i < submodel.DNAs.length; i++){
				//console.log(i);
				linkPrimitive(submodel.agents[j].children[i], submodel.DNAs[i]);
			}
		}
	} 
			
	if(isDefined(setting.getAttribute("Macros"))){
		try{
			evaluateMacros(setting.getAttribute("Macros"));
		}catch(err){
			showMacros();
			var msg = getText("An error with the macros prevented the simulation from running.");
			if(err.msg){
				msg = msg + "<br/><br/>" + err.msg;
			}else if(err.toString().substr(0,4)=="MSG:"){
				msg = msg + "<br/><br/>" + err.toString().substr(4);
			}
						
			throw {
				msg: msg
			};
				
		}
	}
	
	
	for(var submodel in model.submodels){
		submodel = model.submodels[submodel];
		for(var j = 0; j < submodel.size; j++){
			setAgentInitialValues(submodel.agents[j]);
		}
	} 	
		
	for(var submodel in model.submodels){
		if(submodel != "base"){
			try{
				buildNetwork(model.submodels[submodel]);	
			}catch(err){
				if (isLocal()) {
					console.log(err);
				}
				var msg = getText("An error with the custom network function prevented the simulation from running.");
				if(err.msg){
					msg = msg + "<br/><br/>" + err.msg;
				}else if(err.toString().substr(0,4)=="MSG:"){
					msg = msg + "<br/><br/>" + err.toString().substr(4);
				}
						
				throw {
					msg: msg,
					primitive: model.submodels[submodel].cell,
					showEditor: false
				};
			}
					
					
			try{
				
				buildPlacements(model.submodels[submodel]);
					
			}catch(err){
				if (isLocal()) {
					console.log(err);
				}
				var msg = getText("An error with the agent placement function prevented the simulation from running.");
				if(err.msg){
					msg = msg + "<br/><br/>" + err.msg;
				}else if(err.toString().substr(0,4)=="MSG:"){
					msg = msg + "<br/><br/>" + err.toString().substr(4);
				}
						
				throw {
					msg: msg,
					primitive: model.submodels[submodel].cell,
					showEditor: false
				};
			}
					
		}
	}

	if (config.silent) {
		var res = formatSimResults(simulate.run(config));
		if(config.onSuccess){
			config.onSuccess(res);
		}
		
		return res;
	} else {
		threads++;
		simulatorProgress = Ext.MessageBox.show({
			msg: getText("Processing Model..."),
			icon: 'run-icon',
			width: 300,
			closable: false,
			modal: true,
			progress: true
		});
		
		simulate.run({callback: finishSim});
	}

	
}

function formatSimResults(res){
	res.error = "none";
	res.errorPrimitive = null;
	res.names = {};
	var items = model.submodels["base"].agents[0].children;
	for (var i = 0; i < items.length; i++) {
		res.names[items[i].name] = items[i].id;
	}
	res.value = function(item) {
		return this[item.id].results;
	};
	res.lastValue = function(item) {
		return this[item.id].results[this[item.id].results.length - 1];
	};
	res.periods = res.Time.length;
	res.times = res.Time;
	
	return res;
}

function createUnitStore(u) {
	if (u.trim() == "" || u.trim().toLowerCase() == "unitless") {
		return undefined;
	}
	return simpleEquation("{1 " + u + "}").units;
}

function simpleEquation(eq, scope, primitiveBank, tree){
	if(! scope){
		scope = {};
	}
	if(! primitiveBank){
		primitiveBank = {};
	}
	if(! tree){
		tree = trimTree(createTree(eq), primitiveBank);
	}
	
	var res = evaluateTree(tree, scope);
	
	return res;
}

function simpleNum(mat, units){
	if(mat instanceof Vector){
		return new Vector(mat.items.map(function(x){
			return simpleNum(x, units);
		}));
	}
	
	if(unitless(units) && (! unitless(mat.units))){
		throw(getText("The result of the calculation has units %s, but no units are specified for the calculation. Please set the units for the calculation so we can determine the proper output.", mat.units.toString()));
	}
	
	if( unitless(mat.units) ){
		return 0+mat.value;
	}else{
		var q = new Quantities(mat.units);
		var u = new Quantities(units);
		return 0+fn["*"](mat.value, fn["/"](sn("#e"+q.toBase), u.toBase));
	}
	
}

function simpleUnitsTest(mat, units){
	if(mat instanceof Vector){
		return new Vector(mat.items.map(function(x){
			return simpleUnitsTest(x, units);
		}));
	}
	
	
	if(unitless(mat.units) && unitless(units)){
		return mat;
	}else if(unitless(mat.units)){
		mat.units = units;
		return mat;
	}else if(unitsEqual(mat.units, units)){
		return mat;
	}else{
		var scale = convertUnits(mat.units, units, true);
		if (scale == 0) {
			if(isLocal()){
				console.log(mat.units);
				console.log(units);
			}
			throw("MSG: "+getText("Wrong units generated. Expected %s, and got %s.", "<i>"+clean(this.units.toString())+"</i>", "<i>"+clean(m.units.toString())+"</i>."));
		} else {
			//console.log("----+")
			mat.value = mat.value * scale;
			mat.units = units;
			return mat;
		}
	}
}



function tally(arr) {
    var res= {"null":0};
	var prev;
    
    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
		if(arr[i]==null){
			res["null"] = res["null"]+1;
		}
        else if ( arr[i] !== prev ) {
			res[arr[i].toString()] = 1;
        } else {
            res[prev.toString()] = res[prev.toString()] + 1;
        }
        prev = arr[i];
    }
	
    return res;
}

function aggregateAgentSeries(res){
	var data = res.results.map(function(x){
		var states = [];
		x.current.forEach(function(x){states = states.concat(x.state?x.state.map(function(x){return x.id.toString()}):[])});
		
		var items = tally(states);
		res.data.states.forEach(function(key){
			if(isUndefined(items[key.toString()])){
				items[key.toString()] = 0;
			}
		});
		return items;
	});
	
	
	var ret = {};
	res.data.states.forEach(function(key){
		ret[key.toString()] = [];
		data.forEach(function(x){
			ret[key.toString()].push(x[key.toString()]);
		});
	});
	
	return ret;
}

function indexedSeries(res, cell){
	var names = res.results[res.results.length-1].fullNames()
	var series = {};
	//console.log("---")
	//console.log(names);
	
	for(var i=0; i<names.length; i++){
		var key = names[i].join(", ");
		series[key] = [];
		for(var j=0; j<res.results.length; j++){
			if(res.results[j] instanceof Vector){
				try{
					series[key].push(selectFromMatrix(res.results[j].fullClone(), names[i].slice()));
				}catch(err){
					throw ({
						msg: getText("The key '"+names[i].join(", ")+"' not available within primitive across all time periods. Vector primitives must have the same keys cross all time periods."),
						primitive: cell,
						showEditor: true
					});
					
				}
			}else{
				throw ({
					msg: getText("Cannot switch primitives between vectorized and non-vectorized states."),
					primitive: cell,
					showEditor: true
				});
				//series[key].push(res.results[j]);
			}
		}
	}
	//	console.log(series);
	return series;
}

function finishSim(res, displayInformation, config) {
	
	
	
	var ids = [];
	var headers = [];
	var agents = {};
	var agentKeys = [];
	var displayedIds = [];
	var displayedHeaders = []
	var colors = [];
	var renderers = [];
	var indexedData = {};
	var indexNames = [];
	
//	console.log(res);
	
	
	for(var i = 0; i < displayInformation.ids.length; i++){
		var id = displayInformation.ids[i];
		var item = findID(id);
		
		displayedIds.push(id);
		displayedHeaders.push(getName(item));
		
		if(item.value.nodeName == "Agents"){
			var x = aggregateAgentSeries(res[id]);
			//console.log(x)
			agents[id.toString()] = {id: id, item: item, data: res[id].data, results: res[id].results, aggregate: x};
			
			for(var key in x){
				var innerItem = findID(key);
				ids.push(id);
				headers.push(getName(innerItem));
				colors.push(getLineColor(innerItem));
				agentKeys.push(key);
				indexNames.push(false);
				if(res[id].dataMode == "float"){
					renderers.push(commaStr);
				}else if(res[id].dataMode == "agents"){
					renderers.push(function(x){return x;});
				}else{
					renderers.push(undefined);
				}
			}
		}else{
			if((res[id].results[res[id].results.length-1] instanceof Vector) && res[id].results[res[id].results.length-1].names){
				var names = res[id].results[res[id].results.length-1].fullNames();
				var col = getLineColor(item);
				//console.log(id);
				indexedData[id.toString()] = indexedSeries(res[id], item);
				for(var n=0; n<names.length; n++){
					ids.push(id);
					headers.push(getName(item)+" ("+names[n].join(", ")+")");
					colors.push(col);
					indexNames.push(names[n].join(", "));
					renderers.push(commaStr);
				}
				
			}else{
				ids.push(id)
				headers.push(getName(item));
				colors.push(getLineColor(item));
				agentKeys.push(false);
				indexNames.push(false);
				if(res[id].dataMode == "float"){
					renderers.push(commaStr);
				}else{
					renderers.push(undefined);
				}
			}
		}
		
		
	}
	
	displayInformation.colors = colors;
	displayInformation.ids = ids;
	displayInformation.headers = headers;
	displayInformation.agents = agents;
	displayInformation.displayedHeaders = displayedHeaders;
	displayInformation.displayedIds = displayedIds;
	displayInformation.renderers = renderers;
	displayInformation.res = res;
	
	displayInformation.times = res["Time"];
	var storeData = [];
	
//	console.log(indexedData);

	for (var k = 0; k < res.Time.length; k++) {
		storeData.push({});
		storeData[k]["TimeIndex"] = k;
		storeData[k]["Time"] = res["Time"][k];
		for (var i = 0; i < ids.length; i++) {
			if(agentKeys[i]){
				storeData[k]["series" + i] = agents[ids[i].toString()].aggregate[agentKeys[i].toString()][k];
			}else if(indexNames[i]){
				//console.log(id);
				storeData[k]["series" + i] = indexedData[ids[i].toString()][indexNames[i].toString()][k];
			}else{
				storeData[k]["series" + i] = res.data[k][ids[i]];
			}
		}
	}

	var storeFields = [{
		type: "float",
		name: "Time"
	},{
		type: "int",
		name: "TimeIndex"
	}];
	
	for (var i = 0; i < headers.length; i++) {
		var n = "series" + i;
		storeFields.push({
			type: res[ids[i]].dataMode,
			name: n,
			defaultValue: undefined
		});
	}

	//console.log(storeData)
	
	var store = new Ext.data.Store({
		fields: storeFields,
		data: storeData
	});

	displayInformation.store = store;

	//console.log(storeData);
	var win = createResultsWindow(displayInformation);

	if(config.onSuccess){
		res = formatSimResults(res);
		res.window = win;
		config.onSuccess(res);
	}
}

function handleErrorObject(err) {
	if(simulatorProgress){
		simulatorProgress.close();
		threads--;
	}
	
	if (isLocal()) {
		console.log(err);
	}
	if (err.msg) {
		if (isDefined(err.primitive)) {
			var cell = findID(err.primitive.id)
			highlight(cell);
			if (err.showEditor) {
				showEditor(cell);
			}
		}
		mxUtils.alert(err.msg);
	} else if(err.error) {
		mxUtils.alert(err);
	}else{
		mxUtils.alert(getText("An unknown model simulation error occurred."));
	}
}

function evaluateMacros(macros){
	evaluateTree(trimTree(createTree(macros), {}), varBank);
}

function DNA(type, cell, id, name){
	this.type = type;
	this.cell = cell;
	var x = parseInt(id,10);
	if(x == id){
		this.id = x;
	}else{
		this.id = id;
	}
	this.name = name;
	this.units = null;
}

function getDNA(cell, solvers){
	var type = cell.value.nodeName;
	var dna = new DNA(type, cell, cell.id, cell.getAttribute("name"));
	dna.solver = folderSolvers(cell, solvers);
	
	if(type=="Flow" || type=="Transition"){
		if (cell.target !== null) {
			dna.targetId = orig(cell.target).id;
		}
		if (cell.source !== null) {
			dna.sourceId = orig(cell.source).id;
		}
	}
	
	if(type == "Converter"){
		dna.value = getValue(cell);
	}else{
		try{
			dna.value = createTree(getValue(cell));
		}catch(err){
			if(isLocal()){
				//console.log(this);
				//console.log(eq);
				//console.log(neighborhood);
				console.log(err);	
			}
			error(getText("The primitive %s has an equation error that must be corrected before the model can be run.", "<i>"+clean(dna.name)+"</i>"), cell, true);
		}
	}
	
	
	if(type == "Action"){
		dna.trigger = cell.getAttribute("Trigger");
		try{
			dna.triggerValue = createTree(cell.getAttribute("Value"));
		}catch(err){
			error(getText("The trigger for %s has an equation error that must be corrected before the model can be run.", "<i>"+clean(dna.name)+"</i>"), dna.cell, false);
		}
	}else if(type == "Transition"){
		dna.trigger = cell.getAttribute("Trigger");
	}else if (type == "Stock") {
		dna.nonNegative = isTrue(cell.getAttribute("NonNegative"));
		if (cell.getAttribute("StockMode") == "Conveyor") {
			dna.stockType="Conveyor";
			try {
				dna.delay = evaluateTree(trimTree(createTree(cell.getAttribute("Delay")), {}));
				if (unitless(dna.delay.units)) {
					dna.delay.units = new UnitStore([timeUnits], [1]);
				}
			} catch (err) {
				if (isLocal()) {
					console.log(err);
				}

				throw ({
					msg: getText("Invalid conveyor delay."),
					primitive: cell,
					showEditor: false
				});
			}
		}
	} else if (type == "Flow") {
		dna.onlyPositive = isTrue(cell.getAttribute("OnlyPositive"));
	} else if (type == "Converter") {
		dna.source = cell.getAttribute("Source");
		dna.interpolation = cell.getAttribute("Interpolation") == "Linear" ? "linear" : "discrete";
		
		
		if( isUndefined(cell.getAttribute("Data")) || cell.getAttribute("Data").trim()=="" ){
			
			throw ({
				msg: getText("The converter %s does not have any data.", "<i>"+clean(dna.name)+"</i>"),
				primitive: cell,
				showEditor: true
			});
		}
		
		var data = cell.getAttribute("Data").split(";");
		
		
		var inp = [];
		var out = [];
		var myU;
		if (dna.source == "Time") {
			myU = new UnitStore([timeUnits],[1]);
		} else {
			myU = createUnitStore(orig(findID(dna.source)).getAttribute("Units"));
		}
		for (var i = 0; i < data.length; i++) {
			var b = data[i].split(",");
			inp.push(new Material(sn(Ext.String.trim(b[0])), myU?myU.clone():undefined));
			out.push(new Material(sn(Ext.String.trim(b[1]))));
		}
		dna.inputs = inp;
		dna.outputs = out;
	}
	
	if (type != "State") {
		if (type != "Transition" && type != "Action") {
			var u = cell.getAttribute("Units");
			try {
				if (type != "Flow" || (u.trim() != "" && u.trim().toLowerCase() != "unitless")) {
					dna.units = createUnitStore(u);
				} else {
					dna.units = new UnitStore([timeUnits],[-1]);
					dna.flowUnitless = true;
				}
			} catch (err) {
				if (isLocal()) {
					console.log(err);
				}
				throw {
					msg: getText("Invalid units specified for primitive: \"%s\".", clean(u)),
					primitive: cell,
					showEditor: true
				};

			}
		} else {
			if (dna.trigger == "Timeout") {
				dna.units = new UnitStore([timeUnits],[1]);
			} 
		}
		dna.maxConstraint = cell.getAttribute("MaxConstraint");
		dna.maxConstraintType = isTrue(cell.getAttribute("MaxConstraintUsed")) ? 1 : null;
		dna.minConstraint = cell.getAttribute("MinConstraint");
		dna.minConstraintType = isTrue(cell.getAttribute("MinConstraintUsed")) ? 1 : null;
		
	}
	
	dna.toBase = dna.units?(new Quantities(dna.units)).toBase:1;
	dna.unitless = (! dna.units) || unitless(dna.units);
	
	return dna;
}

function folderSolvers(cell, solvers){
	if((! cell) || cell==null){
		return solvers.base;
	}
	
	var p = getParent(cell);
	if(p && solvers[p.id]){
		return solvers[p.id];
	}
	
	return folderSolvers(p, solvers);
}


function decodeDNA(dna, agent, keys){
	var type = dna.type;
	var x;
	if (type == "Variable") {
		x = new Variable();
	} else if (type == "State") {
		x = new State();
	} else if (type == "Transition") {
		x = new Transition();
	} else if (type == "Action") {
		x = new Action();
	} else if (type == "Stock") {
		x = new Stock();
	} else if (type == "Flow") {
		x = new Flow();
	} else if (type == "Converter") {
		x = new Converter();
	}

	if(x){
		x.dna = dna;	
		x.id = dna.id;
		x.index = agent.index;
		x.agentId = agent.agentId;
		x.container = agent;
		x.keys = keys;
		x.createIds();
		
		agent.children.push(x);
		agent.childrenId[x.id] = x;
		
	
		if(x instanceof Action){
			dna.solver.actions.push(x);
		}else if(! (x instanceof Agents)){
			dna.solver.valued.push(x)
			if(x instanceof Flow) {
				dna.solver.flows.push(x);
			}
			else if (x instanceof Stock) {
				dna.solver.stocks.push(x);
			}
			else if (x instanceof State) {
				dna.solver.states.push(x);
			}
			else if (x instanceof Transition) {
				dna.solver.transitions.push(x);
			}
		}
	}else if(type == "Agents"){
		agent.children.push(dna.agents);
		agent.childrenId[dna.id] = dna;
	}
	
}

function linkPrimitive(primitive, dna){
	var type = dna.type;
	//console.log("--"+dna.name);
	if(type != "Agents"){
		var myNeighborhood = getPrimitiveNeighborhood(primitive, dna);
			
		if(type == "Flow" || type == "Transition"){
			var alpha = null, omega = null;
			
			if(myNeighborhood["alpha"]){
				alpha = myNeighborhood["alpha"];
			}
			
			if(myNeighborhood["omega"]){
				omega = myNeighborhood["omega"];
			}
			
			primitive.setEnds(alpha, omega);
		}
	
		if(type == "Action"){
			//console.log(myNeighborhood);
			try{
				primitive.equation = trimTree(dna.triggerValue,  myNeighborhood);
			}catch(err){
				error(getText("The trigger for %s has an equation error that must be corrected before the model can be run.", "<i>"+clean(dna.name)+"</i>"), dna.cell, false);
			}
			try{
				primitive.action = trimTree(dna.value,  myNeighborhood);
			}catch(err){
				error(getText("The primitive $s has an equation error that must be corrected before the model can be run.", "<i>"+clean(dna.name)+"</i>"), dna.cell, true);
			}
			primitive.resetTimer();
		}else if (type == "Converter") {
			if (dna.source == "Time") {
				primitive.setSource("*time");
			} else {
				var source = orig(findID(dna.source)).id;
			
				for (var neighbor in myNeighborhood) {
					if (source == myNeighborhood[neighbor].id) {
						primitive.setSource(myNeighborhood[neighbor]);
						break;
					}	
				}
			}
		} else {
			//console.log("setting: "+primitive.name);
			primitive.setEquation(dna.value,  myNeighborhood);
		}
	}
}

function setAgentInitialValues(agent){
	for(var i = 0; i < agent.children.length; i++){
		if(agent.children[i] instanceof Stock){
			agent.children[i].setDelay();
			try{
				agent.children[i].setInitialValue();
			}catch(err){
				if(isLocal()){
					console.log(err);
				}
				if(err instanceof String){
					error(err.substr(4,err.length), agent.children[i], true);
				}else{
					throw err;
				}
			}
		}else if(agent.children[i] instanceof State){
			try{
				if(agent.children[i].active === null){
					agent.children[i].setInitialActive();
				}
			}catch(err){
				if(isLocal()){
					console.log(err);
				}
				if(err instanceof String){
					error(err.substr(4,err.length), agent.children[i], true);
				}else{
					throw err;
				}
			}
		}
	}
	
}

function buildNetwork(submodel){
	if(submodel.network == "Custom Function"){
		var hood  =  getPrimitiveNeighborhood(submodel, submodel.dna);
		var tree = trimTree(createTree(submodel.networkFunction), hood);
		for(var i = 0; i < submodel.agents.length-1; i++){
			for(var j = i+1; j < submodel.agents.length; j++){
				if(trueValue(simpleEquation(submodel.networkFunction, {"-parent": varBank, "a": submodel.agents[i], "b": submodel.agents[j]}, hood, tree))){
					submodel.agents[i].connect(submodel.agents[j]);
				}
			}
		}
	}else if(submodel.network=="None"){
		//nothing to do
	}else{
		throw {
			msg: "Unknown network type: "+submodel.network+".",
			primitive: submodel.cell,
			showEditor: false
		};
	}
}

function buildPlacements(submodel, items){
	var tree;
	var wCount, hCount;
	
	if(submodel.placement == "Random"){
		submodel.agents.forEach(function(s){
			s.location = new Vector([mult(submodel.geoWidth, new Material(Rand())),mult(submodel.geoHeight, new Material(Rand()))], ['x','y']);
		});
	}else if(submodel.placement == "Custom Function"){
		 submodel.agents.forEach(function(s){
			var n = getPrimitiveNeighborhood(submodel, submodel.dna);
			n.self = s;
		 	s.location = simpleUnitsTest(simpleEquation(submodel.placementFunction, varBank, n), submodel.geoDimUnitsObject);
			if(! s.location.names){
				s.location.names = ['x','y'];
				s.location.namesLC = ['x','y'];
			}
		 });
	}else if(submodel.placement == "Grid"){
		tree = trimTree(createTree("{x: x*width(agent), y: y*height(agent)}"), {});
		var size = submodel.agents.length;
		var ratio = simpleNum(simpleEquation("width(agent)/height(agent)", {"agent": submodel, "-parent": varBank}, {}), submodel.geoDimUnitsObject);
		//console.log(ratio)
		hCount = Math.sqrt( size / ratio );
		wCount = Math.floor(hCount * ratio);
					
		hCount  = Math.ceil(hCount);
		if(! hCount*wCount >= size){
			wCount = wCount+1
		}
							
		var j=0;
		submodel.agents.forEach(function(s){
			var xPos = ((j % wCount) + 0.5)/wCount;
			var yPos = (Math.floor(j/wCount)+ 0.5)/hCount;
			s.location = simpleUnitsTest(simpleEquation("{x: x*width(agent), y: y*height(agent)}", {"agent": s, "x": new Material(xPos), "y":new Material(yPos), "-parent": varBank}, {}, tree), submodel.geoDimUnitsObject);
			j++;
		});
	}else if(submodel.placement == "Ellipse"){
		tree = trimTree(createTree("<<width(agent), height(agent)>>/2+<<sin(index(agent)/size*2*3.14159), cos(index(agent)/size*2*3.14159)>>*<<width(agent), height(agent)>>/2"), {});
		var size = new Material(submodel.agents.length);
		submodel.agents.forEach(function(s){
			s.location = simpleUnitsTest(simpleEquation("<<width(agent), height(agent)>>/2+<<sin(index(agent)/size*2*3.14159), cos(index(agent)/size*2*3.14159)>>*<<width(agent), heigh(agent)>>/2", {"agent": s, "size": size, "-parent": varBank }, {}, tree), submodel.geoDimUnitsObject);
		});
	}else if(submodel.placement == "Network"){
		tree = trimTree(createTree("{x: x*width(agent), y: y*height(agent)}"), {});
							 
		var graph = new Graph();
							
		var nodes = submodel.agents.map(function(s){
			return graph.newNode({data:s});
		});
		var getNode = function(item){
			for(var i = 0; i < nodes.length; i++){
									
				if(nodes[i].data.data.fullId==item.fullId){
					return nodes[i];
				}
			}
			return null;
		}
		submodel.agents.forEach(function(a){
			a.connected.forEach(function(target){
				graph.newEdge(getNode(a), getNode(target));
			});
		});
		//console.log("ZZ");
		var layout = new Layout.ForceDirected(graph, 400.0, 600.0, 0.5);
							
		for(var i=0; i<60; i++){
			layout.applyCoulombsLaw();
			layout.applyHookesLaw();
			layout.attractToCentre();
			layout.updateVelocity(0.03);
			layout.updatePosition(0.03);
		}

		/*while(layout.totalEnergy() > 0.01) {
			layout.applyCoulombsLaw();
			layout.applyHookesLaw();
			layout.attractToCentre();
			layout.updateVelocity(0.03);
			layout.updatePosition(0.03);
		}*/
							
		var bb = layout.getBoundingBox();
		//console.log(bb);
		bb.width = bb.topright.x-bb.bottomleft.x;
		bb.height = bb.topright.y-bb.bottomleft.y;
		//console.log(bb);
		var scalePoint = function(p){
			return {x: (p.x-bb.bottomleft.x)/bb.width, y: (p.y-bb.bottomleft.y)/bb.height};
		}
							
		layout.eachNode(function(node, point) {
			var p = scalePoint(point.p);
			//console.log(scalePoint(p));
			node.data.data.location = simpleUnitsTest(simpleEquation("{x: x*width(agent), y: y*height(agent)}", {"agent": submodel, "x":new Material(p.x), "y":new Material(p.y), "-parent": varBank}, {}, tree), submodel.geoDimUnitsObject);
		});
		//console.log("done");
						
	}else{
		throw {
			msg: "Unknown placement type: "+submodel.placement+".",
			primitive: submodel.cell,
			showEditor: false
		};
	}
					
}


var allPlaceholders = {};
function getPrimitiveNeighborhood(primitive, dna){
	var neighbors = neighborhood(dna.cell);
	var placeholders = allPlaceholders[dna.id]?allPlaceholders[dna.id]:{};
	
	var hood = {
		self: primitive
	};
	
	//console.log("----");
	//console.log(dna.name);
	
	if(! neighbors.placeholders){
		if(dna.type=="Agents"){
			for(var i=0; i<primitive.DNAs.length; i++){
				placeholders[primitive.DNAs[i].name.toLowerCase()] = new Placeholder(primitive.DNAs[i], primitive);
			}
		}
	}
	for(var k=0; k<neighbors.length; k++){
		var item = neighbors[k].item;
		if(item.value.nodeName == "Agents"){
			hood[model.submodels[item.id].dna.name.toLowerCase()] = model.submodels[item.id];
			if(! neighbors.placeholders){
				for(var i = 0; i < model.submodels[item.id].DNAs.length; i++){
					hood[model.submodels[item.id].DNAs[i].name.toLowerCase()] = new Placeholder(model.submodels[item.id].DNAs[i], primitive);
				}
			}
		}else{
			
			//console.log(getName(item));
			var found = false;
			if(primitive.container){
				if(primitive.container.childrenId[item.id]){
					var hoodName = primitive.container.childrenId[item.id].dna.name.toLowerCase();
					//while(hood[hoodName]){
						//hoodName += ".extra";
						//}
					hood[hoodName] = primitive.container.childrenId[item.id];
					found = true;
				}
			}
			if(! found){
				if (model.submodels["base"]["agents"][0].childrenId[item.id]) {
					var hoodName = model.submodels["base"]["agents"][0].childrenId[item.id].dna.name.toLowerCase();
					//while(hood[hoodName]){
					//	hoodName += ".extra";
					//}
					hood[hoodName] = model.submodels["base"]["agents"][0].childrenId[item.id];
					found = true;
				}
			}
			
			if(dna.type=="Flow" || dna.type=="Transition"){
				if(hood[hoodName]){
					if(dna.targetId == hood[hoodName].id){
						hood["omega"] = hood[hoodName];
					}else if(dna.sourceId == hood[hoodName].id){
						hood["alpha"] = hood[hoodName];
					}
				}
			}
		}
	}
	

	var keys = Object.keys(placeholders);
	for(var i=0; i<keys.length; i++){
		hood[keys[i]] = placeholders[keys[i]];
	}
	allPlaceholders[dna.id] = placeholders;
	
	//console.log(hood);
	
	return hood;
}

function modelType(type){
	return ! (type == "Link" || type=="Picture" || type=="Text" || type=="Button" || type=="Folder" || type=="Setting" || type=="Display" || type=="Ghost");
}