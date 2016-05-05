'use strict';

var app = angular.module('podApp');

app.service('ClientService', function($http) {

    this.getAll = function() {
        return $http.get('/api/clients')
    };

    this.create = function(client) {
        return $http.post('/api/clients/', client);
    }

    this.delete = function(client) {
        return $http.delete(`/api/clients/${client._id}`);
    };

    this.update = function(editClient) {
        return $http.put('/api/clients', editClient);
    };

})
