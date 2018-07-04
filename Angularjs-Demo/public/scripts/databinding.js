"use strict";

var databinding = angular.module("databinding", [])

databinding.controller("dataController", function ($scope, $http) {
       $scope.title = "Angular data-binding";
    });