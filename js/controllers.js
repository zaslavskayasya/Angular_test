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

app.controller('NextUsersController', function ($routeParams, $scope, GitNextApi) {
    console.log($routeParams);
    $scope.NextUrl = 'https://api.github.com/users?since=' + $routeParams.nextId;
    console.log($scope.NextUrl)
    GitNextApi.GetNextUsers($scope.NextUrl).then(function (NextUsersData) {
        console.log(NextUsersData);
        $scope.users =  NextUsersData.GitUsers;
        console.log($scope.NextUrl)
    })
    $scope.users = [];
})

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

app.controller('GetSingleUsers', function ($routeParams, $scope, GitSingleApi  ) {
    $scope.Surl = 'https://api.github.com/users/' + $routeParams.id;
    console.log($scope.Surl);

    $scope.showSingleUserFunction = function () {
        GitSingleApi.GetSingleUserInfo($scope.Surl).then(function (SingleUserData) {
            $scope.UserData = SingleUserData; /*сюда сначала приходят сначала другие данные*/
            console.log(SingleUserData);
            $scope.CreatedDate = SingleUserData.created_at;
            console.log($scope.CreatedDate);
            $scope.newDate = moment($scope.CreatedDate).format('DD/MM/YYYY');
            console.log($scope.newDate);
            console.log('функция отработала')
        })
    }
    $scope.showSingleUserFunction($scope.Surl);

    $scope.showSingleUserFunction($scope.Surl);

/** автообновление */
  /*  var timerId = setTimeout(function tick() {
        window.location.reload();
        clearInterval(timerId);
    }, 2000);*/

})