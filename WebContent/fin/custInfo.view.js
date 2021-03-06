sap.ui.jsview("fin.custInfo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf fin.custInfo
	*/ 
	getControllerName : function() {
		return "fin.custInfo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf fin.custInfo
	*/ 
	createContent : function(oController) {
		
		var objHeader = new sap.m.ObjectHeader("objHeader",{
			title:"name"
		});
		
 		return new sap.m.Page({
			title: "Title",
			content: [
objHeader
			]
		});
	}

});