app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'GetUsersController',
        templateUrl: 'templates/allusers.html'
    }).when('/all/:nextId' , {
        controller: 'NextUsersController',
        templateUrl: 'templates/nextPage.html'
    }).when('/prev/:prevId' , {
        controller: 'PrevUsersController',
        templateUrl: 'templates/PrevPage.html'
    }).when('/single/:id', {
        controller: 'GetSingleUsers',
        templateUrl: 'templates/singleUser.html'
    })
});