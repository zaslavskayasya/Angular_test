app.service('GitAPI', function ($http, $q  ) {
    var def = $q.defer();
    return{
        GetAllUsers : function() {
            $http({
                method: 'GET',
                url: 'https://api.github.com/users' ,
            }).then(function (Data) {
                    var UsersData = {
                        GitUsers : Data.data,
                    }
                    def.resolve(UsersData);
                }
            );
            return def.promise;
        }
    }
})