angular.module('TodoApp')
	.controller('TodoController', function ($scope, $location, Todos, $routeParams) {
        $scope.editing = [];
		$scope.todos = Todos.query();
        
        $scope.save = function() {
            if(!$scope.newTodo || $scope.newTodo.length < 1) return;
            var todo = new Todos({ name: $scope.newTodo, completed: false });
            
            todo.$save(function(){
              $scope.todos.push(todo);
              $scope.newTodo = ''; // clear textbox
            });
        };
    
        $scope.remove = function(index){
            var todo = $scope.todos[index];
            Todos.remove({id: todo._id}, function(){
              $scope.todos.splice(index, 1);
            });
        };
        
        $scope.strike = function(index){
            var todo = $scope.todos[index];
            var bool = todo.completed ? false : true;
            Todos.update({id: todo._id}, {completed: bool}, function(data){
                //$scope.todos = Todos.query();
            });
        };
        
	});