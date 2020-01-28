angular.module("todo").controller("TodoCtrl", function($scope, todoStorage) {
  $scope.todos = todoStorage.get();

  $scope.remove = function(todo) {
    var idx = $scope.todos.findIndex(function(item) {
      return item.id === todo.id;
    });

    if (idx > -1) {
      $scope.todos.splice(idx, 1);
    }
  };

  $scope.add = function(newTodoTitle) {
    var newTodo = {
      id: $scope.todos[$scope.todos.length - 1].id + 1,
      title: newTodoTitle,
      completed: false,
      createdAt: Date.now()
    };

    $scope.todos.push(newTodo);

    $scope.newTodoTitle = "";
  };
});
