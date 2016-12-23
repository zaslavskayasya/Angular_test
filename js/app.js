var app = angular.module('GitApp', ['ngRoute']);


app.service('GitAPI', function ($http, $q  ) {

    var def = $q.defer();
    return{

        GetGitApi : function(number) {

            $http({
                method: 'GET',
                url: 'https://api.github.com/users?since=' + number ,

            }).then(function (Data, number) {
                console.log(Data);
                var GitUsers = Data.data;
                 var UsersData = {
                    GitUsers : Data.data,
                    GitId: GitUsers[29].id,
                }
                def.resolve(UsersData);
                }
            );
            return def.promise;
        }
    }
})

