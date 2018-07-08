import angular from 'angular';
import './navbar/navigation.component';
import './js/route.min';  // angular ui routing

angular.module('app',['navBar', 'ngRoute'])
    .config(function ($routeProvider,$locationProvider) {
        $routeProvider.when('/',{
            template: 'Home'
        }).when('/about',{
            template: 'about'
        }).when('/contacts',{
            template: 'contacts'
        }).otherwise({
            redirectTo:'/'
        });
        $locationProvider.html5Mode(true);
    });