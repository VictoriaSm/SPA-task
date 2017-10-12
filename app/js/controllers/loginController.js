homeApp.controller('loginController', loginController);

loginController.$inject = ['$scope', '$location'];
function loginController(scope, $location) {

    // scope.user = {};

    scope.logIn = function () {
        // console.log(scope.user);
        $location.path('/home');
    };


}