'use strict';

var contactListApp = angular.module('contactListApp', ['ngRoute','contactListController']);

contactListApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/contacts', {
				templateUrl: 'partials/contact-list.html',
				controller: 'ContactListCtrl'
			}).
			when('/contacts/:contactId', {
				templateUrl: 'partials/contact-detail.html',
				controller: 'ContactDetailCtrl'
			}).
			otherwise({
				redirectTo: '/contacts'
			});
	}]);