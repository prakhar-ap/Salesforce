({
 toggleRegistrationForm : function(component, event, helper) {
 	component.set("v.isRegistrationFormOpen", !component.get("v.isRegistrationFormOpen"));
	history.back();
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
                 component.set("v.sf_object", null);
                 //Success message display logic.
                 var toastEvent = $A.get("e.force:showToast");
                 toastEvent.setParams({
                     "type": "Success",
                     "title": "Success!",
                     "message": "Successfully Registered"
                 });
                 toastEvent.fire();
                 
                 // redirecting to SF DETAILS PAGE
                 var sfId = response.getReturnValue();
                    console.log(response.getReturnValue());
                    var navEvt = $A.get("e.force:navigateToSObject");
                    navEvt.setParams({
                        "recordId":sfId,
                        "slideDevName": "detail"
                    });
                 navEvt.fire();
             } else {
                 //Error message display logic.
                 var errors = response.getError();
                 var toastEvent = $A.get("e.force:showToast");
                 toastEvent.setParams({
                     "title": "ERROR!",
                     "type": "Error",
                     "message": errors[0] ? errors[0].message : 'Please try again later' 
                 });
                 toastEvent.fire();
             }
         }); 
         $A.enqueueAction(action);
     }
 },
})