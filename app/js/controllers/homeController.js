homeApp.controller('HomeController', function ($scope, $http){
        $http({method: 'GET', url: 'homes.json'}).
        then(function success(response) {
            $scope.homes = response.data;
        });

        $scope.minlength = 3;

        $scope.add = function () {
            if ($scope.newName === 'qwer' ) {
                $scope.addForm.$error;
            } else $scope.newName = '';
        };
        $scope.save = function () {

        };
    }
);