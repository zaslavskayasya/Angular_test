app.service('GitPrevApi', function ($http, $q  ) {
    var defPrev = $q.defer();
    return {
        GetPrevUsers : function(urlPrev) {
            $http({
                method: 'GET',
                url: urlPrev,
            }).then(function (DataPrev) {
                    var PrevUsersData = {
                        GitUsers : DataPrev.data,
                    }
                defPrev.resolve(PrevUsersData);
                }
            );
            return defPrev.promise;
        }
    }
})