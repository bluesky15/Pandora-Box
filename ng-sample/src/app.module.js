import angular from 'angular';
import './navbar/navigation.component';
import './js/route.min';  // angular ui routing
import './charts/charts.component';

angular.module('app', ['navBar', 'ngRoute','charts'])
// ui routing code
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            template: 'Home'
        }).when('/about', {
            template: 'about'
        }).when('/contacts', {
            template: 'contacts'
        }).when('/page1', {
            template: require('./charts/charts.component.html')
        }).otherwise({
            redirectTo: '/'
        });
        // html 5 style route configuration
        $locationProvider.html5Mode(true);
    });