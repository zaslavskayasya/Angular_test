var app = angular.module('GitApp', ['ngRoute']);


app.service('GitAPI', function ($http, $q  ) {

    var def = $q.defer();
    return{

        GetAllUsers : function(number) {

            $http({
                method: 'GET',
                url: 'https://api.github.com/users?since=' + number ,

            }).then(function (Data) {
                var GitId = Data.data[29].id;

                console.log(GitId);
                var GitUsers = GitId;
                 var UsersData = {
                    GitUsers : Data.data,
                    GitId: Data.data[29].id,
                     length: 30,
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
                console.log(SingleUserData);
                    def.resolve(SingleUserData);
            }

            )
            return def.promise;
        }
    }
})


