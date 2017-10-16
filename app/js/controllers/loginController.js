homeApp.controller('loginController', loginController);

loginController.$inject = ['$scope', '$location'];
function loginController(scope, location) {

    scope.allow ={};

    scope.userLog = JSON.parse(localStorage.getItem('user'));

    scope.logIn = function () {

        var hash = md5(scope.allow.password);

        if ( scope.allow.login !== scope.userLog.login ) {
            scope.loginError = true;
            return;
        } else scope.loginError = false;

        if ( hash !== scope.userLog.password ) {
            scope.passError = true;
            return;
        }

        location.path('/home');
        localStorage.setItem('authorization', 1);
    };
}