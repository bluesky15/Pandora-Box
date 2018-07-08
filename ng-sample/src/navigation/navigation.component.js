


angular.module('blogList',[])
    .component('blogList', {
        template: require('./navigation.component.html'),
        controller: function ($scope) {
            $scope.title = 'Hi there!';
            $scope.clicks = 0;
            $scope.someClickListener = function () {
                $scope.title = 'you cliked me! ' + $scope.clicks;
                $scope.clicks++;
            }
        }
    });