app.controller('GetUsersController', function ($scope, GitAPI ) {
    $scope.users = [];

    console.log($scope.URL)
    var number =  $scope.number;
    GitAPI.GetGitApi().then(function ( UsersData) {
        console.log( UsersData);

        $scope.users =  UsersData.GitUsers;
        $scope.number = UsersData.GitId;
        console.log($scope.number)
        console.log($scope.users)
    })

    $scope.nextPage = function () {
        $scope.users = [];
        var number =  $scope.number;
        GitAPI.GetGitApi($scope.number).then(function (UsersData) {
            $scope.number = UsersData.GitId ;
            console.log(UsersData);
            console.log( number);
            $scope.users =  UsersData.GitUsers;
            $scope.number = UsersData.GitId++ ;

            console.log($scope.number)
            console.log($scope.users)
        });
    }
})