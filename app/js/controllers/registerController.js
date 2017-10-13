homeApp.controller('registerController', registerController);

registerController.$inject = ['$scope', '$location'];
function registerController(scope, location) {
    scope.user = {};

    scope.register = function(userForm) {
        if ( scope.user.login === undefined || scope.user.login === '' || scope.user.login.replace(/\s/g,'') === '' ) {
            scope.loginError = true;
        } else scope.loginError = false;
        if ( userForm.$invalid ) {
            return;
        }
        if ( scope.confirmPassword !== scope.user.password ) {
            scope.passwordError = true;
            return;
        }

        localStorage.setItem('user', JSON.stringify(scope.user));
        location.path('/');
    }
}