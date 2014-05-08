'use strict';

angular.module('hausOrangeHtmlApp', [
  'ngCookies',
  'ngRoute',
  'bootstrapLightbox'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/images', {
        templateUrl: 'views/images.html',
        controller: 'ImagesCtrl'
      })
      .when('/location', {
        templateUrl: 'views/location.html',
        controller: 'MainCtrl'
      })
      .when('/price', {
        templateUrl: 'views/price.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
          templateUrl: 'views/contact.html',
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
})
.directive('activeLink', ['$location', function(location) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, controller) {
        var clazz = attrs.activeLink;
        var path = attrs.path;
        scope.location = location;
        scope.$watch('location.path()', function(newPath) {
          if (path === newPath) {
            element.addClass(clazz);
          } else {
            element.removeClass(clazz);
          }
        });
      }
    };
  }]);
