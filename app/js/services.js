angular.module('multiply.services', [])
  .factory('ergastAPIservice', function($http) {

    var multiplyAPI = {};

    multiplyAPI.getValues = function() {
      return $http({
        method: 'get', 
        url: 'http://localhost:8080/api/multiply/getData'
      });
    }

    multiplyAPI.saveValues = function(values) {
      return $http({
        method: 'post',
        data:values,
        url: 'http://localhost:8080/api/multiply/saveData'
      });
    }


    return multiplyAPI;
  });