
// COMMON MODELS
var User = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'User';
    self.data = {
        name: args.name,
        username: args.username,
        password: args.password
    };

    return self;
};

var Item = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'Item';
    self.data = {
        name: args.name,
        unitOfMeasurement: args.unitOfMeasurement,
        quantity: args.quantity,
        category: args.category,
        variation: args.variation
    };

    return self;
};

var Attachment = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'Attachment';
    self.data = {
        grnId: args.grnId,
        name: args.name,
        url: args.url,

        createdBy: args.createdBy,
        createdOn: args.createdOn,

        lastUpdatedBy: args.lastUpdatedBy,
        lastUpdatedOn: args.lastUpdatedOn
    };

    return self;
};

var Site = function(name, displayName, address) {
    var self = this;
    self.id = 0;
    self.type = 'Site';
    self.data = {
        name: name,
        displayName: displayName,
        address: address
    };

    return self;
};

var Month = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'Month';
    self.data = {
        month: args.month,
        year: args.year,
        siteId: args.siteId,
        materialId: args.materialId,
        quantityIn: args.quantityIn,
        quantityOut: args.quantityOut,
        opening: args.opening
    };

    return self;
};

var GRNLine = function(args) {
    var self = this;

    self.id = 0;
    self.type = 'GRNLne';
    self.data = {
        approvedOn: args.approvedOn,
        approved: args.approved,    // boolean
        rejected: args.rejected,    // boolean

        billingStatus: args.billingStatus,
        billDate: args.billDate,
        billNumber: args.billNumber,
        billClosed: args.billClosed, //boolean
        totalPaidAmount: args.totalPaidAmount,
        totalBillingAmount: args.totalBillingAmount,

        measurementUnit: args.measurementUnit,
        orderedQuantity: args.orderedQuantity,
        pendingQuantity: args.pendingQuantity,

        images: args.images,

        item: args.item,
        unitPrice: args.unitPrice,
        price: args.price,
        challanNumber: args.challanNumber,
        state: args.state,
        remarks: args.remarks,
        qualityApproval: {
            approved: args.isQualityApproved,
            approvedQuantity: args.qualityApprovedQuantity,
            approvedOn: args.qualityApprovedOn,   // Date
            rejectionRemarks: args.qualityRejectionRemarks
        }
    };

    return self;
};

var Deal = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'Deal';
    self.data = {
        date: args.date,
        siteId: args.siteId,
        item: args.item,    // item
        quantityIn: args.quantityIn,
        quantityOut: args.quantityOut,
        opening: args.opening,
        balance: args.balance,
        measurementUnit: args.measurementUnit
    };

    return self;
};

var DateWiseStockTransaction = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'DateWiseStockTransaction';
    self.data = {
        date: args.date,    // Date
        quantityIn: args.quantityIn,
        quantityOut: args.quantityOut,
        consumed: args.consumed,
        opening: args.opening,
        balance: args.balance,
        item: args.item,    // Item
        site: args.site     // Site
    };

    return self;
};


// PERSISTENT OBJECTS
var Image = function(createdOn, createdBy, url, documentType, documentFor, documentForId, remarks) {
    var self = this;

    self.id = 0;
    self.type = 'Image';
    self.data = {
        createdOn: createdOn, // Date
        createdBy: createdBy,

        url: url,
        docType: documentType,
        parentType: documentFor,
        parentId: documentForId,
        remarks: remarks
    };

    return self;
};

var GRN = function(args) {
    var self = this;

    self.id = 0;
    self.type = 'GRN';
    self.data = {
        grnHeader: args.grnHeader,
        grnLines: args.grnLines,

        attachments: args.attachments,

        hasLocation: args.hasLocation, //boolean
        latitude: args.latitude,
        longitude: args.longitude,

        store: args.store,
        vehicleDetails: args.vehicleDetails,
        billed: args.billed,  // boolean
        invoiceNumber: args.invoiceNumber,
        requester: args.requester
    };

    return self;
};

var GRNHeader = function(args) {
    var self = this;

    self.id = 0;
    self.type = 'GRNHeader';
    self.data = {
        referenceNumber: args.referenceNumber,
        challanNumber: args.challanNumber,
        vendor: args.vendor,

        site: args.site,
        siteId: args.siteId,

        createdOn: args.createdOn,
        createdBy: args.createdBy,
        lastUpdatedOn: args.lastUpdatedOn,
        lastUpdatedBy: args.lastUpdatedBy
    };

    return self;
};

// MO
var MoveOrderHeader = function(args) {
    var self = this;

    self.id = 0;
    self.type = 'MoveOrderHeader';
    self.data = {
        from: args.from, // site
        to: args.to, // site

        referenceNumber: args.referenceNumber,
        date: args.date,
        status: args.status,
        remarks: args.remarks,
        requestedBy: args.requestedBy,
        closed: args.closed, // boolean
        closedBy: args.closedBy,

        canReceive: args.canReceive, // boolean
        canRelease: args.canRelease // boolean
    };

    return self;
};

var MoveOrder = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'MoveOrder';
    self.data = {
        approvedBy: args.approvedBy,
        approvedOn: args.approvedOn, // date
        challanNumber: args.challanNumber,

        approved: args.approved, // boolean
        closed: args.closed, // boolean
        received: args.received, // boolean
        released: args.released, // boolean
        receivePending: args.receivePending, // boolean
        releasePending: args.releasePending, // boolean

        raisedBy: args.raisedBy,
        raisedOn: args.raisedOn, // date
        receivedBy: args.receivedBy,
        receivedOn: args.receivedOn, // date
        releasedBy: args.releasedBy,
        releasedOn: args.releasedOn, // date

        referenceNumber: args.referenceNumber,
        requester: args.requester,
        remarks: args.remarks,
        status: args.status,

        lines: args.lines,   // MoveOrderLines
        releaseLines: args.releaseLines,   // MoveOrderReleaseLines
        receiveLines: args.receiveLines,   // MoveOrderReceiveLines

        transferDate: args.transferDate, // date
        transporter: args.transporter,
        transporterId: args.transporterId
    };

    return self;
};

var MoveOrderLine = function(args) {
    var self = this;

    self.id = 0;
    self.type = 'MoveOrderLine';
    self.data = {
        item: args.item,     // Item
        inTransitQuantity: args.inTransitQuantity,
        pendingReceiveQuantity: args.pendingReceiveQuantity,
        pendingReleaseQuantity: args.pendingReleaseQuantity,
        transferredQuantity: args.transferredQuantity,

        remarks: args.remarks,
        challanNumber: args.challanNumber
    };

    return self;
};

var MoveOrderReceiveLine = function(args) {
    var self = this;

    self.id = 0;
    self.type = 'MoveOrderReceiveLine';
    self.data = {
        earlierReleasedQuantity: args.earlierReleasedQuantity,
        earlierReceivedQuantity: args.earlierReceivedQuantity,

        item: args.item,     // item
        pendingQuantity: args.pendingQuantity,
        orderedQuantity: args.orderedQuantity,

        moId: args.moId,
        moLineId: args.moLineId,
        moReleaseLineId: args.moReleaseLineId,

        challanNumber: args.challanNumber,
        truckNumber: args.truckNumber,
        unitPrice: args.unitPrice,
        price: args.price
    };

    return self;
};

var MoveOrderReleaseLine = function(args) {
    var self = this;

    self.id = 0;
    self.type = 'MoveOrderReleaseLine';
    self.data = {
        earlierReleasedQuantity: args.earlierReleasedQuantity,
        moId: args.moId,
        remarks: args.remarks,

        orderedQuantity: args.orderedQuantity,
        pendingQuantity: args.pendingQuantity,

        item: args.item, // item
        price: args.price,
        unitPrice: args.unitPrice,
        truckNumber: args.truckNumber
    };

    return self;
};

var CashPurchase = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'CashPurchase';
    self.data= {
        lines: args.lines,   // CashPurchaseLine
        challanNumber: args.challanNumber,
        date: args.date, // date
        freight: args.freight,
        gross: args.gross,
        invoiceNumber: args.invoiceNumber,
        referenceNumber: args.referenceNumber,
        remarks: args.remarks,
        requester: args.requester,

        site: args.site, // Site
        store: args.store,
        storeId: args.storeId,
        vendor: args.vendor,

        tax: args.tax,
        taxAmount: args.taxAmount,
        total: args.total,

        createdBy: args.createdBy,
        createdOn: args.createdOn,   // date
        lastUpdatedBy: args.lastUpdatedBy,
        lastUpdatedOn: args.lastUpdatedOn,   // date

        deleted: args.deleted,   // boolean
        deletedBy: args.deletedBy,
        deletedOn: args.deletedOn   // date
    };

    return self;
};

var CashPurchaseLine = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'CashPurchaseLine';
    self.data = {
        cpId: args.cpId,
        item: args.item,    // Item
        paid: args.paid, // boolean
        challanNumber: args.challanNumber,
        remarks: args.remarks,
        truckNumber: args.truckNumber,
        unitPrice: args.unitPrice,
        reimburseAmount: args.reimburseAmount,
        price: args.price
    };

    return self;
};

var Consumption = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'Consumption';
    self.data = {
        createdBy: args.createdBy,
        createdOn: args.createdOn,   // date
        lastUpdatedBy: args.lastUpdatedBy,
        lastUpdatedOn: args.lastUpdatedOn,   // date

        deleted: args.deleted,   // boolean
        deletedBy: args.deletedBy,
        deletedOn: args.deletedOn,   // date

        consumedBy: args.consumedBy,
        referenceNumber: args.referenceNumber,
        remarks: args.remarks,

        site: args.site,   // Site
        store: args.store,
        storeId: args.storeId,

        lines: args.lines   // ConsumptionLines
    };

    return self;
};

var ConsumptionLine = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'ConsumptionLine';
    self.data = {
        consumptionId: args.consumptionId,
        item: args.item, // Item
        remarks: args.remarks
    };

    return self;
};

var Quotation = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'Quotation';
    self.data = {
        vendor: args.vendor,
        items: args.items
    };

    return self;
};

var Material = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'Material';
    self.data = {
        item: args.item,
        category: args.category,
        categoryId: args.categoryId,
        siteId: args.siteId,
        quantityIn: args.quantityIn,
        quantityOut: args.quantityOut
    };

    return self;
};

var MaterialCategory = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'MaterialCategory';
    self.data = {
        name: args.name
    };
    return self;
};

// ATTENDANCE module
var Attendance = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'Attendance';
    self.data = {
        present: args.present,
        absent: args.absent,
        leave: args.leave,
        night: args.night,
        halfTime: args.halfTime,
        status: args.status,
        date: args.date,
        total: args.total,
        dateWiseAttendanceList: []
    };

    return self;
};

var EmployeeAttendance = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'EmployeeAttendance';
    self.data = {
        employeeId: args.employeeId,
        dateWiseAttendanceList: args.dateWiseAttendanceList,
        monthWiseAttendanceCountList: args.monthWiseAttendanceCountList
    };

    return self;
};

var DateWiseAttendance = function(args) {
    var self = this;
    self.employeeId = args.employeeId;
    self.employeeName = args.employeeName;

    self.amount = args.amount;
    self.approvedBy = args.approvedBy;
    self.siteId = args.siteId;

    self.enabled = args.enabled;
    self.remarks = args.remarks;
    self.verifiedBy = args.verifiedBy;

    self.checkInTime = args.checkInTime;
    self.checkOutTime = args.checkOutTime;

    self.date = args.date;
    self.lastModifiedDate = args.lastModifiedDate;

    self.present = args.present;
    self.absent = args.absent;
    self.halfTime = args.halfTime;
    self.leave = args.leave;
    self.night = args.night;
    self.overTime = args.overTime;
    self.status = args.status;

    return self;
};

var MonthWiseAttendance = function(args) {
    var self = this;
    self.employeeId = args.employeeId;
    self.year = args.year;
    self.january = args.january;
    self.february = args.february;
    self.march = args.march;
    self.april = args.april;
    self.may = args.may;
    self.june = args.june;
    self.july = args.july;
    self.august = args.august;
    self.september = args.september;
    self.october = args.october;
    self.november = args.november;
    self.december = args.december;
    return self;
};


var Client = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'Client';
    self.data = {
        // code is to identify our client and use appropriate API URIs
        code: args.code,
        displayName: args.displayName
    };

    return self;
};

var Employee = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'Employee';
    self.data = {
        name: args.name,
        jobTitle: args.jobTitle,
        joiningDate: args.joiningDate,
        salary: args.salary
    };
    return self;
};

var PushToken = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'PushToken';
    self.data = {
        registrationId: args.registrationId,
        username: args.username
    };

    return self;
};

var Theme = function(args) {
    var self = this;
    self.color = args.color;
    self.textColor = args.textColor;
    self.name = args.name;
    self.displayName = args.displayName;
    return self;
};

var UserPreference = function(args) {
    var self = this;
    self.id = 0;
    self.type = 'UserPreference';
    self.data = {
        loadAutomatically: args.loadAutomatically,   // boolean
        vibration: args.vibration,                   // number from 0 to 100 milliseconds
        theme: args.theme                            // See themes.js
    };

    return self;
};
