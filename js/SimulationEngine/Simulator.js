"use strict";
/*

Copyright 2010-2013 Scott Fortmann-Roe. All rights reserved.

This file may distributed and/or modified under the
terms of the Insight Maker Public License (http://insightMaker.com/impl).

*/

function simulateWithErrorCheck(){
	try{
		simulate.run(arguments);
	}catch(err){
		return checkErr(err, this.config);
	}
}

function Simulator(config){
	
	this.randLoc = -1;
	this.lastRandPos = -1;
	this.previousRandLists = [];
	
	this.distanceCache = {};
	
	this.ids = {};
	this.idCount = 0;
	
}

Simulator.prototype.setup = function(config){
	this.model = config.model;
	
	this.timeStart = this.model.timeStart;
	this.timeLength = this.model.timeLength;
	this.timeEnd = plus(this.timeStart, this.timeLength);
	this.timeStep = this.model.solvers.base.timeStep;
	this.userTimeStep = this.model.solvers.base.userTimeStep;
	this.timeUnits = this.timeStart.units.clone();
	
	this.oldAggregateSeries = [];
	this.distanceCache = {};
	this.tasks = new TaskQueue({
		start: this.timeStart,
		end: this.timeEnd
	});
	
	this.doFullSpeed = config.doFullSpeed || false;
}

Simulator.prototype.getID = function(x){
	if(! this.ids[x]){
		this.idCount++;
		this.ids[x] = this.idCount;
	}
	return this.ids[x];
}

Simulator.prototype.time = function(){
	return this.tasks.time;
}

Simulator.prototype.frame = function(valued, displayed){
	valued.forEach(function(v) {
		v.storeValue();
	});
	
	this.printStates(displayed);
}

Simulator.prototype.run = function(config){
	
	var me = this;
	
	if(isUndefined(me.firstTime)){
		me.firstTime = true;
	}else{
		me.firstTime = false;
	}
	
	if(me.firstTime){
		this.config = config;
			
		me.callback = config.callback;
	
		me.agentsChanged = false;
	

		me.results = {Time: [], data: []};
		me.displayInformation = {ids: []};
		me.model.submodels["base"].agents[0].children.forEach(function(x){
			if(! (x instanceof Action)){
				me.displayInformation.ids.push(x.id);
				var data = {};
				if(x instanceof Agents){
					data.width = x.geoWidth;
					data.height = x.geoHeight
					data.units = x.geoDimUnitsObject;
					data.states = x.states();
				}else{
					x.dna.solver.displayed.push(x);
				}
				me.results[x.id] = {data: data, results: [], dataMode: "float"};
			}
			
		});
		
		//this.createSolver(this.model.solvers.base);
		//console.log(this.model.solvers);
		var solvers = Object.keys(this.model.solvers);
		for(var i = 0; i < solvers.length; i++){
			this.createSolver(this.model.solvers[solvers[i]]);
		}
		
		me.tasks.tasks.goMin();
	}
	
	var start = (new Date()).getTime();
	
	try{
		while (! me.tasks.completed()){
			me.tasks.step();
			//console.log("--")
			//console.log(me.time().value)
//			console.log(me.tasks.end.value)
//			console.log(me.tasks.completed())
		
			 var timeTaken = new Date().getTime()-start;
			 var progress = me.progress();
			if((! me.config.silent) && (! me.doFullSpeed) && ( ( (!me.firstTime) && timeTaken>600) || (progress<0.12 && timeTaken>200) || timeTaken > 1000 ) ){
				simulatorProgress.updateProgress(progress, "Current Time: "+round(Math.min(me.timeEnd.value,me.time().value).toString(),12)+" "+me.timeUnits.names[0]);
				setTimeout(simulateWithErrorCheck,50);
				return;
			}
		}
	
	}catch(err){
		if(err.msg != "STOP"){
			throw err;
		}
	}
	
	for (var i = 0; i < this.results.Time.length; i++) {
		for(var j = 0; j < this.displayInformation.ids.length; j++){
			this.results[this.displayInformation.ids[j]].results.push(this.results.data[i][this.displayInformation.ids[j]])
		}
	}
	
	if(this.config.silent){
		return this.results;
	}else{
		simulatorProgress.close();
		threads--;
		this.callback(this.results, this.displayInformation, this.config);
	}
	
}

Simulator.prototype.progress  = function(){
	return div(minus(this.time(), this.timeStart), this.timeLength).value;
}


Simulator.prototype.printStates = function(displayed){
	var t = parseFloat(this.time().value.toPrecision(20));
	if(this.results.Time.indexOf(t) == -1){
		for(var i=this.results.Time.length; i>0; i--){
			if(this.results.Time[i-1]<t){
				this.results.Time.splice(i,0, t)
				this.results.data.splice(i,0, {})
				break;
			}
		}
		if(i==0){
			this.results.Time.splice(0,0, t)
			this.results.data.splice(0,0, {})
		}
	}
	var data = this.results.data[this.results.Time.indexOf(t)];
	
	for(var i = 0; i< displayed.length; i++){
		var v = displayed[i];
		//console.log(v);//XXX fixme
		
		if(v instanceof Agents){
			this.results[v.id].dataMode = "agents";
			data[v.id] = {current: v.collectData()};
		}else{

			var x = v.value();
			//console.log("Counter:"+varBank["counter"].value.toString())
			//console.log("V: "+v.value().value.toString())
			
			if((x instanceof Vector) && (! x.names)){
				data[v.id] = x;
				this.results[v.id].dataMode = "auto";
			}else if(x instanceof Vector){
				var me = this;
				x.recurseApply(function(x){
					return me.adjustNum(v, x);
				});
				data[v.id] = x;
			}else{
				data[v.id] = this.adjustNum(v, x);
			}
		}
	}
}
	
Simulator.prototype.unitsToBase = function(v, u, flow){
	//finders++;
	var i = v.id+"-"+(u?u.id():"");
	//notfound++;
	//console.log(i);
	if(i in this.unitsToBase){return this.unitsToBase[i]};
	//console.log("not found");
	var x = 1;
	if(flow){
		 x =  new Quantities(this.timeUnits).toBase;
	}
	var q = new Quantities(u);
	this.unitsToBase[i] = fn["/"](fn["/"](sn("#e"+q.toBase), v.dna.toBase),sn("#e"+x));
	return this.unitsToBase[i];
	
}

Simulator.prototype.adjustNum = function(v, x){
	if(v.unitless && (! unitless(x.units))){
		error(getText("The result of the calculation has units %s, but the primitive is unitless. Please set the units for the primitive so we can determine the proper output.", x.units.toString()), findID(v.id), true);
	}
	//console.log(x);
	if((v instanceof Flow) && (! v.dna.flowUnitless)){
		x = mult(x, new Material(1, this.timeUnits.clone()));
	}
	//console.log(x);

	if( (v instanceof State) || unitless(x.units) && (! v instanceof Flow)){
		x = x.value;
	}else{
		x = fn["*"](x.value, this.unitsToBase(v, x.units, v instanceof Flow));
	}
	//console.log(x);
	//console.log(parseFloat(x));
	//console.log("--");
	return x+0;
}

Simulator.prototype.createSolver = function(solver){
	var stocks = solver.stocks;
	var flows = solver.flows;
	
	var actions = solver.actions;
	var states = solver.states;
	var transitions = solver.transitions;
	var valued = solver.valued;
	var displayed = solver.displayed;
	
	var id = solver.id;
	
	var timeStep = solver.timeStep;
	var userTimeStep = solver.userTimeStep;
	var RKOrder = solver.RKOrder;
	solver.RKPosition = 1;
	var me = this;
	
	if(RKOrder == 1){
		this.tasks.addEvent(function(timeChange, oldTime, newTime){
			flows.forEach(function(f) {
				f.apply(timeChange, oldTime, newTime);
			});
		})
	
		
		scheduleRepeated(this.tasks,
			{
				expires: 1,
				name: "RK1 Solver",
				action: function(){
					flows.forEach(function(f) {
						f.clean();
					});
					
					valued.forEach(function(v) {
						v.clearCached();
					});
					
					me.frame(valued, displayed);
				
					actions.forEach(function(a) {
						a.test();
					});
					
					transitions.forEach(function(t) {
						t.transition();
					});
				}
			},
			this.timeStart, userTimeStep, this.timeEnd
		);
	}else if(RKOrder == 4){
		/*
	
		1. (t=0) Calculate rates at t=0, move to t=0.5 (rollback restore stocks)
		2. (t=0.5) Calculate rates at t=0.5
		3. (t=0) Use rate of (t=0.5) to move to t=0.5 (rollback restores stocks)
		4. (t=0.5) Calculate rates at t=0.5
		5. (t=0) Use rates of (t=0.5 (2)) to move to t=1 (rollback restores stocks)
		6. (t=1) Calculate rates at t=1
		7. (t=0) Use average rates to move to t=0

		*/
	
		this.tasks.addEvent(function(timeChange, oldTime, newTime){
			if(timeChange.value > 0){
				flows.forEach(function(f) {
					f.apply(timeChange, oldTime, newTime);
				});
			}
		});
	
		scheduleRepeated(me.tasks,
			{	name: "RK4 Solver (Init)",
				priority: -10,
				expires: 1,
				blocker: id+" init",
				action: function(){
					
					flows.forEach(function(f) {
						f.clean();
					});
					
					valued.forEach(function(v) {
						v.clearCached();
					});

					solver.RKPosition = 1;
									
					this.unblock(id+" start");
					this.block();
				}
			},
			this.timeStart, userTimeStep, this.timeEnd
		);
		scheduleRepeated(me.tasks,
			{	name: "RK4 Solver (step 1)",
				priority: -5,
				expires: 4,
				blocker: id+" start",
				action: function(){
					if(solver.RKPosition > 1){
						valued.forEach(function(v) {
							v.clearCached();
							v.pastValues.pop();
						});
					}
					
					me.frame(valued, displayed);
					
					if(solver.RKPosition == 4){
						actions.forEach(function(a) {
							a.test();
						});
						
						this.unblock(id+" init")
					}else{
						stocks.forEach(function(s) {
							s.preserveLevel();
						});
	
						states.forEach(function(s) {
							s.preserveActive();
						});
	
						transitions.forEach(function(t) {
							t.preserveState();
						});
					}
			
					transitions.forEach(function(t) {
						t.transition();
					});
					
					this.block();
					this.unblock(id+" mid")
				},
				rollback: function(){

					stocks.forEach(function(s) {
						s.restoreLevel();
					});
	
					states.forEach(function(s) {
						s.restoreActive();
					});
	
					transitions.forEach(function(t) {
						t.restoreState();
					});
				}
			},
			this.timeStart, userTimeStep, this.timeEnd
		);
		scheduleRepeated(me.tasks,
			{	name: "RK4 Solver (step 2,3)",
				priority: -10,
				expires: 2,
				blocker: id+" mid",
				action: function(){
					valued.forEach(function(v) {
						v.clearCached();
					});
					
					solver.RKPosition++;
				
					flows.forEach(function(f) {
						f.rate = null;
						f.predict();
					});
					this.unblock(id+" start");
					this.block();
				},
				timeShift: function(){
					me.tasks.moveTime(negate(timeStep));
				}
			},
			plus(this.timeStart, timeStep), userTimeStep, this.timeEnd
		);
	
		scheduleRepeated(me.tasks,
			{	name: "RK4 Solver (step 4)",
				priority: -30,
				expires: 1,
				action: function(){
					valued.forEach(function(v) {
						v.clearCached();
					});

					solver.RKPosition++;
				
					flows.forEach(function(f) {
						f.rate = null;
						f.predict();
					});
					this.unblock(id+" start");
				},
				timeShift: function(){
					me.tasks.moveTime(negate(userTimeStep));
				}
			},
			plus(this.timeStart, userTimeStep), userTimeStep, this.timeEnd
		);
		
	}else{
		throw "Unknown solution algorithm."
	}
}
