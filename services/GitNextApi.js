app.service('GitNextApi', function ($http, $q  ) {
    var defNext = $q.defer();
    return {
        GetNextUsers : function(urlNext) {
            $http({
                method: 'GET',
                url: urlNext,
            }).then(function (Data) {
                console.log(Data);
                var test = 'test';
                    var NextUsersData = {
                        GitUsers : Data.data,
                        testvar: test,
                    }
                    defNext.resolve(NextUsersData);
                console.log('тоже работает')
                console.log(NextUsersData)
                }
            );
            return defNext.promise;
        }
    }
})