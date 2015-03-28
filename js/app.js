
mainApp = angular.module('mainApp',['ngRoute', 'ngTouch', 'ionic']);

mainApp.run(['$ionicPlatform', function($ionicPlatform) {
    $ionicPlatform.ready(function(){
        var attachFastClick = Origami.fastclick;
        attachFastClick(document.body);
    });
}]);

// GENERAL navigation
mainApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
//            templateUrl: 'views/dashboard.html',
//            controller: 'defaultController'
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        }).otherwise({
            templateUrl: 'views/error/404.html',
            controller: 'defaultController'
        });
    }
]);
