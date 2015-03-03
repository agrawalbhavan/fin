sap.ui.jsfragment("fin.fragments.createData", {
	createContent : function(oController) {
		var oForm = new sap.ui.layout.form.SimpleForm({
			minWidth : 1024,
			maxContainerCols : 3,
			editable : true,
			layout : "ResponsiveGridLayout",
			title : "",
			labelSpanL : 4,
			labelSpanM : 4,
			columnsL : 2,
			columnsM : 2,
			content : [
				new sap.ui.core.Title({text : "Basic Data"}),
				new sap.m.Label({text : "Account Holder Name"}),
				new sap.m.Input(),
				new sap.m.Label({text : "Name"}),
				new sap.m.Input({placeholder:"First Name"}),
				new sap.m.Input({placeholder:"Last Name"}),
				new sap.m.Label({text : "Phone Number",type:"Tel"}),
				new sap.m.Input(),
				new sap.m.Label({text : "Via(marfat)"}),
				new sap.m.Input(),
				new sap.m.Label({text : ""}),
				new sap.m.Input({placeholder:"Purpose"}),
				new sap.m.Input({placeholder:"Citizenship Card No."}),
				new sap.m.Label({text : "Max. Limit", type:"Number"}),
				new sap.m.Input(),
				new sap.m.Label({text : "Acc. Open date"}),
				new sap.m.DatePicker(),
				
				new sap.ui.core.Title({text : "Address Details"}),
				new sap.m.Label({text : "Village"}),
				new sap.m.Input(),
				new sap.m.Label({text : "Address"}),
				new sap.m.TextArea(),
				new sap.m.Label({text : "Other Info"}),
				new sap.m.TextArea(),
				
				new sap.ui.core.Title({text : "Land Desc."}),
				new sap.m.Label({text : "Land Owner"}),
				new sap.m.Input(),
				new sap.m.Label({text : "Village"}),
				new sap.m.TextArea(),
				new sap.m.Label({text : "Booked in Name of"}),
				new sap.m.TextArea(),
				
				new sap.ui.core.Title({text : ""}),
				new sap.m.Label({text : ""}),
				new sap.m.Input({placeholder:"Area"}),
				new sap.m.Input({placeholder:"Doc. Number", type:"Number"}),
				new sap.m.Label({text : "Other Info"}),
				new sap.m.TextArea(),
				
				new sap.ui.core.Title({text : "Dependents"}),
				new sap.m.Label({text : "Name"}),
				new sap.m.Input({placeholder:"First Name"}),
				new sap.m.Input({placeholder:"Last Name"}),
				new sap.m.Label({text : "Relationship"}),
				new sap.m.Input(),
				new sap.m.Label({text : "Village"}),
				new sap.m.Input(),
				new sap.m.Label({text : "Phone No.",type:"Tel"}),
				new sap.m.Input(),
				new sap.m.Label({text : "Other Info"}),
				new sap.m.TextArea(),
				
				new sap.ui.core.Title({text : "Purpose"}),
				new sap.m.Label({text : "Country"}),
				new sap.m.Input({placeholder:""}),
				new sap.m.Label({text : "Agent"}),
				new sap.m.Input(),
				new sap.m.Label({text : "Date of Visit"}),
				new sap.m.DatePicker(),
				
				
			],
		});
		
		return oForm;

	}
});