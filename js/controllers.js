app.controller('GetUsersController', function ($routeParams, $scope, GitAPI,  $route,  $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    $scope.users = [];

    GitAPI.GetAllUsers().then(function ( UsersData) {
        console.log( UsersData);

        $scope.users =  UsersData.GitUsers;
        $scope.number = UsersData.GitId;
        console.log($scope.number)
        console.log($scope.users)

    })
    
    $scope.takeUserParams = function (a, b) {
    /*    $scope.paramLog = a;
        $scope.paramID = b;
        $scope.newURL = 'https://api.github.com/users/' + $scope.paramLog;
        console.log($scope.paramLog)
        console.log($scope.paramID)
        console.log($scope.newURL)*/
    }
    console.log($scope.newURL)
    $scope.nextPage = function ( ) {
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
   console.log($routeParams)

    $scope.Surl = 'https://api.github.com/users/' + $routeParams.id;
    console.log($scope.Surl)

    GitAPI.GetSingleUserInfo($scope.Surl).then(function (SingleUserData) {
        console.log(SingleUserData);
        $scope.UserData = SingleUserData;
        console.log($scope.Surl)
    })

})