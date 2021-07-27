angular.module('multiply', [
  'multiply.services',
  'multiply.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/multiply", {templateUrl: "partials/multiply.html", controller: "multiplyController",css: ['css/app.css']}).
	otherwise({redirectTo: '/multiply'});
}]);