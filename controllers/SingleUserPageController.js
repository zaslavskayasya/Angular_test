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
        })
    }
    $scope.showSingleUserFunction($scope.Surl);

})