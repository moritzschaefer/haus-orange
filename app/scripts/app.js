'use strict';

angular.module('hausOrangeHtmlApp', [
  'ngCookies',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/images', {
        templateUrl: 'views/images.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  })
.directive('homeImage', function() {
    return {
        scope: {model: '=content'},
        templateUrl: 'views/partials/image-text.html',
    };
});
