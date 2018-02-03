({
    fetchPickListVal: function(component, objectName, fieldName, targetControl) {
        var action = component.get("c.getSelectOptions");

        action.setParams({
            "objectName": objectName,
            "fld": fieldName
        });

        var opts = [];
        action.setCallback(this, function(response) {
            if (response.getState() == "SUCCESS") {
                console.log("returning successfully");
                var allValues = response.getReturnValue();
                console.log("response is: " + response); 
                if (allValues != undefined && allValues.length > 0) {
                    opts.push({
                        class: "optionClass",
                        label: "--- None ---",
                        value: ""
                    });
                }
                for (var i = 0; i < allValues.length; i++) {
                    opts.push({
                        class: "optionClass",
                        label: allValues[i],
                        value: allValues[i]
                    });
                }
                console.log(opts);
                component.set(targetControl, opts);
            }
        });
        $A.enqueueAction(action);
    },
})