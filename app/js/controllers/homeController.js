homeApp.controller('HomeController', function ($scope, $http){

        $http({method: 'GET', url: 'homes.json'}).
        then(function success(response) {
            $scope.homes = response.data;
        });

        $scope.addOpt = function () {
            alert('Hi');
        };
    }
);