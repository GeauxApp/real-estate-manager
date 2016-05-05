'use strict';

var app = angular.module('podApp', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/html/home.html',
            controller: 'homeCtrl',

        })
        .state('addPod', {
            url: '/addPod',
            templateUrl: '/html/addPod.html',
            controller: 'homeCtrl',

        })
        .state('addClient', {
            url: '/addClient',
            templateUrl: '/html/addClient.html',
            controller: 'homeCtrl',

        })
        .state('clientList', {
            url: '/clientList',
            templateUrl: '/html/clientList.html',
            controller: 'homeCtrl',

        })
    $urlRouterProvider.otherwise('/');
});
