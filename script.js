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
  }
]);
