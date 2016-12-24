app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'GetUsersController',
        templateUrl: 'templates/allusers.html'
    }).when('/single/:id', {
        controller: 'GetSingleUsers',
        templateUrl: 'templates/singleUser.html'
    })
});