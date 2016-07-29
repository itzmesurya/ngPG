(function () {
    'use strict';

    angular
        .module('pattern.block')
        .service('sharedDataService', sharedDataService);

    sharedDataService.$inject = [];
    function sharedDataService() {
        var storeage = {};
        this.sampleData = "sharedDataService is used to share across modules!";
        this.sampleFunction = function () {
            return "returnd from sharedDataService sampleFunction";
        }
        this.storeData = function (key, data) {
            storeage[key] = data;
        }
        this.fetchData = function (key) {
            if (storeage[key])
                return storeage[key];
            else
                return undefined;
        }
    }
})();