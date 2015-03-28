
mainApp.controller('homeController', ['$scope', 'apiAdaptor', 'configService',
    function($scope, apiAdaptor, configService) {
        $scope.records = [
            new Record({
                name: 'Aditya',
                latitude: '30.7500N',
                longitude: '76.7800E'
            })
        ];

        $scope.error = false;

        var getRecordsFromApi = function() {
            var successCallback = function(records) {
                $scope.records = records;
            };

            var errorCallback = function() {
                $scope.error = true;
            };

            apiAdaptor.loadRecords(successCallback, errorCallback);
        };

        $scope.loadRecords = function() {
            getRecordsFromApi();
        };

        $scope.devMode = configService.devMode;

    }
]);
