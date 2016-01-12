app.config(function($locationProvider, $routeProvider){
  $locationProvider.html5Mode(true)
  $routeProvider
    .when('/', {
      templateUrl: '/partials/home.html',
      controller: 'HomeController'
    })
    .when('/show/:id', {
      templateUrl: '/partials/show.html',
      controller: 'ShowController'
    })
})
