MONTH = {
    JANUARY: {
        index: 0,
        displayName: "January",
        shortName: "Jan",
        intDisplay: "01"
    },
    FEBRUARY: {
        index: 1,
        displayName: "February",
        shortName: "Feb",
        intDisplay: "02"
    },
    MARCH: {
        index: 2,
        displayName: "March",
        shortName: "Mar",
        intDisplay: "03"
    },
    APRIL: {
        index: 3,
        displayName: "April",
        shortName: "Apr",
        intDisplay: "04"
    },
    MAY: {
        index: 4,
        displayName: "May",
        shortName: "May",
        intDisplay: "05"
    },
    JUNE: {
        index: 5,
        displayName: "June",
        shortName: "Jun",
        intDisplay: "06"
    },
    JULY: {
        index: 6,
        displayName: "July",
        shortName: "Jul",
        intDisplay: "07"
    },
    AUGUST: {
        index: 7,
        displayName: "August",
        shortName: "Aug",
        intDisplay: "08"
    },
    SEPTEMBER: {
        index: 8,
        displayName: "September",
        shortName: "Sep",
        intDisplay: "09"
    },
    OCTOBER: {
        index: 9,
        displayName: "October",
        shortName: "Oct",
        intDisplay: "10"
    },
    NOVEMBER: {
        index: 10,
        displayName: "November",
        shortName: "Nov",
        intDisplay: "11"
    },
    DECEMBER: {
        index: 11,
        displayName: "December",
        shortName: "Dec",
        intDisplay: "12"
    },
    find: function(intMonth) {
        for(var property in MONTH) {
            if(MONTH.hasOwnProperty(property) && typeof MONTH[property] === 'object' && MONTH[property].index == intMonth) {
                return MONTH[property];
            }
        }
    }
};

DEAL_TYPE = {
    CASH: {
        index: 0,
        displayName: "Cash",
        type: "DEBIT"
    },
    GRN: {
        index: 1,
        displayName: "GRN",
        type: "DEBIT"
    },
    CONSUMPTION: {
        index: 2,
        displayName: "Consumption",
        type: "DEBIT"
    },
    MO_RELEASE: {
        index: 3,
        displayName: "MO Release",
        type: "DEBIT"
    },
    MO_RECEIVE: {
        index: 4,
        displayName: "MO Receive",
        type: "CREDIT"
    },
    valueOf: function(displayName) {
        for(var property in DEAL_TYPE) {
            if(DEAL_TYPE.hasOwnProperty(property)
                && typeof DEAL_TYPE[property] === 'object'
                && (DEAL_TYPE[property].displayName == displayName
                    || DEAL_TYPE[property].displayName.replace(' ', '') == displayName)) {
                return DEAL_TYPE[property];
            }
        }
        return null;
    }
};
