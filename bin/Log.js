"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Logger = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger() {
        _classCallCheck(this, Logger);
    }

    _createClass(Logger, null, [{
        key: "info",
        value: function info(val) {
            console.log(_chalk2.default.blue("[+] " + val));
        }
    }, {
        key: "warning",
        value: function warning(val) {
            console.log(_chalk2.default.orange("[*] " + val));
        }
    }, {
        key: "error",
        value: function error(val) {
            console.log(_chalk2.default.red("[-] " + val));
        }
    }, {
        key: "log",
        value: function log(val) {
            console.log(val);
        }
    }]);

    return Logger;
}();

exports.Logger = Logger;