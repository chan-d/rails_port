angular.module('profileApp', ['ngRoute', 'templates', 'ngResource'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config (   $routeProvider,  $locationProvider) {
  $routeProvider
    .when('/aboutMe', {
      templateUrl: 'aboutMe.template.html',
      controller: 'aboutMeController',
      controllerAs: 'aboutMeCtrl'
    })
    .when('/profile', {
      templateUrl: 'profile.template.html',
      controller: 'ProfileController',
      controllerAs: 'profileCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });


    $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
