app.controller('GetUsersController', function ($routeParams, $scope, GitAPI,  $route,  $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.users = [];

    GitAPI.GetAllUsers().then(function (UsersData) {
        console.log(UsersData);
        $scope.users =  UsersData.GitUsers;

        /* console.log($scope.number)*/
        console.log($scope.users)
    })
})