"use strict";
/*

Copyright 2010-2013 Scott Fortmann-Roe. All rights reserved.

This file may distributed and/or modified under the
terms of the Insight Maker Public License (http://insightMaker.com/impl).

*/


Ext.form.customFields['converter'] = Ext.extend(Ext.form.customFields['converter'], {


    onTriggerClick: function()
    {
        this.suspendEvents(false);
        this.editorWindow = new Ext.ConverterWindow({
            parent: this,
            oldKeys: this.getValue(),
            interpolation: graph.getSelectionCell().getAttribute("Interpolation")
        });
        this.editorWindow.show();
    },

    listeners: {
        'keydown': function(field)
        {
            field.setEditable(false);
        },
        'beforerender': function()
        {
            if (this.regex != undefined) {
                this.validator = function(value)
                {
                    return this.regex.test(value);
                };
            }

        }
    }
});



Ext.ConverterWindow = function(args)
 {
    var obj = this;

    obj.args = args;

    var discreteStore = null;
    function makeDiscrete() {
		if(! isUndefined(chart)){
		//console.log(chart.items.items[0].axes.items[0]);
		//console.log(getXRange());
			chart.axes.items[1].minimum = getXRange()[0];
			chart.axes.items[1].maximum = getXRange()[1];
		}
	
        var oldKeys = "";
        for (var i = 0; i < store.getCount(); i++)
        {
            if (i > 0) {
                oldKeys = oldKeys + ";";
            }
            oldKeys = oldKeys + store.getAt(i).data.xVal + "," + store.getAt(i).data.yVal;
        }
        var data = [];
        var items = oldKeys.split(";");
        var oldXY = [];
        for (var i = 0; i < items.length; i++) {
            var xy = items[i].split(",")
            if (i > 0) {
                data.push({
                    xVal: parseFloat(xy[0]),
                    yVal: parseFloat(oldXY[1])
                });
            }

            data.push({
                xVal: parseFloat(xy[0]),
                yVal: parseFloat(xy[1])
            });
            oldXY = xy;
        }

        if (discreteStore == null) {
            discreteStore = new Ext.data.Store({
                fields: dataFields,
                data: data
            });
        } else {
            discreteStore.removeAll();
            discreteStore.loadData(data);
        }
    }


    var data = [];
	if(! isUndefined(obj.args.oldKeys)){
	    var items = obj.args.oldKeys.split(";");
	    for (var i = 0; i < items.length; i++) {
	        var xy = items[i].split(",")
	        data.push({
	            xVal: parseFloat(xy[0]),
	            yVal: parseFloat(xy[1])
	        });
	    }
	}

    var dataFields = [{
        name: 'xVal',
        type: 'float'
    },
    {
        name: 'yVal',
        type: 'float'
    }];
    var store = new Ext.data.Store({
        fields: dataFields,
        data: data,
        sorters: ['xVal']
    });

    var editor = new Ext.grid.plugin.CellEditing({
		clicksToEdit: 1
    });

    var gridPan = new Ext.grid.GridPanel({
        store: store,
        width: 600,
        region: 'center',
        margins: '0 5 5 5',
        plugins: [editor],
        viewConfig: {
            headersDisabled: true,
            markDirty: false
        },
        tbar: ['->',{
            iconCls: 'units-add-icon',
            text: getText('Add Point'),
            handler: function() {
                var e = {
                    xVal: 0,
                    yVal: 0
                };
                editor.completeEdit();
                store.insert(0, e);
				store.sort('xVal', 'ASC');
                gridPan.getView().refresh();

                var index = store.findBy(function(record){
                	return record.get("xVal")==0 && record.get("yVal")==0;
                });
                gridPan.getSelectionModel().selectRange(index, index);
                editor.startEdit(index, index);
            }
        }],

        columns: [
        {
            id: 'xVal',
            header: getText('Input Value'),
            dataIndex: 'xVal',
            flex: 1,
            sortable: false,
            menuDisabled: true,
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
                decimalPrecision: 10,
				selectOnFocus:true
            }
        },
        {
            header: getText('Output Value'),
            dataIndex: 'yVal',
            flex: 1,
            sortable: false,
            menuDisabled: true,
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
                decimalPrecision: 10,
				selectOnFocus:true
            }
        },
		{
			xtype: "actioncolumn",
			width:40,
			items:[
				{
					iconCls: "units-remove-icon",
					tooltip: getText("Delete"),
					handler: function(grid, rowIndex, columnIndex){
						store.remove(store.getAt(rowIndex));

						store.sort('xVal', 'ASC');
				        makeDiscrete();
		                gridPan.getView().refresh();
					}
				}
			]
		}
        ]
    });

    makeDiscrete();
    var chartStore;
    if (obj.args.interpolation == "Linear") {
        chartStore = store;
    } else {
        chartStore = discreteStore;
    }

    var sourceName = "";

	var cell;
	if(obj.args.parent != ""){
		cell = graph.getSelectionCell();
	}else{
		cell = obj.args.cell;
	}
    if (cell.getAttribute("Source") == "Time") {
        sourceName = "Time";
    } else {
        sourceName = findID(cell.getAttribute("Source")).getAttribute("name");
    }

    var chart = new Ext.chart.Chart({
            xtype: 'chart',
            store: chartStore,
            animate: false,
            shadow: false,
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ["yVal"],
                title: getText("Output"),
                grid: true,
				labelTitle: {
					font: '14px Verdana'
				}
            },
            {
                type: 'Numeric',
                position: 'bottom',
                fields: ["xVal"],
                title: getText("Input")+" (" + clean(sourceName) + ")",
                grid: true,
				maximum: getXRange()[1],minimum: getXRange()[0],
				labelTitle: {
					font: '14px Verdana'
				}
            }],

            series: [{
                type: 'line',
                axis: 'left',
                showMarkers: true,
                highlight: false,
                smooth: false,
                style: {
                    'stroke-width': 3
                },
                xField: 'xVal',
                yField: "yVal"
            }],
			listeners:{
				click: function(e){
					var xy= chart.getEventXY(e);
					var x = 0;
					var y = 1;
					var dx = 0.01;
					var dy = 0.01;
					
					if(chart.revX){
						x = chart.revX(xy[0]);
						y = chart.revY(xy[1]);
						dx = chart.revX(xy[0]+1)-x;
						dy = chart.revY(xy[1]-1)-y;
					}
				
					
					var nx, ny;
					
					var diff = dx.toExponential().split("e")[1];
					if(diff[1]=="-"){
						nx = (Math.round(x/Math.pow(10, diff+1))*Math.pow(10, diff+1)).toPrecision(9);
					}else{
						nx = (Math.round(x/Math.pow(10, diff-1))*Math.pow(10, diff-1)).toPrecision(9);
					}
					var diff = dy.toExponential().split("e")[1];
					if(diff[1]=="-"){
						ny = (Math.round(y/Math.pow(10, diff+1))*Math.pow(10, diff+1)).toPrecision(9);
					}else{
						ny = (Math.round(y/Math.pow(10, diff-1))*Math.pow(10, diff-1)).toPrecision(9);
					}
					
					if(e.shiftKey){
						var pt = store.findBy(function(record){
							return (record.get("xVal")>x-dx*4 && record.get("xVal")<x+dx*4 && record.get("yVal")>y-dy*4 && record.get("yVal")<y+dy*4)
						});
						if(pt > -1){
							store.remove(store.getAt(pt));
						}
					}else if(e.altKey){
						if(store.count()>0){
							var pt = store.getAt(0);
							for(var i=1; i< store.count(); i++){
								if(Math.abs(pt.get("xVal")-x) > Math.abs(store.getAt(i).get("xVal")-x)){
									pt = store.getAt(i);
								}
							}
							
							pt.set("xVal", nx);
							pt.set("yVal", ny);
							
						}
					}else{
						var pt = store.findBy(function(record){
							return (record.get("xVal")>x-dx*3 && record.get("xVal")<x+dx*3)
						});
						if(pt>-1){
							pt = store.getAt(pt)
						}else{
							pt = null;
						}
					
						if(! pt){
		                	var e = {
		                    	xVal: nx,
		                    	yVal: ny
		                	};
		               	 	editor.completeEdit();
		            		store.insert(0, e);
					
						}else{
							//pt.set("xVal", nx);
							pt.set("yVal", ny);
						}
					}
			        store.sort('xVal', 'ASC');
					
					if(!e.shiftKey){
	                	var index = store.findBy(function(record){
	                		return record.get("xVal")==nx && record.get("yVal")==ny;
	                	});
						if(index >= 0){
	                		gridPan.getSelectionModel().selectRange(index, index);
						}
					}
					
			        makeDiscrete();
	                gridPan.getView().refresh();
					
				}
			}
        });
		
		
	var chartPanel = new Ext.Panel({
        width: 490,
        height: 200,
        layout: 'fit',
        margins: '5 5 0',
        region: 'north',
        split: true,
        minHeight: 100,
        maxHeight: 500,

        items: chart
    });


    obj.win = new Ext.Window({
        title: getText('Converter Data Specification'),
        layout: 'border',
        closeAction: 'destroy',
        border: false,
        modal: true,
        resizable: false,
        shadow: true,
        buttonAlign: 'left',
        layoutConfig: {
            columns: 1
        },
        width:  Math.min(Ext.getBody().getViewSize().width, 508),
        height:  Math.min(Ext.getBody().getViewSize().height, 500),
        items: [chartPanel, gridPan],
        buttons: [{
			disabled: ! is_editor,
			scale: "large",
			text: getText('Units'),
			iconCls: 'units-icon',
			tooltip: getText('Edit primitive units'),
			handler: function() {
				var unitsWindow = new Ext.UnitsWindow({
					parent: "",
					cell: obj.args.cell,
					units: obj.args.cell.getAttribute("Units")
				});
				unitsWindow.show();
			}
		},{
			disabled: ! is_editor,
			scale: "large",
			text: getText('Import Data'),
			iconCls: 'import-icon',
			tooltip: getText('Import data from a CSV or other text file'),
			handler: function() {
				importData(store);
			}
		},
		 '->',
        {
            scale: "large",
            iconCls: "cancel-icon",
            text: getText('Cancel'),
            handler: function()
            {
                obj.win.close();
				if(obj.args.parent!=""){
                	obj.args.parent.resumeEvents();
				}
            }
        },
        {
			disabled: ! is_editor,
            scale: "large",
            iconCls: "apply-icon",
            text: getText('Apply'),
            handler: function()
            {	
				editor.completeEdit();
				if(obj.args.parent != ""){
                	obj.args.parent.setValue(getKeys());
				}else{
					obj.args.cell.setAttribute("Data", getKeys())
				}
			
                obj.win.close();
				
				
				if(obj.args.parent != ""){
                	obj.args.parent.resumeEvents();
                	grid.plugins[0].completeEdit();
				}else{
					selectionChanged(false);
				}
            }
        }]

    });

    function getKeys() {
        var s = "";
        for (var i = 0; i < store.getCount(); i++)
        {
            if (i > 0) {
                s = s + "; ";
            }
            s = s + store.getAt(i).data.xVal + "," + store.getAt(i).data.yVal;
        }
        return s;
    }
	
	function getXRange(){
		if(store.getCount()==0){
			return [0,1];
		}else{
       		return [store.getAt(0).data.xVal, store.getAt(store.getCount()-1).data.xVal];
		}
	}




    store.on('update',
    function() {
        store.sort('xVal', 'ASC');
        makeDiscrete();
    });

    store.on('dataChanged',
    function() {
        makeDiscrete();
    });

    obj.show = function()
    {
        obj.win.show();

		/*chart.on({
		  click: function(e) {
			  
		    console.log(e);
			console.log(chart.getEventXY(e));
			console.log(e.getXY());
			console.log(e.getPoint());
		  }
		});*/
    }
}

function setConverterInit(converter){
	var start = parseFloat(getTimeStart(), 10);
	var end = parseFloat(getTimeStart(), 10) + parseFloat(getTimeLength(), 10);
	
	converter.setAttribute("Data", start+","+Math.pow(start,2)+"; "+(start+end)/2+","+Math.pow((start+end)/2,2)+"; "+end+","+Math.pow(end,2))
}