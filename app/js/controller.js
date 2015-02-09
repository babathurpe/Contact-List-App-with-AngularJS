'use strict';

/* Controllers */

var contactListController = angular.module('contactListController', []);


contactListController.controller('ContactListCtrl', ['$scope', '$http',
	function($scope, $http){
		$http.get('contacts/contacts.json').success(function(data){
			$scope.contacts = data;
		});

		$scope.orderProp = 'first';
	}]);


contactListController.controller('ContactDetailCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		//$scope.contactId = $routeParams.contactId;
		$http.get('contacts/' + $routeParams.contactId + '.json').success(function(data){
			$scope.contact = data;
		});
	}]);

	
 //  $scope.contacts = [
 //    { 'first' : 'Len', 'last' : 'Payne', 'extension' : '3418'},
 //    { 'first' : 'Jim', 'last' : 'Cooper', 'extension' : '3219'},
	// { 'first' : 'Liane', 'last' : 'Cooper', 'extension' : '3336'},
	// { 'first' : 'Rick', 'last' : 'Brown', 'extension' : '3376'} 
 //  ];
  