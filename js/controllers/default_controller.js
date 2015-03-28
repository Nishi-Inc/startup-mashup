
mainApp.controller('defaultController', ['$scope', '$rootScope', '$location', '$log', '$timeout', 'mainService',
    function($scope, $rootScope, $location, $log, $timeout, mainService) {
        $scope.go = mainService.go;

        mainService.page = 'home';

        $rootScope.navigateTo = function(path, vibrate, animate) {
            if (animate !== undefined) {
                switch (animate) {
                    case 'left':
                        mainService.toggleLeft();
                        break;
                    case 'right':
                        mainService.toggleLeft();
                        break;
                    default:
                }
                $timeout(function() {
                    mainService.go(path, vibrate);
                }, 100);
            } else {
                mainService.go(path, vibrate);
            }
        };

        $rootScope.searchQuery = '';
        $scope.noData = false;
        $scope.devMode = mainService.devMode;

        $scope.getRowClass = function(index) {
            return index%2 == 0? 'even' : 'odd';
        };
    }
]);
