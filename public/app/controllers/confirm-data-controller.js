app.controller("confirmDataController", confirmDataController);

confirmDataController.$inject = ["$scope", "$http", "globalDataService", "globalSubjectService"];

function confirmDataController($scope, $http, globalDataService, globalSubjectService) {
    var cdc = this;
    console.log("confirmDataController loaded successfully");
    cdc.modelData = globalDataService.getData();
    cdc.myCustomData = globalDataService.getKeyValue("myCustomData");

    var confirmDataControllerObserver = {};

    confirmDataControllerObserver.doSomethingWithDataModel = function (dataModel) {
        cdc.modelDataFromEmitter = dataModel;
        console.log(dataModel);
    }

    globalSubjectService.registerObserver(confirmDataControllerObserver);

}