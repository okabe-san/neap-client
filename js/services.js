(function() {

  'use strict';

  angular
    .module('myApp.services', [])
    .service('coffeeService', coffeeService);

  coffeeService.$inject = ['$http'];

  const baseURL = 'http://localhost:8000/coffee/';

  function coffeeService($http) {
    /*jshint validthis: true */
    this.getAllCoffee = function () {
      return $http.get(baseURL);
    };
    this.getSingleCoffee = function (id) {
      return $http.get(`${baseURL}${id}`);
    };
    this.addCoffee = function (coffee) {
      return $http.post('baseURL', coffee);
    };
  }

})();
