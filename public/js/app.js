var demoApp = angular.module('demoApp', []);

demoApp.controller('mainController', function($scope, $http) {
    $scope.formData = {};
    
    $http.get('/api/todos').success(function(data) {
        $scope.todos = data;
        console.log(data);
    }).error(function(data) {
        console.error(data);
    });
    
    $scope.createTodo = function () {
        $http.post('/api/todos', $scope.formData)
            .success(function (data) {
                $scope.formData = {};
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.error(data);
            });
    };
});