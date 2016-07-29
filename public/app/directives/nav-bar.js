app.directive("navBar", navBar);

function navBar() {
    return {
        restrict: "AE",
        templateUrl: "app/templates/nav-bar.html"
    };
}
