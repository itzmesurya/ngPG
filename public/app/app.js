var app = angular.module("app", ["ngRoute", "formly", "formlyBootstrap", "pattern.block"]);


// TODO: once the routing has been setup,
// try changing the syntax using [], so that
// minification does not impact the config function. 
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/views/home.html",
            controller: "homeController as hc"
        })
        .when("/register", {
            templateUrl: "app/views/register.html",
            controller: "registerController as rc"
        })
        .when("/confirmData", {
            templateUrl: "app/views/confirm-reg-info.html",
            controller: "confirmDataController as cdc"
        });
});


app.config(function (globalSubjectProvider) {
    globalSubjectProvider.setName("ngPg v1.0.0.");
});

app.config(function (formlyConfigProvider) {
    formlyConfigProvider.setType({
        name: "reg-custom-field",
        templateUrl: "app/templates/reg-custom-field.html"
    });
});