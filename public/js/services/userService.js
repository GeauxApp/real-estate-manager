'use strict';

var app = angular.module('podApp');

app.service('PodService', function($http) {

    this.getAll = function() {
        return $http.get('/api/pods')
    };

    this.create = function(pd) {
        return $http.post('/api/pods/', pd);
    }


    this.delete = function(pd) {
        return $http.delete(`/api/pods/${pd._id}`);

    };

    this.update = function(editPod) {
        return $http.put('/api/pods', editPod);
    };

})
