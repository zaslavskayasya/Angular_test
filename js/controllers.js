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


    console.log($scope.newURL)
    $scope.nextPage = function ( ) {
        var number =  $scope.number;
        GitAPI.GetAllUsers($scope.number).then(function (UsersData) {
            $scope.users =  UsersData.GitUsers;
            $scope.users =  UsersData.GitUsers;
            $scope.number = UsersData.GitId++ ;
            console.log($scope.number);
            console.log($scope.users);

        });
    }
})

app.controller('GetSingleUsers', function ($routeParams, $scope, GitAPI ) {
    console.log('singlePage')
    console.log($routeParams)
    $scope.Surl = 'https://api.github.com/users/' + $routeParams.id;
    console.log($scope.Surl)

    GitAPI.GetSingleUserInfo($scope.Surl).then(function (SingleUserData) {
        console.log(SingleUserData);
        $scope.UserData = SingleUserData;
        console.log($scope.Surl)
    })

})