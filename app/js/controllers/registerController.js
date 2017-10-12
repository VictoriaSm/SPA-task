homeApp.controller('registerController', registerController);

registerController.$inject = ['$scope', '$location'];
function registerController(scope, $location) {

    scope.user = {};

    scope.minlength = 8;

    scope.register = function (userForm) {
        if(userForm.$invalid){
            return console.error('NOOOOOOO')
        }
        if ( scope.user.password !== scope.user.confirmPassword ){
            scope.passwordError = true;
        } else {
            localStorage.setItem('user', JSON.stringify(scope.user));
            $location.path('/');
        }

        console.log(scope.user.password.length);
    };
}
