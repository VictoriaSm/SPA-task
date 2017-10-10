var homeApp = angular.module('homeApp', ['ngRoute']);

// configure our routes
homeApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/home', {
            templateUrl : 'views/home.html',
            controller  : 'HomeController'
        });

});

