angular.module("todo").factory("todoStorage", function() {
  var storage = {
    todos: [
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
    ],

    get: function() {
      return storage.todos;
    }
  };

  return storage;
});
