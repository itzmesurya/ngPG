app.service("globalDataService", globalDataService);

globalDataService.$inject = [];

function globalDataService() {
    var storage = {};
    return {
        setData: function (data) {
            storage.data = data;
        },
        getData: function () {
            return storage.data;
        },
        setKeyValue: function (key, val) {
            storage[key] = val;
        },
        getKeyValue: function (key) {
            return storage[key];
        }
    }
}