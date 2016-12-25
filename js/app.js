var app = angular.module('GitApp', ['ngRoute']);


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


app.service('GitNextApi', function ($http, $q  ) {
    var defNext = $q.defer();
    return {
        GetNextUsers : function(urlPrev) {
            $http({
                method: 'GET',
                url: urlPrev,
            }).then(function (Data) {
                    var NextUsersData = {
                        GitUsers : Data.data,
                    }
                defNext.resolve(NextUsersData);
                }
            );
            return defNext.promise;
        }
    }
})

app.service('GitPrevApi', function ($http, $q  ) {
    var defPrev = $q.defer();
    return {
        GetPrevUsers : function(url) {
            $http({
                method: 'GET',
                url: url,
            }).then(function (Data) {
                    var PrevUsersData = {
                        GitUsers : Data.data,
                    }
                defPrev.resolve(PrevUsersData);
                }
            );
            return defPrev.promise;
        }
    }
})

app.service('GitSingleApi', function ($http, $q  ) {
    var defSingle = $q.defer();
    return {
        GetSingleUserInfo: function (urr) {
            $http({
                method: 'Get',
                url: urr
            }).then(function (SingleUserData) {
                    console.log('и эта тоже')
                    var SingleUserData = SingleUserData.data;
                    defSingle.resolve(SingleUserData);
                }
            )
            return defSingle.promise;
        }
    }
})
