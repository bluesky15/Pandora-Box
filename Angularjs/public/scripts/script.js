"use strict";

angular.module("myModule", [])
    .controller("myController", function ($scope, $http) {
        var names = ['John', 'Jessie', 'Johanna', 'Joy', 'Mary', 'Peter', 'Sebastian', 'Erika',
            'Patrick', 'Samantha'
        ];
        $scope.names = names;
        $scope.setSelectedName = function (name) {
            $scope.selectedName = name;
        }
        $scope.callApi = function () {
            $http.get('https://librivox.org/api/feed/audiobooks/?&format=json').then((response) => {
                $scope.response = response;
            }, (error) => {

            });
        }

    });