

angular.module('navBar',[])
    .component('navBar', {
        template: require('./navigation.component.html'),
        controller: function ($scope) {
            $scope.title = 'Hi there!';
            $scope.clicks = 0;
            $scope.someClickListener = function () {
                $scope.title = 'you clicked me! ' + $scope.clicks;
                $scope.clicks++;
            }
        }
    });