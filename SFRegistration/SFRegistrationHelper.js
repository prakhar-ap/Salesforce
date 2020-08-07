({
	validate : function(component, ele) {
      var validForm = component.find(ele).reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
      }, true);
        
      if(validForm) {
      	 component.set("v.haltExec", false);
      } else {
         component.set("v.haltExec", true); 
      }
	}
})