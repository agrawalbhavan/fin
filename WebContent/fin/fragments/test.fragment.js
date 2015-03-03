sap.ui.jsfragment ( "fin.fragments.test",{ 
	createContent: function (oController ) {
        var oButton  = new sap.m.Button({ 
			text: "Hello World" , 
			press:oController.test
		}); 
		return oButton; 
	} 
});