homeApp.controller('homeController', ['$scope','$http',function (scope, $http){

        $http({method: 'GET', url: 'homes.json'}).
        then(function success(response) {
            scope.homes = response.data;
        });


        scope.addElem = function (elem) {

            if ( elem == undefined || elem == '' || elem.replace(/\s/g,'') == '' || elem.length < 3 ) {
                scope.error = true;
            }
            else {
                scope.homes.push({homeName:elem});
                scope.newName = '';
                scope.error = false;
            }
        };

        scope.editElem = function (s) {

            scope.homes[0].homeName = 'test'
            var a = s.homeName;
            if ( a == undefined || a == '' || a.replace(/\s/g,'') == '' || a.length < 3 ) {
                scope.errorClone = true;
            }
            else {
                console.log(a);
            }
            console.log(s);
        };
    }]
);