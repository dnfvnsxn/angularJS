(function() {
    var app = angular.module("todo", []);

    app.controller("TodoCtrl", [
        "$scope",
        function($scope) {
            $scope.todos = [
                {
                    title: "t1",
                    completed: false,
                    createdAt: Date.now()
                },
                {
                    title: "t2",
                    completed: false,
                    createdAt: Date.now()
                },
                {
                    title: "t3",
                    completed: true,
                    createdAt: Date.now()
                }
            ];
        }
    ]);
})();
