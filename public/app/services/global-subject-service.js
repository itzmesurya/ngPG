// "subject" in the observer pattern.
// "subject" acts as a regulator or 'middleman',
// between the components emititng data to observers who are 
// waiting for them. 
app.service("globalSubjectService", globalSubjectService);

globalSubjectService.$inject = [];

function globalSubjectService() {
    return {
        // array variable to hold all the observers. 
        observers: [],
        // "observers" will register themselves for "dataModel"
        // from emmitters using "registerObserver". 
        registerObserver: function (observer) {
            // check if the observer has been registered
            if (this.observers.indexOf(observer) < 0) {
                // if it is not registered then register it
                this.observers.push(observer);
            }
        },
        // "notifyObservers" will be called by the controller that
        // wants to pass "dataModel" to observers.
        notifyObservers: function (dataModel) {
            this.observers.forEach(function (observer) {
                // "doSomethingWithDataModel" is a call back that has to be
                // implemented in the observers that want to
                // do something with "dataModel".
                observer.doSomethingWithDataModel(dataModel);
            });
        }
    }
}