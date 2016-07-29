app.directive('customPanel', customPanel);

function customPanel() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
        bindToController: true,
        controller: customPanelController,
        controllerAs: 'cpc_d',
        link: link,
        templateUrl: 'app/templates/custom-panel.html',
        restrict: 'EA',
        scope: {
        }
    };
    return directive;

    function link(scope, element, attrs) {

    }
}

customPanelController.$inject = ["globalSubjectService"];

/* @ngInject */
function customPanelController(globalSubjectService) {
    var cpc_d = this;
    var customPanelControllerObserver = {};
    cpc_d.title = "Demo Panel";
    cpc_d.panelType = "danger";
    // Observer set to listen from controller
    customPanelControllerObserver.doSomethingWithDataModel = function (dataModel) {
        cpc_d.modelDataFromEmitter = dataModel;
        cpc_d.panelType = dataModel.panelType;
        dataModel.panelType = "info";
        dataModel.bodyData.msg_from_custom_panel_ctrl = "This message has been shot back from customPanelController, proving that the model data has been updated on both controller and directive-controller";
        globalSubjectService.notifyObservers(dataModel);
        console.log(dataModel);
    }

    globalSubjectService.registerObserver(customPanelControllerObserver);
}