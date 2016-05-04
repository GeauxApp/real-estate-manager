var app = angular.module('podApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: "html/home.html",
    controller: "homeCtrl"
  })

})
