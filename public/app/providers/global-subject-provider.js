app.provider("globalSubject", globalSubjectProvider);
function globalSubjectProvider() {
    this.name = "default name";
    this.setName = function (name) {
        this.name = name;
    }
    this.$get = function () {
        return this.name;
    };
}