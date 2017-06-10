
var app = angular.module("computer", ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/main', {
            templateUrl: 'main.html',
            controller: "MainCtrl"  
        }).
        when('/about', {
            templateUrl: 'about.html', 
            controller: "MainCtrl"
        }).
        when('/services', {
            templateUrl: 'services.html',
            controller: "ServicesCtrl"
        }).
        when('/contact', {
            templateUrl: 'contact.html',
            controller: "ContactCtrl"
        })
        .otherwise({ redirectTo: '/main' })
}])
    .controller('MainCtrl', function ($scope,$http) {
        $scope.persone = "mustafizur";
        $http.get('services.json').then(function (response) {
            $scope.services = response.data;
        })
    })
    .controller('ServicesCtrl', function ($scope, $http) {
        $http.get('services.json').then(function (response) {
            $scope.services = response.data;
        })
        console.log('ServicesCtrl');
    })
    .controller('ContactCtrl', function ($scope, $http) {
        $http.get('locations.json').then(function (response) {
            $scope.locations = response.data;
        });
    })