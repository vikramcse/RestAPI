angular.module('TodoApp')
	.factory('Todos', function($resource) {
		return $resource('/api/todos/:id', null, {
			'update' : {method: 'PUT'}
		})
	});