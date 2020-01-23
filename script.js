var app = angular.module("todo", []);

app.controller("TodoCtrl", [
  "$scope",
  function($scope) {
    $scope.todos = [
      {
        id: 0,
        title: "t1",
        completed: false,
        createdAt: Date.now()
      },
      {
        id: 1,
        title: "t2",
        completed: false,
        createdAt: Date.now()
      },
      {
        id: 2,
        title: "t3",
        completed: true,
        createdAt: Date.now()
      }
    ];

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
  }
]);

app.directive("todoTitle", function() {
  return {
    template: "<h1>todo List</h1>"
  };
});
