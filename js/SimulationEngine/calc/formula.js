"use strict";
/*

Copyright 2010-2013 Scott Fortmann-Roe. All rights reserved.

This file may distributed and/or modified under the
terms of the Insight Maker Public License (http://insightMaker.com/impl).

*/

if(! sn){
	var sn = SchemeNumber;
	var fn = sn.fn;
	var ns = fn["number->string"];

	sn.raise = function(conditionType,message){
		if (message == "division by exact zero"){
			throw "MSG: You cannot divide by 0."
		}else{
			throw "BigNum Error: "+message;
		}
	}
}

var varBank = {};
var functionBank = {};
var primitiveBank = {};


varBank["-parent"] = null;
varBank["e"] = new Material(2.71828182845904523536);
varBank["pi"] = new Material(3.14159265358979323846264338);
varBank["phi"] = new Material(1.61803399);


if(! Agent){
	var Agent = function(){}
}
if(! Agents){
	var Agents = function(){}
}

var PrimitiveStore = function(primitive, type){
	this.primitive = primitive;
	this.type = type; // "value", "totalValue", "object"
}

/*

var Primitive = function(value){
	this.val = value;
}
Primitive.prototype.value = function(){
	return this.val;
}
primitiveBank["x"] = new Primitive(10);
primitiveBank["xy"] = new Primitive(5);*/

Boolean.prototype.toNum = function(){
	return this.valueOf();
}
String.prototype.toNum = function(){
	return this.valueOf();
}
Number.prototype.toNum = function(){
	return this.valueOf();
}

var Vector = function(items, names){
	this.items = items;
	this.names = names;
	this.namesLC = names?names.map(function(x){return x?x.toLowerCase():undefined}):undefined;
}
Vector.prototype.toNum = function(){
	if(this.isNum){
		return this;
	}
	for(var i=0; i<this.items.length; i++){
		this.items[i] = this.items[i].toNum();
	}
	this.isNum = true;
	return this;
};
Vector.prototype.toString = function(){
	//console.log(this.names);
	var items = [];
	for(var i=0; i<this.items.length; i++){
		var str = prepareDisplay(this.items[i].toNum().toString())
		if(this.names && this.names[i]){
			str = this.names[i]+": "+str; 
		}
		items.push(str);
	}
	return '&laquo;'+items.join(", ")+'&raquo;';
};
Vector.prototype.length = function(){
	return this.items.length;
};
Vector.prototype.cloneCombine = function(other, operation, rhs, noswitch){
	return this.fullClone().combine(other, operation, rhs, noswitch);
}
Vector.prototype.combine = function(other, operation, rhs, noswitch){	
	if(other instanceof Vector){
		if((this.length() != other.length()) && (! this.names) && (! other.names)){
			throw "MSG: Vectors must have equal length when combined.";
		}
	}
	if((other instanceof Vector) && this.names && other.names){
		if((! noswitch) && other.depth() > this.depth()){
			return other.combine(this, operation, ! rhs);
		}
		if(! this.keysMatch(other.namesLC)){
			if(this.items[0] instanceof Vector){
				for(var i=0; i< this.items.length; i++){
					this.items[i].combine(other, operation, rhs, true)
				}
				return this;
			}else{
				throw "MSG: Keys do not match for vector operation."
			}
		}
	}
	for(var i=0; i< this.length(); i++){
		var x;
		if(other instanceof Vector){
			if(this.names && other.names){
				var index = other.namesLC.indexOf(this.namesLC[i]);
				if(this.names=="*"){
					index = -2;
				}
				if(isUndefined(index) || index == -1){
					index = other.names.indexOf("*");
				}
				if(isUndefined(index) || index == -1){
					throw "MSG: Mismatched keys for vector operation."
				}
				if( index == -2){
					x = undefined;
				}else{
					x = other.items[index];
				}
			}else{
				x = other.items[i];
			}
		}else{
			x = other;
		}
		if(isDefined(x)){
			if(rhs){
				this.items[i] = operation(x, this.items[i]);
			}else{
				this.items[i] = operation(this.items[i], x);
			}
		}
	}
	if(this.names && this.names.indexOf("*") > -1 && (other instanceof Vector) && other.names){
		var starred = this.items[this.names.indexOf("*")]
		for(var i = 0; i < other.names.length; i++){
			if(other.names[i] && (this.namesLC.indexOf(other.namesLC[i]) == -1 || other.names == "*")){

				if(rhs){
					this.items.push(operation(other.items[i], starred));
				}else{
					this.items.push(operation(starred, other.items[i]));
				}
				this.names.push(other.names[i])
				this.namesLC.push(other.namesLC[i])
			}
		}
	}
	return this;
};
Vector.prototype.depth = function(){
	if(this.items.length == 0 || !(this.items[0] instanceof Vector)){
		return 1;
	}
	return this.items[0].depth()+1;
};
Vector.prototype.keysMatch = function(keys){
	if(this.names){
		if(keys.indexOf("*") == -1){
			for(var i = 0; i < this.names.length; i++){
				if(this.names[i] != "*"){
					if(isUndefined(this.names[i])){
						return false;
					}
					if(keys.indexOf(this.namesLC[i])==-1){
						return false
					}
				}
			}
		}
		if(this.names.indexOf("*") == -1){
			for(var i = 0; i < keys.length; i++){
				if(keys[i] != "*"){
					if(isUndefined(keys[i])){
						return false;
					}
					if(this.namesLC.indexOf(keys[i])==-1){
						return false
					}
				}
			}
		}
	}else{
		return false
	}
	return true;
};
Vector.prototype.cloneApply = function(operation){
	return this.fullClone().apply(operation);
};
Vector.prototype.apply = function(operation){
	for(var i=0; i < this.items.length; i++){
		this.items[i] = operation(this.items[i]);
	}
	return this;
};
Vector.prototype.stackApply = function(operation){
	//console.log("Stacking")
	if(this.depth() == 1){
		return operation(this);
	}
	var s = this.stack();
	//console.log(s);
	return s.recurseApply(operation);
};
Vector.prototype.stack = function(selector){
	//console.log("Stack!")
	var res = [];
	
	selector = selector || [0];
	
	var base = this.select(selector);
	
	
	for(var i=1; i<this.items.length; i++){
		selector[0] = i;
		var alt = this.select(selector);
		if((base instanceof Vector ) && (alt instanceof Vector)){
			if((base.items.length != alt.items.length) || (base.names && (! alt.names)) || (alt.names && (! base.names))){
				throw "MSG: Mismatched keys for vector collapsing.";
			}
		}else if(! ((base instanceof Vector ) || (alt instanceof Vector)) ){
			throw "MSG: Mismatched keys for vector collapsing.";
		}
	}
	selector[0] = 0
	
	selector.push(0)
	
	//console.log(base.items.length);
	for(var i = 0; i < base.items.length; i++){
		//console.log(i)
		selector[selector.length-1] = base.names?base.namesLC[i]:i;
		
		if(base.items[i] instanceof Vector){
			res.push(this.stack(selector.slice()));
		}else{
			var vecs = [];
			var baseSub;
			for(var j = 0; j < this.items.length; j++){
				var newSelector = selector.slice();
				newSelector[0] = j
				
				vecs.push(this.select(newSelector));
			}
			var v = new Vector(vecs);
			v.terminateApply = true; 
			res.push(v);
		}
	}
	
	return new Vector(res, base.names?base.names.slice():undefined);
};
Vector.prototype.select = function(selector){
	var b = this;
	
	for(var s = 0; s < selector.length; s++){
		if(! b.items){
			throw "MSG: Number where vector expected in vector collapsing.";
		}
		if((typeof selector[s]) == "string"){
			var ind = b.namesLC.indexOf(selector[s]);
			if(ind == -1){
				throw "MSG: Mismatched keys for vector collapsing.";
			}
			b = b.items[ind];
		}else{
			b = b.items[selector[s]];
		}
	}
	return b;
};
Vector.prototype.recurseApply = function(operation){
	for(var i=0; i < this.items.length; i++){
		if((this.items[i] instanceof Vector) && !(this.items[i].terminateApply)){
			this.items[i] = this.items[i].recurseApply(operation);
		}else{
			this.items[i] = operation(this.items[i]);
		}
	}
	return this;
};
Vector.prototype.fullNames = function(){
	if(this.items[0] instanceof Vector){
		var subn = this.items[0].fullNames()
		var n = [];
		for(var i = 0; i < this.names.length; i++){
			for(var j = 0; j< subn.length; j++){
				n.push([this.names[i]].concat(subn[j]))
			}
		}
		//console.log(n)
		return n;
	}else{
		//console.log(this.names)
		//console.log(this.names.map(function(x){return [x]}))
		var n = this.names.map(function(x){return [x]});
		//console.log("++")
		//console.log(n)
		return n
	}
}
Vector.prototype.clone = function(){
	var newItems = [];
	for(var i=0; i<this.items.length; i++){
		if(this.items[i] instanceof Vector){
			newItems.push(this.items[i].clone());
		}else{
			newItems.push(this.items[i]);
		}
	}
	return new Vector(newItems, this.names?this.names.slice():undefined);
};
Vector.prototype.fullClone = function(){
	var newItems = [];
	for(var i=0; i<this.items.length; i++){
		if(this.items[i].fullClone){
			newItems.push(this.items[i].fullClone());
		}else{
			newItems.push(this.items[i]);
		}
	}
	return new Vector(newItems, this.names?this.names.slice():undefined);
};

Vector.prototype.equals = function(vec){
	if(this.length() != vec.length()){
		return false;
	}
	
	for(var i = 0; i < this.items.length; i++){
		if(! strictEquals(this.items[i], vec.items[i])){
			return false;
		}
	}
	return true;
}


if(! Primitive){
	var Primitive = function(n){
		this.v = n;
	}
	Primitive.prototype.value = function(){
		return this.v.fullClone();
	};
	Primitive.prototype.setValue = function(newValue){
		this.v = newValue;
		return newValue;
	};
	Primitive.prototype.toNum = function(){
		return this.v.fullClone();
	};
	Primitive.prototype.toString = function(){
		return "Primitive Reference";
	};
	primitiveBank["test"] = new Primitive(new Material(3));
	primitiveBank["test vector"] = new Primitive(new Vector([new Material(1), new Material(2), new Material(3)]));	
}

function strictEquals(a,b){
	if((a instanceof Agent) || (b instanceof Agent)){
		if((a instanceof Agent) && (b instanceof Agent)){
			if(a.instanceId == b.instanceId){
				return true
			}
		}
	}else if((a instanceof Vector) || (b instanceof Vector)){
		if((a instanceof Vector) && (b instanceof Vector)){
			if(a.equals(b)){
				return true;
			}
		}
	}else if(eq(a,b)){
		return true;
	}
	return false;
}

function createTree(input){
	var cstream = new org.antlr.runtime.ANTLRStringStream(input.replace(/\\n/g,"\n"));
	var lexer = new FormulaLexer(cstream);
	var tstream = new org.antlr.runtime.CommonTokenStream(lexer);
	var parser = new FormulaParser(tstream);
	var parsedTree = parser.lines();
	var root = convertToObject(parsedTree.tree, parser);
	if (isLocal()) {
		//console.log(root);
	}
	return root;
}
function trimTree(root, primitiveBank){
	return trimNode(root, primitiveBank);	
}
function evaluateTree(root, varBank){
	evaluatingLine = undefined;
	try {
		return evaluateNode(root, varBank);	
	}catch(err){
		if(err.returnVal){
			return err.data;
		}else{
			throw(err);
		}
	}
}

function evaluate(input) {
	//console.log(input);
	var root = trimTree(createTree(input), primitiveBank);
	//console.log(root);
	var x;
	try {
		x = evaluateTree(root, varBank);
		//console.log(root);
 	}catch(err){
		 if(err=="PLOT"){
			var res = {isPlot: true};
			res.data = [];
			var newBank = {};
			newBank["-parent"] = varBank;
 			for(var i = -100; i <= 100; i += 1){
				newBank["x"] = new Material(i/10);
				res.data.push([i/10, 0+evaluateTree(root, newBank).value]);
 			}
			
			return res;
 		}else{
 			throw(err);
 		}
 	}
	if(x instanceof Material){
		var q = new Quantities(x.units);
		//console.log(x.value);
		//console.log(ns(x.value));
		//console.log(x.value.toExponential());
		//console.log(x.value.toPrecision(21));
		x.value = fn["*"](x.value, sn("#e"+q.toBase)).toPrecision(21);//parseFloat((x.value*q.toBase).toPrecision(15));
		
		x.units = q.units;
		if(x.value.substr(x.value.length-1,1)=="."){
			x.value=x.value.substring(0, x.value.length-1)
		}
		x.value=x.value.replace(/\.?\+\.?/g,"+");
		x.value=x.value.replace(/\.?\-\.?/g,"-");
		x.value=x.value.replace(/\.i/g,"i");
		x.value=x.value.replace(/(\d)i/g,"$1*<i>i</i>");
		x.value=x.value.replace(/\.e/g,"e");
		x.value=x.value.replace(/e\+/g,"e");
		
		if(x.value=="+inf.0"){
			x.value="Infinity";
		}else if(x.value=="-inf.0"){
			x.value="-Infinity";
		}
	}
	
	return x;
}

var TreeNode = function(text, typeName, line){
	this.origText = text;
	this.text = text.toLowerCase();
	this.typeName = typeName;
	this.line = line;
	this.children = [];
};

function convertToObject(node, parser) {
	var t = node.getToken();
	var current = new TreeNode( t.getText(), parser.getTokenNames()[t.getType()], t.line);
	//Add children
	/*console.log("--")
	console.log(t);
	console.log(current);*/
	
	if (node.getChildCount() > 0) {
		var children = node.getChildren();
		for (var i=0; i<children.length; i++) {
			current.children.push(convertToObject(children[i], parser));

			if((! current.line) && current.children[current.children.length-1].line){
				current.line = current.children[current.children.length-1].line;
			}
		}
	}

	return current;
}


var funcEvalMap = new Object();
var evaluatingLine = null;

funcEvalMap["LINES"] = function(node, scope) {
	if(node.children.length==0){
		return new Material(0);
	}
	var response;
	for(var i=0; i<node.children.length; i++){
		if(node.children[i].text=="return"){
			throw {returnVal: true, data: evaluateNode(node.children[i].children[0], scope)};
		}else{
			response =  evaluateNode(node.children[i], scope);
		}
	}
	return response;
};

funcEvalMap["NEGATE"] = function(node, scope) {
	return negate(evaluateNode(node.children[0], scope).toNum());
};
function negate(x){
	if(x instanceof Vector){
		return x.cloneApply(negate);
	}
	
	if((typeof x == 'boolean')){
		throw "MSG: Cannot convert Booleans to Numbers.";
	}
	if((x instanceof Agent)){
		throw "MSG: Cannot convert Agents to Numbers.";
	}
	
	return new Material(fn["-"](x.value), x.units?x.units.clone():undefined);
};

funcEvalMap["AND"] = function(node, scope) {
	return funAnd(evaluateNode(node.children[0], scope).toNum(), evaluateNode(node.children[1], scope).toNum())
};

function funAnd(lhs,rhs){
	if(lhs instanceof Vector){
		return lhs.cloneCombine(rhs, funAnd, false);
	}else if(rhs instanceof Vector){
		return rhs.cloneCombine(lhs, funAnd, true);
	}
	
	return trueValue(lhs) && trueValue(rhs);
};

funcEvalMap["OR"] = function(node, scope) {
	return funOr(evaluateNode(node.children[0], scope).toNum(), evaluateNode(node.children[1], scope).toNum())
};

function funOr(lhs,rhs){
	if(lhs instanceof Vector){
		return lhs.cloneCombine(rhs, funOr, false);
	}else if(rhs instanceof Vector){
		return rhs.cloneCombine(lhs, funOr, true);
	}
	
	return trueValue(lhs) || trueValue(rhs);
};

funcEvalMap["XOR"] = function(node, scope) {
	return funXor(evaluateNode(node.children[0], scope).toNum(), evaluateNode(node.children[1], scope).toNum())
};

function funXor(lhs,rhs){
	if(lhs instanceof Vector){
		return lhs.cloneCombine(rhs, funXor, false);
	}else if(rhs instanceof Vector){
		return rhs.cloneCombine(lhs, funXor, true);
	}
	
	return (trueValue(lhs) || trueValue(rhs)) && ! (trueValue(lhs) && trueValue(rhs));
};


funcEvalMap["NOT"] = function(node, scope) {
	return fNot(evaluateNode(node.children[0], scope).toNum());
};

function fNot(x){
	if(x instanceof Vector){
		return x.cloneApply(fNot);
	}
	
	return ! trueValue(x);
};

funcEvalMap["NOTEQUALS"] = function(node, scope) {
	return neq(evaluateNode(node.children[0], scope).toNum(), evaluateNode(node.children[1], scope).toNum());
};

function neq(lhs, rhs){
	if((typeof lhs == "boolean" && !(rhs instanceof Vector)) || (typeof rhs == "boolean" && !(lhs instanceof Vector))){
		return trueValue(lhs)!=trueValue(rhs);
	}
	if((typeof lhs == "string" && !(rhs instanceof Vector)) || (typeof rhs == "string" && !(lhs instanceof Vector))){
		return (lhs.toLowerCase?lhs.toLowerCase():lhs) != (rhs.toLowerCase?rhs.toLowerCase():rhs);
	}
	
	if(lhs instanceof Vector){
		return lhs.cloneCombine(rhs, neq, false);
	}else if(rhs instanceof Vector){
		return rhs.cloneCombine(lhs, neq, true);
	}
	
	if (!unitsEqual(lhs.units, rhs.units)) {
		var scale = convertUnits(rhs.units, lhs.units);
		if (scale == 0) {
			return true;
		} else {
			rhs.value = fn["*"](rhs.value, scale);
			rhs.units = lhs.units?lhs.units.clone():undefined;
		}
	}

	return ! fn["="](lhs.value, rhs.value);
};

funcEvalMap["EQUALS"] = function(node, scope) {
	return eq(evaluateNode(node.children[0], scope).toNum(), evaluateNode(node.children[1], scope).toNum());
};

function eq(lhs, rhs){
	if(((typeof lhs) == "boolean" && !(rhs instanceof Vector)) || ((typeof rhs) == "boolean" && !(lhs instanceof Vector))){
		return trueValue(lhs)==trueValue(rhs);
	}
	if(((typeof lhs) == "string" && !(rhs instanceof Vector)) || ((typeof rhs) == "string" && !(lhs instanceof Vector))){
		return (lhs.toLowerCase?lhs.toLowerCase():lhs) == (rhs.toLowerCase?rhs.toLowerCase():rhs);
	}
	
	if(lhs instanceof Vector){
		return lhs.cloneCombine(rhs, eq, false);
	}else if(rhs instanceof Vector){
		return rhs.cloneCombine(lhs, eq, true);
	}
	
	if (!unitsEqual(lhs.units, rhs.units)) {
		var scale = convertUnits(rhs.units, lhs.units);
		if (scale == 0) {
			return false;
		} else {
			rhs.value = fn["*"](rhs.value, scale);
			rhs.units = lhs.units?lhs.units.clone():undefined;
		}
	}

	return fn["="](lhs.value, rhs.value);
};

funcEvalMap["LT"] = function(node, scope) {
	return lessThan(evaluateNode(node.children[0], scope).toNum(), evaluateNode(node.children[1], scope).toNum());
};
function lessThan(lhs, rhs){
	if(lhs instanceof Vector){
		return lhs.cloneCombine(rhs, lessThan, false);
	}else if(rhs instanceof Vector){
		return rhs.cloneCombine(lhs, lessThan, true);
	}
	
	
	if (!unitsEqual(lhs.units, rhs.units)) {
		var scale = convertUnits(rhs.units, lhs.units);
		if (scale == 0) {
			unitAlert(lhs.units, rhs.units, "comparison");
		} else {
			rhs.value = fn["*"](rhs.value, scale);
			rhs.units = lhs.units?lhs.units.clone():undefined;
		}
	}

	return fn["<"](lhs.value, rhs.value);;
};

funcEvalMap["LTEQ"] = function(node, scope) {
	return lessThanEq(evaluateNode(node.children[0], scope).toNum(), evaluateNode(node.children[1], scope).toNum());
};
function lessThanEq(lhs, rhs){
	
	if(lhs instanceof Vector){
		return lhs.cloneCombine(rhs, lessThanEq, false);
	}else if(rhs instanceof Vector){
		return rhs.cloneCombine(lhs, lessThanEq, true);
	}
	
	if (!unitsEqual(lhs.units, rhs.units)) {
		var scale = convertUnits(rhs.units, lhs.units);
		if (scale == 0) {
			unitAlert(lhs.units, rhs.units, "comparison");
		} else {
			rhs.value = fn["*"](rhs.value, scale);
			rhs.units = lhs.units?lhs.units.clone():undefined;
		}
	}

	return fn["<="](lhs.value, rhs.value);
};

funcEvalMap["GT"] = function(node, scope) {
	return greaterThan(evaluateNode(node.children[0], scope).toNum(), evaluateNode(node.children[1], scope).toNum());
};

function greaterThan(lhs, rhs){
	
	if(lhs instanceof Vector){
		return lhs.cloneCombine(rhs, greaterThan, false);
	}else if(rhs instanceof Vector){
		return rhs.cloneCombine(lhs, greaterThan, true);
	}
	
	if (! unitsEqual(lhs.units, rhs.units)) {
		var scale = convertUnits(rhs.units, lhs.units);
		if (scale == 0) {
			unitAlert(lhs.units, rhs.units, "comparison");
		} else {
			rhs.value = fn["*"](rhs.value, scale);
			rhs.units = lhs.units?lhs.units.clone():undefined;
		}
	}

	return fn[">"](lhs.value, rhs.value);
};

funcEvalMap["GTEQ"] = function(node, scope) {
	return greaterThanEq(evaluateNode(node.children[0], scope).toNum(), evaluateNode(node.children[1], scope).toNum());
};

function greaterThanEq(lhs, rhs){
	
	
	if(lhs instanceof Vector){
		return lhs.cloneCombine(rhs, greaterThanEq, false);
	}else if(rhs instanceof Vector){
		return rhs.cloneCombine(lhs, greaterThanEq, true);
	}
	
	
	if (! unitsEqual(lhs.units, rhs.units)) {
		var scale = convertUnits(rhs.units, lhs.units);
		if (scale == 0) {
			unitAlert(lhs.units, rhs.units, "comparison");
		} else {
			rhs.value = fn["*"](rhs.value, scale);
		}
	}

	return fn[">="](lhs.value, rhs.value);
};

funcEvalMap["PLUS"] = function(node, scope) {
	return plus(evaluateNode(node.children[0], scope).toNum(), evaluateNode(node.children[1], scope).toNum());
};

function plus(lhs, rhs){
	if(lhs instanceof Vector){
		return lhs.cloneCombine(rhs, plus, false);
	}else if(rhs instanceof Vector){
		return rhs.cloneCombine(lhs, plus, true);
	}
	
	if((typeof lhs == 'boolean') || (typeof rhs == 'boolean')){
		throw "MSG: Cannot convert Booleans to Numbers.";
	}
	if((lhs instanceof Agent) || (rhs instanceof Agent)){
		throw "MSG: Cannot convert Agents to Numbers.";
	}
	if((typeof lhs == 'string') || (typeof rhs == 'string')){
		return lhs.toString()+rhs.toString();
	}
	
	if (!unitsEqual(lhs.units, rhs.units)) {
		var scale = convertUnits(rhs.units, lhs.units);
		if (scale == 0) {
			unitAlert(lhs.units, rhs.units, "addition");
		} else {
			rhs.value = fn["*"](rhs.value, scale);
			rhs.units = lhs.units?lhs.units.clone():undefined;
		}
	}

	return new Material(fn["+"](lhs.value, rhs.value), rhs.units?rhs.units.clone():undefined);

};

funcEvalMap["MINUS"] = function(node, scope) {
	return minus(evaluateNode(node.children[0], scope).toNum(), evaluateNode(node.children[1], scope).toNum());
};

function minus(lhs, rhs){

	if(lhs instanceof Vector){
		return lhs.cloneCombine(rhs, minus, false);
	}else if(rhs instanceof Vector){
		return rhs.cloneCombine(lhs, minus, true);
	}
	
	if((typeof lhs == 'boolean') || (typeof rhs == 'boolean')){
		throw "MSG: Cannot convert Booleans to Numbers.";
	}
	if((lhs instanceof Agent) || (rhs instanceof Agent)){
		throw "MSG: Cannot convert Agents to Numbers.";
	}
	
	if (! unitsEqual(lhs.units, rhs.units)) {
		var scale = convertUnits(rhs.units, lhs.units);
		if (scale == 0) {
			unitAlert(lhs.units, rhs.units, "subtraction");
		} else {
			rhs.value = fn["*"](rhs.value, scale);
			rhs.units = lhs.units?lhs.units.clone():undefined;
		}
	}

	return new Material(fn["-"](lhs.value, rhs.value), rhs.units?rhs.units.clone():undefined);
};

funcEvalMap["MULT"] = function(node, scope) {
	return mult(evaluateNode(node.children[0], scope).toNum(), evaluateNode(node.children[1], scope).toNum());
};

function mult(lhs, rhs){
	if(lhs instanceof Vector){
		return lhs.cloneCombine(rhs, mult, false);
	}else if(rhs instanceof Vector){
		return rhs.cloneCombine(lhs, mult, true);
	}
	
	if((typeof lhs == 'boolean') || (typeof rhs == 'boolean')){
		throw "MSG: Cannot convert Booleans to Numbers.";
	}
	if((lhs instanceof Agent) || (rhs instanceof Agent)){
		throw "MSG: Cannot convert Agents to Numbers.";
	}
	
	
	var x = new Material(fn["*"](lhs.value, rhs.value));
	if(lhs.units && rhs.units){
		x.units = lhs.units.clone();
		x.units.multiplyUnitStore(rhs.units, 1);
		x.simplify();
	}else if(lhs.units){
		x.units = lhs.units.clone();
	}else if(rhs.units){
		x.units = rhs.units.clone();
	}
	
	return x;
};

funcEvalMap["DIV"] = function(node, scope) {
	return div(evaluateNode(node.children[0], scope).toNum(), evaluateNode(node.children[1], scope).toNum());
};

function div(lhs, rhs){
	if(lhs instanceof Vector){
		return lhs.cloneCombine(rhs, div, false);
	}else if(rhs instanceof Vector){
		return rhs.cloneCombine(lhs, div, true);
	}
	
	if((typeof lhs == 'boolean') || (typeof rhs == 'boolean')){
		throw "MSG: Cannot convert Booleans to Numbers.";
	}
	if((lhs instanceof Agent) || (rhs instanceof Agent)){
		throw "MSG: Cannot convert Agents to Numbers.";
	}
	
	var x = new Material(fn["/"](lhs.value, rhs.value));
	if(lhs.units && rhs.units){
		x.units = lhs.units.clone();
		x.units.multiplyUnitStore(rhs.units, -1);
		x.simplify();
	}else if(lhs.units){
		x.units = lhs.units.clone();
	}else if(rhs.units){
		x.units = rhs.units.clone();
		for(var i = 0; i < x.units.exponents.length; i++){
			x.units.exponents[i] = -x.units.exponents[i];
		}
	}
	
	return x;
};


funcEvalMap["POWER"] = function(node, scope) {
	if(node.children.length == 1){
		return evaluateNode(node.children[0], scope);
	}

	var rhs = evaluateNode(node.children[node.children.length - 1], scope).toNum();
	
	for(var j = node.children.length - 1; j > 0; j--){
		var lhs = evaluateNode(node.children[j - 1], scope).toNum();
		if ((rhs instanceof Vector) || unitless(rhs.units)) {
			rhs = power(lhs, rhs);
		} else {
			throw "MSG: Exponents may not have units.";
		}
	}
	return rhs;
};

function power(lhs, rhs){
	if(lhs instanceof Vector){
		return lhs.cloneCombine(rhs, power, false);
	}else if(rhs instanceof Vector){
		return rhs.cloneCombine(lhs, power, true);
	}
	
	if((typeof lhs == 'boolean') || (typeof rhs == 'boolean')){
		throw "MSG: Cannot convert Booleans to Numbers.";
	}
	if((lhs instanceof Agent) || (rhs instanceof Agent)){
		throw "MSG: Cannot convert Agents to Numbers.";
	}
	if(lhs.units){
		for (var i = 0; i < lhs.units.exponents.length; i++) {
			lhs.units.exponents[i] = lhs.units.exponents[i] * rhs.value;
		}
	}
	
	var x = lhs.value;
	if(typeof x == "number"){
		x = sn("#e"+x)
	}
	return new Material(fn.expt(x, rhs.value), lhs.units?lhs.units.clone():undefined);
};

funcEvalMap["MOD"] = function(node, scope) {
	return doMod(evaluateNode(node.children[0], scope).toNum(), evaluateNode(node.children[1], scope).toNum());
};

function doMod(lhs, rhs){
	if(lhs instanceof Vector){
		return lhs.cloneCombine(rhs, doMod, false);
	}else if(rhs instanceof Vector){
		return rhs.cloneCombine(lhs, doMod, true);
	}
	
	if((typeof lhs == 'boolean') || (typeof rhs == 'boolean')){
		throw "MSG: Cannot convert Booleans to Numbers.";
	}
	if((lhs instanceof Agent) || (rhs instanceof Agent)){
		throw "MSG: Cannot convert Agents to Numbers.";
	}
	
	if (unitless(rhs.units)) {
		return new Material(fn.mod(lhs.value, rhs.value), lhs.units?lhs.units.clone():undefined);
	} else {
		throw "MSG: The right hand side of \"mod\" may not have units."
	}
};


funcEvalMap["IDENT"] = function(node, scope) {
	var varName = node.text;
	
	while ( !(varName in scope) ) {
		if ( scope["-parent"] ) {
			scope = scope["-parent"];
		} else {
			//Attempt to use the variable as a function call
			if(varName in functionBank){
				if ("fn" in functionBank[varName]) {
					return functionBank[varName].fn([]) // user defined function
				} else {
					return functionBank[varName]([]); //built-in
				}
			}
			if(varName == "x" && window.timeStep === undefined){
				throw "PLOT" ;
			}else if(varName=="i"){//imaginary number
				return new Material(sn("i"));
			}else{
				throw "MSG: The variable \"" + node.origText + "\" does not exist.";
			}
		}
	}
	if(scope[varName].fullClone){
		return scope[varName].fullClone();
	}else{
		return scope[varName];
	}
};

funcEvalMap["INNER"] = function(node, scope) {
	if(node.children.length == 1){
		return evaluateNode(node.children[0], scope);
	}else{
		
		return selectFromMatrix(evaluateNode(node.children[0], scope).toNum(), createMatrixSelector(node, scope, 1, true));
	}
};

function createMatrixSelector(node, scope, offset, createFunctions){
	var selector = [];
	var lastComma = true;
	offset = offset || 0;
	for(var i=offset; i<node.children.length; i++){
		var child = node.children[i];
		if(child.typeName=="COMMA"){
			if(lastComma){
				selector.push("*")
			}
			if(i == node.children.length-1){
				selector.push("*");
			}
			lastComma = true;
		}else{
			lastComma = false;
			if(createFunctions && node.children[i].typeName=="IDENT" && functionBank[node.children[i].text]){
				var fn = functionBank[node.children[i].text];
				if(fn.fn){
					fn = fn.fn;
				}
				selector.push(function(x){
					return x[0].stackApply(function(x){
						return fn([x]);	
					});
				});
			}else{
				selector.push(evaluateNode(node.children[i], scope).toNum());
			}
		}
	}
	return selector
}

function selectFromMatrix(mat, items, fill){
	//console.log("--")
	//console.log(items)
	var root = selectFromVector(mat, items.shift(), items.length==0?fill:undefined)
	var children = [];
	if(root.collapsed){
	 	children = [root.data];
	}else{
		children = root.data.items;
	}
	//console.log(children);
	while(items.length > 0){
		//console.log("iteration");
		//console.log(children);
		var newChildren = [];
		var selector = items.shift();
		for(var i = 0; i < children.length; i++){
			//console.log("child")
			//console.log(children[i])
			if(! (children[i] instanceof Vector)){
				throw "MSG: Invalid dimensions for vector selection.";
			}
			var vec = selectFromVector(children[i], selector, items.length==0?fill:undefined);

			
			if(vec.collapsed){

				if(! fill){
					children[i].items = [vec.data];
					children[i].names = ["!!BREAKOUT DATA"]; 
				}
			
				newChildren=newChildren.concat(vec.data)
			}else{
				newChildren=newChildren.concat(vec.data.items)

				if(! fill){
					children[i].items = vec.data.items;
					children[i].names = vec.data.names;
				}
			}
		}
		children = newChildren;
	}
	
	//console.log("done:")
	//console.log(root.data)

	return doBreakouts(root.data);
}

function doBreakouts(vec){
	if(! (vec instanceof Vector)){
		return vec;
	}
	if(vec.items.length==1 && vec.names && vec.names[0]=="!!BREAKOUT DATA"){
		return vec.items[0]
	}
	for(var i=0; i < vec.items.length; i++){
		vec.items[i] = doBreakouts(vec.items[i])
	}
	return vec;
}

function selectFromVector(vec, items, fill){

	if(items=="*"){
		return {data: vec};
	}else if(items instanceof Function){
		return {data: items([vec]), collapsed: true};
	}
	
	var handleIndex = function(index){
		if(index<0 || index>=vec.items.length){
			throw "MSG: Index not in vector.";
		}
		if(isUndefined(index)){
			throw "MSG: Key not in vector";
		}
		if(fill){
			vec.items[index] = fill;
		}
		res.push(vec.items[index]);
		if(names){
			names.push(vec.names[index]);
		}
	}
	
	var res = [];
	var names = vec.names?[]:undefined;
	if(items instanceof Vector){
		for(var i=0; i < items.items.length; i++){
			if(typeof items.items[i] == "string"){
				if(!vec.names){
					throw "MSG: Key '"+items.items[i]+"' not in vector."
				}
				var index = vec.namesLC.indexOf(items.items[i].toLowerCase());
				if(index<0 || isUndefined(index)){
					index = vec.names.indexOf("*");
				}
				handleIndex(index);
			}else if(typeof items.items[i] == "boolean"){
				if(items.items[i]){
					handleIndex(i);
				}
			}else{
				handleIndex(minus(items.items[i].toNum(), new Material(sn("#e"+1))));
			}
		}
	}else{
		if( typeof items == "string"){
			if(!vec.names){
				throw "MSG: Key '"+items+"' not in vector."
			}
			var index = vec.namesLC.indexOf(items.toLowerCase());
			if(index<0 || isUndefined(index)){
				index = vec.names.indexOf("*");
			}
			handleIndex(index);
			
		}else{
			handleIndex(minus(items.toNum(), new Material(sn("#e"+1))));
		}
		
		return {collapsed: true, parent: vec, data: res[0]};
	}
	return {collapsed: false, parent: vec, data: new Vector(res, names)};
}


funcEvalMap["ARRAY"] = function(node, scope) {
	var vals = [];
	var names = [];
	var hasName = false;
	for (var i = 0; i < node.children.length; i++){
		vals.push(evaluateNode(node.children[i].children[0], scope));
		if(node.children[i].children.length>1){
			names.push(node.children[i].children[1]);
			hasName = true;
		}else{
			names.push(undefined);
		}
	}
	return new Vector(vals, hasName?names:undefined);
};

funcEvalMap["MINARRAY"] = function(node, scope) {
	if(node.children.length==1){
		return evaluateNode(node.children[0], scope);
	}
	var vals = [];
	var start = evaluateNode(node.children[0], scope).toNum();
	var end = evaluateNode(node.children[1], scope).toNum();

	vals.push(start.fullClone());
	if (!unitsEqual(start.units, end.units)) {
		var scale = convertUnits(start.units, end.units);
		if (scale != 1) {
			//console.log(scale)
			throw "MSG: Units on both sides of ':' must be equal."
		}
	}
	//throw "modsa";
	var step = new Material(1, start.units?start.units.clone():undefined);
	
	if(eq(start,end)){
		
	}else if(lessThan(start, end)){
		var it = plus(start, step);
		while(lessThanEq(it, end)){
			vals.push(it);
			it = plus(it, step);
		}
	}else if(greaterThan(start, end)){
		var it = minus(start, step);
		while(greaterThanEq(it, end)){
			vals.push(it);
			it = minus(it, step);
		}
	}
	//console.log(vals)
	
	return new Vector(vals);
};

funcEvalMap["FUNCALL"] = function(node, scope) {
	if(! node.functionFingerprint){
		node.functionFingerprint = "FINGERPRINT-" + Math.random();
		
		var fnName = node.children[0].text;
		if (functionBank[fnName]) {
			if (functionBank[fnName].fn) {
				node.fn = functionBank[fnName].fn; // user defined function
			} else {
				node.delayEvalParams = functionBank[fnName].delayEvalParams;
				node.fn = functionBank[fnName]; //built-in
			}
		}else{
			throw "MSG: The function \"" + node.children[0].origText + "\" does not exist.";
		}
	}
	var vals = [];
	
	if(node.delayEvalParams){
		//don't evaluate params right away. needed for IfThenElse and short circuiting
		for (var i = 1; i < node.children.length; i++){
			vals.push({node: node.children[i], scope: scope});
		}
	}else{
		for (var i = 1; i < node.children.length; i++){
			vals.push(evaluateNode(node.children[i], scope));
		}
	}
	return node.fn(vals, node.functionFingerprint);
	
};

function makeFunctionCall(varName, varNames, varDefaults, node) {

	var fn = new Object();

	fn.localScope = new Object();
	fn.localScope["nVars"] = varNames.length;
	for (var i = 0; i < varNames.length; i++) {
		fn.localScope[i += ""] = varNames[i];
	}
	fn.localScope["-parent"] = varBank;
	fn.defaults = varDefaults;
	
	fn.fn = function(x) {
		if (fn.localScope["nVars"] - fn.defaults.length > x.length || x.length > fn.localScope["nVars"]) {
			var names = [];
			for (var i = 0; i < fn.localScope["nVars"]; i++) {
				if(fn.defaults.length - (fn.localScope["nVars"]-i)>-1){
					names.push(fn.localScope[i += ""] + "=" + fn.defaults[fn.defaults.length - (fn.localScope["nVars"]-i)]);
				}else{
					names.push(fn.localScope[i += ""]);
				}
			}
			
			throw "MSG: Wrong number of parameters for " + varName + "("+names.join(", ")+").";
		}
		var localScope = {"-parent": varBank};
		
		//console.log(fn.localScope);
		for (var i = 0; i < x.length; i++) {
			localScope[fn.localScope[i += ""]] = x[i];
		}
		for (var i = x.length; i < fn.localScope["nVars"]; i++) {
			localScope[fn.localScope[i += ""]] = fn.defaults[fn.defaults.length - (fn.localScope["nVars"]-i)];
		}

		try{
			return evaluateNode(node, localScope);
		}catch(err){
			if(err.returnVal){
				return err.data;
			}else{
				throw(err);
			}
		}
	};

	return fn;
};

funcEvalMap["WHILE"] = function(node, scope) {
	var lastResult = new Material(0);
	var innerScope = {"-parent": scope};
	while(trueValue(evaluateNode(node.children[0], scope).toNum())){
		lastResult = evaluateNode(node.children[1], innerScope);
	}
	return lastResult;
};

funcEvalMap["IFTHENELSE"] = function(node, scope) {
	//console.log(node);
	var innerScope = {"-parent": scope};
	for(var i=0; i<node.children[0].children.length; i++){
		if(trueValue(evaluateNode(node.children[0].children[i], scope).toNum())){
			return evaluateNode(node.children[1].children[i], innerScope);
		}
	}
	if(node.children[0].children.length != node.children[1].children.length){
		return evaluateNode(node.children[1].children[i], innerScope);
	}
	
	return new Material(0);
};

funcEvalMap["FORIN"] = function(node, scope) {
	var lastResult = new Material(0);
	var id = node.children[0].text;
	
	var innerScope = {"-parent": scope};
	var vec = evaluateNode(node.children[1], scope);
	if(! (vec instanceof Vector)){
		throw "MSG: The in argument of a For-In loop mush be a a vector."
	}
	for(var i=0; i<vec.items.length; i++){
		innerScope[id] = vec.items[i];
		lastResult = evaluateNode(node.children[2], innerScope);
	}
	return lastResult;
};

funcEvalMap["FOR"] = function(node, scope) {
	var lastResult = new Material(0);
	var id = node.children[0].text;
	var start = evaluateNode(node.children[1].children[0], scope).toNum();
	var by = new Material(1);
	
	if(node.children[1].children.length==3){
		by = evaluateNode(node.children[1].children[2], scope).toNum();
	}
	var innerScope = {"-parent": scope};

	innerScope[id] = start;
	while(fn[by.value>=0?"<=":">="](innerScope[id].value, evaluateNode(node.children[1].children[1], scope).toNum())){
		lastResult = evaluateNode(node.children[2], innerScope);
		innerScope[id] = plus(innerScope[id], by);
	}
	return lastResult;
}

funcEvalMap["FUNCTION"] = function(node, scope) {
	var id = node.children[0].children[0].text;
	
	functionGenerator(id, node.children[0], node.children[1], node.children[2])
			
	return '"' + id + "\" defined"; 
};

funcEvalMap["ASSIGN"] = function(node, scope) {
	//console.log(node);
	var items = node.children.length-1;
	var x = evaluateNode(node.children[node.children.length-1], scope);
	if(items>1 && (!(x instanceof Vector) || x.items.length<items)){
		throw "MSG: Too few elements returned for assignment.";
	}
	for(var i=0; i<items; i++){
		if(node.children[i] instanceof PrimitiveStore){
			if(items==1){
				node.children[i].primitive.setValue(x);
			}else{
				node.children[i].primitive.setValue(x.items[i]);
			}
		}else{
			//console.log(node);
			var varName = node.children[i].children[0].text;
			if(node.children[i].children.length > 1){
				var selector = createMatrixSelector(node.children[i], scope, 1);
			}
			//console.log(selector);
			
			var origScope = scope;
			while(scope["-parent"] !== null){
				if(isDefined(scope[varName])){
					break;
				}
				scope = scope["-parent"];
			}
			if(scope["-parent"]===null && isUndefined(scope[varName])){
				scope = origScope;
			}
			
			var v;
			if(items == 1){
				v = x;
			}else{
				v = x.items[i];
			}
			if(node.children[i].children.length == 1){
				scope[varName] = v;
			}else{
				selectFromMatrix(scope[varName], selector, v);
			}
		}
	}
	if(items>1){
		return new Vector(x.items.slice(0,items));
	}else{
		return x;
	}
};

funcEvalMap["MATERIAL"] = function(node, scope) {
	var v =evaluateNode(node.children[0], scope).toNum();
	if(! unitless(v.units)){
		throw "MSG: Cannot create material where numeric part itself has units."
	}
	return new Material(v.value, node.children[1].clone());
};

function functionGenerator(varName, paramNames, paramDefaults, code){
	var varNames = [];
	var varDefaults = [];
	for (var i = 1; i < paramNames.children.length ; i++) {
		varNames.push(paramNames.children[i].text);
	}
		
	for (var i = 0; i < paramDefaults.children.length ; i++) {
		varDefaults.push(paramDefaults.children[i]);
	}

	functionBank[varName] = makeFunctionCall(varName, varNames, varDefaults, code);
}

var unitEvalMap = new Object();
unitEvalMap["MULT"] = function(node) {
	return evaluateUnits(node.children[0]).concat(evaluateUnits(node.children[1]));
};
unitEvalMap["POW"] = function(node) {
	var rhsMult = 1;
	var rhsLoc = 1;
	var lhsLoc = 0;
	
	if(node.children.length == 3 + lhsLoc){
		rhsMult = rhsMult*-1;
	 	rhsLoc++;
	}
	var lhs = evaluateUnits(node.children[lhsLoc]);
	var rhs = evaluateUnits(node.children[rhsLoc]) * rhsMult;
	
	if (lhs instanceof Array) {
		for (var i = 0; i < lhs.length; i++) {
			lhs[i].exponent = lhs[i].exponent * rhs;
		}
		return lhs;
	} else {
		return Math.pow(lhs, rhs);
	}
};
unitEvalMap["DIV"] = function(node) {
	var lhs = evaluateUnits(node.children[0]);
	var rhs = evaluateUnits(node.children[1]);
	for (var i = 0; i < rhs.length; i++) {
		rhs[i].exponent = rhs[i].exponent * -1;
	}
	return lhs.concat(rhs);
};
unitEvalMap["PER"] = unitEvalMap["DIV"];

unitEvalMap["UNIT"] = function(node) {
	var unitName = "";
	for (var i = 0; i < node.children.length; i++) {
		unitName = unitName + node.children[i].text;
		if (i < node.children.length - 1) {
			unitName = unitName + " ";
		}
	}
	return [{
		id: unitName,
		exponent: 1
	}];
};
unitEvalMap["UNITCLUMP"] = function(node) {
	var x = evaluateUnits(node.children[0]);
	if(node.children.length>1){
		for(var i=1; i<node.children.length; i++){
			if(node.children[i].typeName == "NEGATE"){
				for (var j = 0; j < x.length; j++) {
			 		x[j].exponent = x[j].exponent * -1;
			 	}
		 	}else if(node.children[i].typeName == "SQUARED"){
				for (var j = 0; j < x.length; j++) {
			 		x[j].exponent = x[j].exponent * 2;
			 	}
			}else if(node.children[i].typeName == "CUBED"){
				for (var j = 0; j < x.length; j++) {
			 		x[j].exponent = x[j].exponent * 3;
			 	}
			}
		}
	}
	return x;
};
unitEvalMap["INTEGER"] = function(node) {
	return parseInt(node.text);
};
unitEvalMap["FLOAT"] = function(node) {
	return parseFloat(node.text);
};

function evaluateUnits(node) {
	if(node instanceof Material){
		return node.value;
	}
	//console.log( node.typeName);
	
	//console.log(node);
	return unitEvalMap[node.typeName](node);
}

function evaluateNode(node, scope) {
	if(node instanceof TreeNode){
		evaluatingLine = node.line || evaluatingLine;
		
		return funcEvalMap[node.typeName](node, scope);
	}else if(node instanceof PrimitiveStore){
		if(node.type == "totalValue"){
			return node.primitive.totalContents();
		}else if(node.type == "object"){
			return node.primitive;
		}
	}else{
		return node;
	}
}

var trimEvalMap = new Object();


trimEvalMap["POWER"] = function(node, primitives) {
	if(node.children.length == 1){
		return trimNode(node.children[0], primitives);
	}else{
		var n = new TreeNode(node.origText, node.typeName, node.line);
		for(var i = 0; i < node.children.length; i++){
			n.children.push(trimNode(node.children[i], primitives));
		}
		return n;
	}
};
trimEvalMap["INNER"] = trimEvalMap["POWER"];
trimEvalMap["MINARRAY"] = trimEvalMap["POWER"];
trimEvalMap["TRUE"] = function(node) {
	return true;
};
trimEvalMap["FALSE"] = function(node) {
	return false;
};
trimEvalMap["STRING"] = function(node) {
	return node.origText.substr(1, node.origText.length-2).replace(/\\n/g,"\n").replace(/\\r/g,"\r");
};
trimEvalMap["INTEGER"] = function(node) {
	return new Material(sn("#e"+node.text));
};
trimEvalMap["MATERIAL"] = function(node, scope) {
	var units = node.children[0];
	var x = trimNode(node.children[1], scope);
	var units = evaluateUnits(units);
	var exponents = [], names = [];
	for(var i=0; i < units.length; i++){
		var j = names.indexOf(units[i].id);
		if(j == -1){
			exponents.push(units[i].exponent);
			names.push(units[i].id);
		}else{
			exponents[j] = exponents[j]+units[i].exponent;
		}
	}
	if(x instanceof Material){
		if(! unitless(x.units)){
			throw "MSG: Cannot create material where numeric part itself has units."
		}
		return new Material(x.value, new UnitStore(names, exponents));
	}else{
		var m = new TreeNode(node.origText, "MATERIAL", node.line);
		m.children = [x, new UnitStore(names, exponents)]
		return m;
	}
};
trimEvalMap["MULT"] = function(node, scope) {
	var lhs = trimNode(node.children[0], scope);
	var rhs = trimNode(node.children[1], scope);
	if((lhs instanceof Material) && (rhs instanceof Material)){
		return mult(lhs, rhs);
	}else{
		var n = new TreeNode(node.origText, node.typeName, node.line);
		n.children = [lhs, rhs]
		return n;
	}
};

trimEvalMap["DIV"] = function(node, scope) {
	var lhs = trimNode(node.children[0], scope);
	var rhs = trimNode(node.children[1], scope);
	if((lhs instanceof Material) && (rhs instanceof Material)){
		return div(lhs, rhs);
	}else{
		var n = new TreeNode(node.origText, node.typeName, node.line);
		n.children = [lhs,rhs]
		return n;
	}
};
trimEvalMap["PLUS"] = function(node, scope) {
	var lhs = trimNode(node.children[0], scope);
	var rhs = trimNode(node.children[1], scope);
	if((lhs instanceof Material) && (rhs instanceof Material)){
		return plus(lhs, rhs);
	}else{
		var n = new TreeNode(node.origText,  node.typeName, node.line);
		n.children = [lhs,rhs]
		return n;
	}
};
trimEvalMap["MINUS"] = function(node, scope) {
	var lhs = trimNode(node.children[0], scope);
	var rhs = trimNode(node.children[1], scope);
	if((lhs instanceof Material) && (rhs instanceof Material)){
		return minus(lhs, rhs);
	}else{
		var n = new TreeNode(node.origText, node.typeName, node.line);
		n.children = [lhs,rhs]
		return n;
	}
};

trimEvalMap["FLOAT"] = trimEvalMap["INTEGER"];
trimEvalMap["PRIMITIVE"] = function(node, primitiveBank) {
	var res;
	if(node.text.substr(0, 2)=="[["){
		res = new PrimitiveStore(primitiveBank[node.text.substr(2, node.text.length-4)], "totalValue");
	}else{
		res = new PrimitiveStore(primitiveBank[node.text.substr(1, node.text.length-2)], "object");
	}
	if(typeof res.primitive === "undefined"){
		throw "MSG: The primitive <i>"+node.origText+"</i> could not be found.";
	}
	return res;
};
trimEvalMap["NEGATE"] = function(node, scope) {
	if(node.children.length==0){
		return new TreeNode(node.origText,  node.typeName, node.line);
	}
	var x = trimNode(node.children[0], scope);
	if(x instanceof Material){
		return negate(x)
	}else{
		var n = new TreeNode(node.origText, node.typeName, node.line);
		n.children = [x]
		return n;
	}
};


function trimNode(node, primitives) {
	if(trimEvalMap.hasOwnProperty(node.typeName)){
		return trimEvalMap[node.typeName](node, primitives);
	}else{
		var n = new TreeNode(node.origText, node.typeName,node.line);
		for(var i = 0; i < node.children.length; i++){
			n.children.push(trimNode(node.children[i], primitives));
		}
		return n;
	}
}

function trueValue(q){
	if(q instanceof Vector){
		throw "MSG: Cannot use a vector as a boolean.";
	}
	return q && (isUndefined(q.value) || (q.value.toString() != "0" && q.value.toString() != "0.") )
}

function isLocal() {
	return (document.location.hostname == "localhost" || document.location.hostname == "insightmaker.dev" || document.location.hostname == "calc.dev" );
}

function isUndefined(item){
	return typeof(item)=="undefined";
}

function isDefined(item){
	return (! isUndefined(item));
}
