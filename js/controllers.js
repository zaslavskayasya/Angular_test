app.controller('GetUsersController', function ($routeParams, $scope, GitAPI) {
    $scope.users = [];

    GitAPI.GetAllUsers().then(function ( UsersData) {
        console.log( UsersData);

        $scope.users =  UsersData.GitUsers;
        $scope.number = UsersData.GitId;
        console.log($scope.number)
        console.log($scope.users)

    })

    $scope.nextPage = function () {
        $scope.users = [];
        var number =  $scope.number;
        GitAPI.GetAllUsers($scope.number).then(function (UsersData) {
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

app.controller('GetSingleUsers', function ($routeParams, $scope, GitAPI ) {
   console.log('singlePage')
   console.log($routeParams.owner)
    GitAPI.GetSingleUserInfo().then(function (SingleUserData) {
        console.log(SingleUserData);
        $scope.UserData = SingleUserData;
    })
})