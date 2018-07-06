import angular from 'angular';
import './route.min.js';

// angular.module("myApp", [])
//     .controller("myController", function ($scope, $http) {
//         var names = ['John', 'Jessie', 'Johanna', 'Joy', 'Mary', 'Peter', 'Sebastian', 'Erika',
//             'Patrick', 'Samantha'
//         ];
//         $scope.names = names;

//     });
// route.$http;
var app = angular.module("myApp", ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        template: 'welcome user!'
    }).when('/another', {
        template: 'welcome user, again!'
    }).otherwise({
        redirectTo: '/'
    });
});