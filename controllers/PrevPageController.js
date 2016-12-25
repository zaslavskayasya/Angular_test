app.controller('PrevUsersController', function ($routeParams, $scope, GitPrevApi) {
    console.log($routeParams);
    $scope.PrevUrl = 'https://api.github.com/users?since=' + $routeParams.prevId;
    console.log($scope.PrevUrl);
    GitPrevApi.GetPrevUsers($scope.PrevUrl).then(function (PrevUsersData) {
        console.log(PrevUsersData);
        $scope.users =  PrevUsersData.GitUsers;
        console.log($scope.PrevUrl)
    })
    $scope.users = [];
})