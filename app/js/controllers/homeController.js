homeApp.controller('HomeController', function ($scope, $http){

    var homes = []
        $http({method: 'GET', url: 'homes.json'}).
        then(function success(response) {
            $scope.homes = response.data;
        });
$scope.test = function(home){
    home.homeName = 'test';


}

    $scope.$watch('homes.model', function(o,v){
        console.log('sdfsdfsdf  ', typeof o, o);
        o ?  o.homeName = "test" : '';
    });

        $scope.save = function () {
            var data = $scope.stack;
            /* post to server*/
            $http.post(url, data)
                .then(
                    function(response){
                        // success callback
                    },
                    function(response){
                        // failure callback
                    });
        };

    }
);