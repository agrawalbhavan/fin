sap.ui.jsview("fin.tilePage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf fin.tilePage
	*/ 
	getControllerName : function() {
		return "fin.tilePage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf fin.tilePage
	*/ 
	createContent : function(oController) {
		
		var oViewDataTile = new  sap.m.StandardTile("idViewDataTile",{
			title:"View Details",
			press:function(){
				app.to(page2);
			}
		});
		
		var oCreateDataTile = new  sap.m.StandardTile("idCreateDataTile",{
			title:"Create Entry",
			press:function(){
				app.to(page3);
			}
		});
		
		var oTileCont = new sap.m.TileContainer("idTileCont", {
			
			tiles:[ oCreateDataTile, oViewDataTile       ]
						
		} );
		
 		return new sap.m.Page({
			title: "Title",
			enableScrolling: false,
			content: [
			          oTileCont
			]
		});
	}

});