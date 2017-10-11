homeApp.controller('homeController', function ($scope, $http){

        $http({method: 'GET', url: 'homes.json'}).
        then(function success(response) {
            $scope.homes = response.data;
        });

        var inputAdd = angular.element( document.querySelector('#addName') );
        var buttonAdd = angular.element( document.querySelector('.btn-add') );
        $scope.addElem = function (elem) {

            if ( elem == undefined || elem == '' || elem.replace(/\s/g,'') == '' || elem.length < 3 ) {
                inputAdd.addClass('error');
                buttonAdd.addClass('error');
            }
            else {
                $scope.homes.push({homeName:elem});
                $scope.newName = '';
            }
        };

        $scope.removeClass = function () {
            inputAdd.removeClass('error');
            buttonAdd.removeClass('error');
        };

        /*var inputEdit = angular.element( document.querySelector('#editName') );
        var buttonEdit = angular.element( document.querySelector('.btn-edit') );*/
        $scope.editElem = function (s) {
            // $scope.editName = '+';
            console.log($scope.editName);
        };
    }
);