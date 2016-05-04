'use strict';

var app = angular.module('podApp', ['ui.router']);

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
        .state('clientList', {
            url: '/clientList',
            templateUrl: '/html/clientList.html',
            controller: 'homeCtrl',

        })
    $urlRouterProvider.otherwise('/');
});
