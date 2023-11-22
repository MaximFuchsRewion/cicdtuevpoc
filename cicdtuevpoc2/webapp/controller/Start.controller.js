sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("cicdtuevpoc2.controller.Start", {
            onInit: function () {

            },

            onClick: function (){
                sap.m.MessageToast.show("First Commit!");
            }
        });
    });
