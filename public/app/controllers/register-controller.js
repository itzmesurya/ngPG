app.controller("registerController", registerController);

registerController.$inject = ["$scope", "$filter", "$http", "$location", "globalDataService", "globalSubjectService"];

function registerController($scope, $filter, $http, $location, globalDataService, globalSubjectService) {
    var rc = this;
    var globalDataService = globalDataService;
    console.log("registerController loaded successfully");

    $http.get("app/jsons/register-fields.json").success(function (response) {
        var res = angular.fromJson(response);
        res.forEach(function (element) {
            if (element.validators) {
                angular.forEach(element.validators, function (value, key) {
                    var funcEvalString = "new Function(";
                    angular.forEach(value, function (value) {
                        funcEvalString = funcEvalString + "'" + value + "',";
                    });
                    funcEvalString = funcEvalString.substr(0, funcEvalString.length - 1);
                    funcEvalString = funcEvalString + ");";
                    element.validators[key] = eval(funcEvalString);
                });
            }
        });
        rc.fields = res;
    });

    // setting panel settings
    rc.panelType = "primary";

    var registerControllerObserver = {};
    registerControllerObserver.doSomethingWithDataModel = function (dataModel) {
        rc.modelDataFromEmitter = dataModel;
        rc.panelType = dataModel.panelType;
    }
    globalSubjectService.registerObserver(registerControllerObserver);

    rc.onSubmit = function () {
        rc.model.panelType = "success";
        rc.model.bodyData = { msg_from_register_ctrl: "This message has arrived from registerController" };
        // notify all the observers about the data
        globalSubjectService.notifyObservers(rc.model);
        // updatre the data in the 
        globalDataService.setData(rc.model);
        globalDataService.setKeyValue("myCustomData", true);
        //$location.path("confirmData");
    }

    function logDetailsInConsole() {
        console.log("logging rc.model......");
        console.log(rc.model);

        console.log("logging rc.options......");
        console.log(rc.options);

        console.log("logging rc.form......");
        console.log(rc.form);
    }

}

