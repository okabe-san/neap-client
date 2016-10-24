(function() {

  'use strict';

  angular
    .module('myApp.components.coffee', [])
    .controller('coffeeController', coffeeController);

  coffeeController.$inject = ['$scope', 'coffeeService'];

  function coffeeController($scope, coffeeService) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';
    console.log(coffeeService.test);
    coffeeService.getAllCoffee()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
})();
