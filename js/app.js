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
        },
        GetSingleUserInfo: function (urr) {
            $http({
                method: 'Get',
                url: urr
            }).then(function (SingleUserData) {
                var SingleUserData = SingleUserData.data;
                def.resolve(SingleUserData);
            }
            )
            return def.promise;
        },GetNextUsers : function(url) {

            $http({
                method: 'GET',
                url: url,
            }).then(function (Data) {

                    var UsersData = {
                        GitUsers : Data.data,

                    }
                    def.resolve(UsersData);
                }
            );
            return def.promise;
        },GetPrevUsers : function(url) {
            $http({
                method: 'GET',
                url: url,
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


