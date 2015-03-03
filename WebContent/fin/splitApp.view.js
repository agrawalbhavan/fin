sap.ui.jsview("fin.splitApp", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf fin.splitApp
	*/ 
	getControllerName : function() {
		return "fin.splitApp";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf fin.splitApp
	*/ 
	createContent : function(oController) {
		
		
 		splitApp = new sap.m.SplitApp("mySplit",{});
 		
 		var master1 =  sap.ui.view({id:"idmaster", viewName:"fin.master", type:sap.ui.core.mvc.ViewType.JS});
 		var custinfo =  sap.ui.view({id:"idcustinfo", viewName:"fin.custInfo", type:sap.ui.core.mvc.ViewType.JS});
 		
 		splitApp.addMasterPage(master1);
 		splitApp.addDetailPage(custinfo);
		
 		return new sap.m.Page({
			title: "Application",
			navButtonText : "back",
			showNavButton : true,
			navButtonPress : function(){
				app.back();
			},
			content: [
			          	splitApp
			]
		});
	}

});