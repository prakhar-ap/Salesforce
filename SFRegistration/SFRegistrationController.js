({
 openRegistrationForm : function(component, event, helper) {
 	component.set("v.isRegistrationFormOpen", true);       
 },
 openApproval : function(component, event, helper) {
 	component.set("v.isApprovalOpen", true);       
 },
 closeRegistrationForm : function(component, event, helper) {
 	component.set("v.isRegistrationFormOpen", false);
 },
 closeApproval : function(component, event, helper) {
 	component.set("v.isApprovalOpen", false);       
 },
 doSave : function(component, event, helper) {
     helper.validate(component, "sfEle");
     if(!component.get("v.haltExec")) {
         var action = component.get("c.sf_register");
         action.setParams({"sf": component.get("v.sf_object")});
         action.setCallback(this, function(response){
             var state = response.getState();
             if (state === "SUCCESS"){
                 // reset fields
                 component.set("v.sf_object",{ 'sobjectType': 'SFRegistration__c','Name': '','Company__c': '',
                                       'Email__c': ''});
                 //Success message display logic.
                 var toastEvent = $A.get("e.force:showToast");
                 toastEvent.setParams({
                     "title": "Success!",
                     "message": "Successfully Registered"
                 });
                 toastEvent.fire();
             } else {
                 //Error message display logic.
                 var errors = response.getError();
                 var toastEvent = $A.get("e.force:showToast");
                 toastEvent.setParams({
                     "title": "ERROR!",
                     "message": errors[0] ? errors[0].message : 'Please try again later' 
                 });
                 toastEvent.fire();
             }
         }); 
         $A.enqueueAction(action);
     }
 },
    doApproveAll : function(component, event, helper) {
      if(component.get("v.approved_all")) {
          var action = component.get("c.approveAll");
          action.setParams({"emails":  component.get("v.approved_all")});
          action.setCallback(this, function(response){
             var state = response.getState();
             if (state === "SUCCESS"){
                 //Success message display logic.
                 var toastEvent = $A.get("e.force:showToast");
                 toastEvent.setParams({
                     "title": "Success!",
                     "message": "Successfully Approved"
                 });
                 toastEvent.fire();
             } else {
                 //Error message display logic.
                 var errors = response.getError();
                 var toastEvent = $A.get("e.force:showToast");
                 toastEvent.setParams({
                     "title": "ERROR!",
                     "message": errors[0] ? errors[0].message : 'Check emails' 
                 });
                 toastEvent.fire();
             }
         }); 
         $A.enqueueAction(action);
         component.set("v.approved_all","all");   
     }
  }
})