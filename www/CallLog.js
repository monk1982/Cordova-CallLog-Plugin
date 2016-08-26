var CallLog = function(){};

CallLog.prototype.list = function (period, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "CallLog", "list", [period]);
};

CallLog.prototype.contact = function (phoneNumber, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "CallLog", "contact", [phoneNumber]);
};

CallLog.prototype.show = function (phoneNumber, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "CallLog", "show", [phoneNumber]);
};

CallLog.prototype.delete = function (id, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "CallLog", "delete", [id]);
};

CallLog.prototype.insert = function (args, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "CallLog", "insert", args);
};

//Plug in to Cordova
cordova.addConstructor(function() {

    if (!window.Cordova) {
        window.Cordova = cordova;
    };

    if(!window.plugins) window.plugins = {};
    window.plugins.CallLog = new CallLog();
});
