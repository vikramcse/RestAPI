angular.module('TodoApp', ['ngRoute','ngResource'])
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/todos', {
				controller: 'TodoController',
				templateUrl: 'views/list.html'
			});
    
		$locationProvider.html5Mode(true);
	});