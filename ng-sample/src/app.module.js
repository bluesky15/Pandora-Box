import angular from 'angular';
import './navbar/navigation.component';
import './home/home.component';
import './about/about.component';
//import './js/route';  // angular ui routing
import '@uirouter/angularjs';
import './charts/charts.component';


angular.module('app', ['navBar', 'ui.router', 'charts','homePage','aboutPage'])
    .config(function ($stateProvider,$urlRouterProvider,$locationProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                template: '<home-page></home-page>'
            }).state('about', {
                url: '/about',
                template: '<about-page></about-page>'
            }).state('contacts', {
                url: '/contacts',
                template: '<h1>contacts is here!</h1>'
            })
            .state('page1', {
                url: '/page1',
                template: require('./charts/charts.component.html')
            });
           // $locationProvider.html5Mode(true);
    });
// ui routing code
// .config(function ($routeProvider, $locationProvider) {
//     $routeProvider.when('/', {
//         template: 'Home'
//     }).when('/about', {
//         template: 'about'
//     }).when('/contacts', {
//         template: 'contacts'
//     }).when('/page1', {
//         template: require('./charts/charts.component.html')
//     }).otherwise({
//         redirectTo: '/'
//     });
//     // html 5 style route configuration
//     $locationProvider.html5Mode(true);
// });