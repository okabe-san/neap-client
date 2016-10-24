(function() {

  'use strict';

  angular
    .module('myApp.services', [])
    .service('coffeeService', coffeeService);

  coffeeService.$inject = ['$http'];

  function coffeeService($http) {
    /*jshint validthis: true */
    this.getAllCoffee = function () {
      return $http.get('https://fierce-beyond-69097.herokuapp.com/coffee');
    };
    this.test = 'test';
  }
})();
