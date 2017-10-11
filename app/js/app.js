var homeApp = angular.module('homeApp', ['ngRoute']);

// configure our routes
homeApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'views/register.html',
            controller  : 'formController'
        })
        .when('/login', {
            templateUrl : 'views/login.html',
            controller  : 'formController'
        })
        .when('/home', {
            templateUrl : 'views/home.html',
            controller  : 'homeController'
        });

});

