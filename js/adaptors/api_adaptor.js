
mainApp.factory('apiAdaptor', ['$http', 'configService', function($http, configService) {
    var self = this;

    var defaultSuccessCallback = function(data, status, headers, config) {
    };

    var providedErrorCallback = function(data, status, headers, config) {};

    var defaultErrorCallback = function(data, status, headers, config) {
        providedErrorCallback(data, status, headers, config);
    };

    self.loadRecords = function(successCallback, errorCallback) {
        self.callAPI(configService.apiDomain, configService.recordsUri, {}, null, successCallback, errorCallback)
    };

    self.callAPI = function(domain, uri, load, method, successCallback, errorCallback) {
        if (typeof errorCallback!= 'undefined') {
            providedErrorCallback = errorCallback;
        }

        if (successCallback != null) {
            var recordsSuccessCallback = function (data, status, headers, config) {
                // TODO parse data and create a list of records
                var records = [];
                records.push(new Record({
                    name: "Jacob",
                    deviceId: "kadbgfwt87q2bfvd",
                    latitude: '-35.5620N',
                    longitude: '65.0987E',

                    createdOn: new Date(),
                    lastUpdatedOn: new Date()
                }));
                successCallback(records);
            };
        }
        if (method == null || method.length == 0) {
            method = 'GET';
        }
        var url = domain + uri;

        $http({method: method, url: url, params: load, timeout: 20000}).success(recordsSuccessCallback).error(defaultErrorCallback);
    };

    return self;
}]);

