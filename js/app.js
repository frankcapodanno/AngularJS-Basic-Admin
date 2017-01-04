/**
 * the ui.bootstrap modules are defined in the js/controllers/ui folder
 */
var app = angular.module("myApp", ['ngAnimate', 'ngSanitize', 'ui.bootstrap','ngRoute','chart.js', 'nvd3']);

/**
 * the configuration of the routes depends about the application design
 * it is possible to use bower and configure the path directly with bower.
 * At the other hand here present a simply and concrete example.
 * Here the more important data is loaded in the MainController. 
 * Normally is a good practice to separate every view with a specific controller
 */

app.config(['$routeProvider', function($routeProvider) {
      $routeProvider.   
                    when('/',
                     {  
                        templateUrl: 'templates/profile.html',
                        controller: 'MainController'
                        })
                    .when('/profile', 
                        {
                        templateUrl: 'templates/profile.html', 
                        controller: 'MainController'
                        })
                    .when('/products', 
                        {
                        templateUrl: 'templates/products.html', 
                        controller: 'MainController'
                        })
                    .when('/data-analysis',
                        {
                        templateUrl: 'templates/data-analysis.html', 
                        controller: 'MainController'
                        })
                    .when('/allerts',
                        {
                        templateUrl: 'templates/alerts.html', 
                        controller: 'AlertsCtrl'
                        })
                    .when('/messages',
                        {
                        templateUrl: 'templates/messages.html', 
                        controller: 'MainController'
                        }).
                        otherwise({redirectTo:("/")})
     }]);
