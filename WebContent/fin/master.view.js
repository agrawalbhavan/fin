sap.ui.jsview("fin.master", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf fin.master
	*/ 
	getControllerName : function() {
		return "fin.master";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf fin.master
	*/ 
	createContent : function(oController) {
		
		var data = { "data":[
			         			{"id":"1", "name":"Anand", "place":"bihar", "phone":"1122334455"},
			         			{"id":"1", "name":"Yogi", "place":"orissa", "phone":"1122334455"},
			         			{"id":"1", "name":"nats", "place":"chennai", "phone":"1122334455"},
			         			{"id":"1", "name":"ankit", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"mohit", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"ankit sah", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"utkarsh", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"prateek", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"panda", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"dholu", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"pandey", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"neha", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"prathyusha", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"preeti", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"deepa", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"anoop", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"vrinda", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"shobha", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"anju", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"rahul", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"rohit", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"tarun", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"dalmia", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"prerna", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"jabir", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"yunus", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"rajesh", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"rama", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"sushma", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"tulika", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"ravi", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"abhishek", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"moni", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"ajith", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"anshul", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"vijay", "place":"bangalore", "phone":"1122334455"},
			         			{"id":"1", "name":"sahil", "place":"bangalore", "phone":"1122334455"},
			         		]
			         	      };         		
			
		var searchField = new sap.m.SearchField("",{
			liveChange: function (oEvt) {
			    
			    // add filter for search
			    var aFilters = [];
			    var sQuery = oEvt.getSource().getValue();
			    if (sQuery && sQuery.length > 0) {
			      var filter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, sQuery);
			      aFilters.push(filter);	
//			      var filter1 = new sap.ui.model.Filter("place", sap.ui.model.FilterOperator.Contains, sQuery);
//			      aFilters.push(filter1);
			    }

			    // update list binding
			    var list = sap.ui.getCore().byId("idList");
			    var binding = list.getBinding("items");
			    binding.filter(aFilters, "Application");
			  }
		});
			         		
		var oModel = new sap.ui.model.json.JSONModel(data);
		sap.ui.getCore().setModel(oModel);
		
		var list =  new sap.m.List("idList",{type:"Active",
											 mode:"SingleSelectMaster",
											 selectionChange: function(){
												 splitApp.toDetail(oViews[list.getSelectedItem().mProperties.title]);
												 sap.ui.getCore().byId("Report").vbar.rerender(); 
												 splitApp.hideMaster();
											 }});
		var listItem = new sap.m.ObjectListItem({
			title:"{name}",
			number:"{phone}",
			attributes:[
			            new sap.m.ObjectAttribute({
			            	text:"{place}"
			            })
			            ]
				});
		
		list.bindAggregation("items","/data",listItem);	
												 
		
 		
		
 		return new sap.m.Page({
 			showHeader : false,
			content: [
searchField, list
			]
		});
	}

});