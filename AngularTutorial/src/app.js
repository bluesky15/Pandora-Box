import angular from 'angular';

var myApp = angular.module('myApp', []);

myApp.controller('myController', function ($scope) {
    $scope.name = "Jane Doe";
    console.log($scope);
});