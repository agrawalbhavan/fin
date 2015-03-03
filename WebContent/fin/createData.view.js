sap.ui.jsview("fin.createData", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf fin.createData
	*/ 
	getControllerName : function() {
		return "fin.createData";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf fin.createData
	*/ 
	createContent : function(oController) {
		
		var myFragment = sap.ui.jsfragment( "fin.fragments.createData" , oController ); 
		
		
		
 		return new sap.m.Page({
			title: "Create Data",
			navButtonText : "back",
			showNavButton : true,
			navButtonPress : function(){
				app.back();
			},
			content: [myFragment
			
			]
		});
	}

});