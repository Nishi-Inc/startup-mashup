
mainApp.factory('configService', [function() {
    var self = this;

//    self.currentClient = '';

    self.dbShortName = 'adminPanelDB';
    self.dbVersion = '1.0';
    self.dbDisplayName = 'adminPanelDB';
    self.dbMaxSize = 65535;

    self.versionName = '0.1.0';
    self.devMode = true;

    return self;
}]);
