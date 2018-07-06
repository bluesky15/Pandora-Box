import './blog-list.module'

angular.module('blogList')
    .component('blogList', {
        // template: ` <div>
        //                 <h1>{{title}}</h1>
        //                 <button ng-click="someClickListener()" >ClickMe</button>
        //             </div>`,
        templateUrl: '../templates/blog-list.html',
        controller: function ($scope) {
            $scope.title = 'Hi there!';
            $scope.clicks = 0;
            $scope.someClickListener = function () {
                $scope.title = 'you cliked me! ' + $scope.clicks;
                $scope.clicks++;
            }
        }
    });
// .controller('BlogListController', function ($scope) {
//     $scope.title = 'Hi there!';
//     $scope.clicks = 0;
//     $scope.someClickListener = function () {
//         $scope.title = 'you cliked me! ' + $scope.clicks;
//         $scope.clicks++;
//     };

// });