app.service('GitSingleApi', function ($http, $q  ) {
    var defSingle = $q.defer();
    return {
        GetSingleUserInfo: function (urr) {
            $http({
                method: 'Get',
                url: urr
            }).then(function (SingleUserData) {
                    var SingleUserData = SingleUserData.data;
                    defSingle.resolve(SingleUserData);
                }
            )
            return defSingle.promise;
        }
    }
})