var log = angular.module('ProFindLogInApp',[]);

var app = angular.module('ProFindApp', ['ngRoute']);

app.controller('GeneralCtrl', ['$scope','$http', function ($scope, $http) {
	$scope.MenuPublisher = 'misc/menuPub.html';
}]);
