app.controller('NextUsersController', function ($routeParams, $scope, GitNextApi,  $sce) {

    console.log($routeParams);
    $scope.NextUrl = 'https://api.github.com/users?since=' + $routeParams.nextId;
    console.log($scope.NextUrl);

    GitNextApi.GetNextUsers($scope.NextUrl).then(function (NextUsersData) {

        console.log(NextUsersData); /*отработало с новым урл, но не обнвилось в след раз*/
        $scope.nextusers = [];
        $scope.nextusers =  NextUsersData.GitUsers;
        console.log('отработала')
        console.log($scope.nextusers);
        console.log($scope.NextUrl);
    })



})