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
    },

    remove: function(todo) {
      var idx = storage.todos.findIndex(function(item) {
        return item.id === todo.id;
      });

      if (idx > -1) {
        storage.todos.splice(idx, 1);
      }
    },

    add: function(newTodoTitle) {
      var newTodo = {
        id: storage.todos[storage.todos.length - 1].id + 1,
        title: newTodoTitle,
        completed: false,
        createdAt: Date.now()
      };

      storage.todos.push(newTodo);
    }
  };

  return storage;
});
