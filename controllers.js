angular.module("todo").controller("TodoCtrl", function($scope, todoStorage) {
  $scope.todos = todoStorage.get();

  $scope.remove = function(todo) {
    todoStorage.remove(todo);
  };

  $scope.add = function(newTodoTitle) {
    console.log($scope.todos);

    todoStorage.add(newTodoTitle);

    $scope.newTodoTitle = "";
  };

  $scope.update = function() {
    console.log($scope.todos);
    todoStorage.update();
  };
});
