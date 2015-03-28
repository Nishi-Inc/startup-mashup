
var Record = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'Attachment';
    self.data = {
        name: args.name,
        deviceId: args.deviceId,
        latitude: args.latitude,
        longitude: args.longitude,

        createdOn: args.createdOn,
        lastUpdatedOn: args.lastUpdatedOn
    };

    return self;
};
