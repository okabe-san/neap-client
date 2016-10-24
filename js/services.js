(function() {

  'use strict';

  angular
    .module('myApp.services', [])
    .service('coffeeService', coffeeService);

  coffeeService.$inject = ['$http'];

  function coffeeService($http) {
    /*jshint validthis: true */
    this.getAllCoffee = function () {
      return $http.get('http://localhost:8888/');
    };
    this.test = 'test';
  }
})();
