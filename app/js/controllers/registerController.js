homeApp.controller('registerController', registerController);

registerController.$inject = ['$scope', '$location'];
function registerController(scope, location) {
    scope.user = {};

    scope.register = function(userForm) {

        if ( userForm.$invalid ) {
            return;
        }
        if ( scope.confirmPassword !== scope.user.password ) {
            scope.passwordError = true;
            return;
        }

        var hash = md5(scope.user.password);
        scope.user.password = hash;

        localStorage.setItem('user', JSON.stringify(scope.user));
        location.path('/');
    }
}