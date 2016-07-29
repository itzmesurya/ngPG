app.controller("homeController", homeController);

homeController.$inject = ["$scope", "globalSubject", "sharedDataService"];

function homeController($scope, globalSubject, sharedDataService) {
    var hc = this;
    console.log("homeController loaded successfully");
    hc.sharedDataService = sharedDataService;
    hc.nameFromConfig = globalSubject;
    hc.sharedDataService.storeData("homCtrlData", { msg: "msg from homeCtrl", data: ["strawberry", "chicken tikka"] });
    hc.sharedDataServiceStorage = hc.sharedDataService.fetchData("homCtrlData");
}