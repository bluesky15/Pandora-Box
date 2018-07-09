import angular from 'angular';
import './navbar/navigation.component';
//import './js/route';  // angular ui routing
import '@uirouter/angularjs';
import './charts/charts.component';

angular.module('app', ['navBar', 'ui.router','charts'])
.config(function($stateProvider){
$stateProvider.state('home',{
    url: '/home',
    template:'<h1>Home is here!</h1>'
}).state('about',{
    url: '/about',
    template:'<h1>About is here!</h1>'
});
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