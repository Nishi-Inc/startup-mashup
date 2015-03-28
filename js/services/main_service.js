mainApp.factory('mainService', ['$location', '$window', '$timeout', '$log', 'storageService', 'configService', 'apiAdaptor',
    function ($location, $window, $ionicSideMenuDelegate, $ionicScrollDelegate, $ionicPopup, $timeout, $log, storageService, configService, apidAdaptor) {
        var self = this;

        self.nullHandler = function () {
        };

        self.versionName = configService.versionName;

        self.go = function (path, vibrate) {
            if (vibrate) {
                self.buttonClick();
            }
            if (path.indexOf(":") >= 0) {
                navigator.app.loadUrl(path, {openExternal: true});
//                window.open(path, '_system');
            } else {
                var search = {};
                if (path.indexOf('?') > -1) {
                    var uriValues = path.split('?');
                    path = uriValues[0];
                    var params = uriValues[1].split('&');
                    for (var index in params) {
                        var paramValues = params[index].split('=');
                        search[paramValues[0]] = paramValues[1];
                    }
                }
                $location.path(path).search(search);
            }
        };

        self.isEmpty = function (obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    return false;
                }
            }
            return true;
        };

        self.clearSearch = function($scope, vibrate) {
            if(vibrate) {
                self.buttonClick();
            }
            $scope.searchQuery = '';
        };

        self.back = function () {
            if (typeof navigator.app !== undefined && navigator.app != null) {
                navigator.app.backHistory();
            } else {
                window.history.back();
            }
//            self.user={};
//            storageService.removeAll('User');
//            self.go('/login');
//            history.back();
//            $ionicNavBarDelegate.back();
        };

        self.page = '';
        self.screenTitle = '';

        self.convertToDate = function (dateString) {
            return (dateString != null && dateString.length > 0) ? eval('new ' + dateString.replace("/", "").replace("/", '')) : '';
        };

        self.displayDate = function (date) {
            var givenDate = new Date(date);
            return givenDate.getDate() + " " + MONTH.find(givenDate.getMonth()).displayName + ", " + givenDate.getFullYear();
        };

        self.displayShortDate = function (date) {
            var givenDate = new Date(date);
            return givenDate.getDate() + " " + MONTH.find(givenDate.getMonth()).shortName;
        };

        self.displayDateWithTime = function (date) {
            var givenDate = new Date(date);
            var hour = givenDate.getHours() % 12;
            hour = hour == 0 ? 12 : hour;
            var amPm = givenDate.getHours() > 11 ? 'PM' : 'AM';
            return self.displayDate(date) + ' ' + hour + ":" + givenDate.getMinutes() + ' ' + amPm;
        };

        /**
         * Shows a dialogue, which closes on click of any button. Default haptic feedback would be provided to user
         * @param title             Title of the dialogue shown
         * @param subTitle          Sub-title of the dialogue shown
         * @param template          template (HTML snippet or path to an HTML file)
         * @param successCallback   function to call on hit of positive button
         * @param cancelCallback    function to call on negative button
         * @param noOfButtons       No of buttons, can be a [Number] 0 to 3.<br/>
         *                          3 buttons: OK, Cancel, and Skip
         *                          2 buttons: OK and Cancel
         *                          1 button: OK
         *                          0 buttons: No button shown, <code>timeout</code> is required, default for the timeout is 5000 milliseconds
         * @param $scope            to fill values in template variables
         * @param vibrate           boolean {default true]
         * @param skipCallback      function to call on skip button
         * @param timeout           in milliseconds, to close dialogue after certain time
         * @param callback          function to call once dialogue closes
         */
        self.showDialogue = function (title, subTitle, template, noOfButtons, $scope, timeout, vibrate,
                                      successCallback, cancelCallback, skipCallback, callback) {
            if(successCallback === undefined || successCallback == null) {
                successCallback = self.nullHandler;
            }
            if(cancelCallback === undefined || cancelCallback == null) {
                cancelCallback = self.nullHandler;
            }
            if(skipCallback === undefined || skipCallback == null) {
                skipCallback = self.nullHandler;
            }
            if(vibrate === undefined || vibrate == null) {
                vibrate = true;
            }

            var buttons = [];
            if (noOfButtons === undefined) {
                noOfButtons = 1;
            } else if (noOfButtons > 3) {
                noOfButtons = 3;
            }

            switch (noOfButtons) {
                case 1:
                    buttons = [
                        {
                            text: 'OK',
                            type: 'button-royal',
                            onTap: function (e) {
                                if(vibrate) {
                                    self.buttonClick();
                                }
                                successCallback(e);
                            }
                        }
                    ];
                    break;

                case 2:
                    buttons = [
                        {
                            text: 'Cancel',
                            type: 'button-assertive',
                            onTap: function (e) {
                                if(vibrate) {
                                    self.buttonClick();
                                }
                                cancelCallback(e);
                            }
                        },
                        {
                            text: 'OK',
                            type: 'button-royal',
                            onTap: function (e) {
                                if(vibrate) {
                                    self.buttonClick();
                                }
                                successCallback(e);
                            }
                        }
                    ];
                    break;

                case 3:
                    buttons = [
                        {
                            text: 'Skip',
                            onTap: function (e) {
                                if(vibrate) {
                                    self.buttonClick();
                                }
                                skipCallback(e);
                            }
                        },
                        {
                            text: 'No',
                            type: 'button-assertive',
                            onTap: function (e) {
                                if(vibrate) {
                                    self.buttonClick();
                                }
                                cancelCallback(e);
                            }
                        },
                        {
                            text: 'Yes',
                            type: 'button-royal',
                            onTap: function (e) {
                                if(vibrate) {
                                    self.buttonClick();
                                }
                                successCallback(e);
                            }
                        }
                    ];
                    break;

                default:
                    timeout = 5000;
            }

            var popup = $ionicPopup.show({
                template: template,
                title: title,
                subTitle: subTitle,
                scope: $scope,
                buttons: buttons
            });
            popup.then(function (res) {
                if (callback !== undefined) {
                    callback(res);
                }
            });
            if (timeout !== undefined && timeout!=null) {
                $timeout(function () {
                    popup.close();
                }, timeout);
            }
        };

        return self;

    }
]);
