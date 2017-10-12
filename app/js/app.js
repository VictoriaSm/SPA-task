var homeApp = angular.module('homeApp', ['ngRoute']);

homeApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'views/login.html',
            controller  : 'loginController'
        })
        .when('/register', {
            templateUrl : 'views/register.html',
            controller  : 'registerController'
        })
        .when('/home', {
            templateUrl : 'views/home.html',
            controller  : 'homeController'
        });

});

