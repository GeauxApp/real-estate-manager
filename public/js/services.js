'use strict';

var app = angular.module('podApp');

app.service('PodService', function($http){

  this.getAll = function(){
    return $http.get('/pods')
  };

  this.create = function(pod){
    return $http.post('/pods',pod);
  }

  this.delete = function(pod) {
   return $http.delete(`/pods/${pod._id}`)

 };

 this.update = function(editPod){
    return $http.put('/pods', editPod);
};

})
