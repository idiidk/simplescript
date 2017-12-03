"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var identifierList = [{ starters: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], identifier: "integer" }, { starters: ["*", "+", "/", "-"], identifier: "mathsymbol" }];

var skipList = ["\n", " "];

var tokenEnd = ";";

var inArray = function inArray(array, value) {
    return array.indexOf(value) !== -1;
};

var Token = function Token(identifier, value) {
    _classCallCheck(this, Token);

    this.identifier = identifier;
    this.value = value;
};

var Transpiler = function () {
    function Transpiler() {
        _classCallCheck(this, Transpiler);
    }

    _createClass(Transpiler, null, [{
        key: "computeTokenData",
        value: function computeTokenData(data, startIndex, identifier) {
            var finalToken = "";
            var continueValue = startIndex - 1;

            for (var i = startIndex; i < data.length; i++) {
                var char = data[i];
                continueValue++;

                if (inArray(identifier.starters, char)) {
                    if (skipList.indexOf(char) === -1) {
                        finalToken += char;
                    }
                } else {
                    break;
                }
            }

            return { data: finalToken, continueValue: continueValue };
        }
    }, {
        key: "lexicallyAnalyze",
        value: function lexicallyAnalyze(data) {
            var tokens = [];

            for (var i = 0; i < data.length; i++) {
                var char = data[i];
                console.log(char);
                if (char === tokenEnd) {
                    tokens.push(new Token("end", tokenEnd));
                } else {
                    for (var j = 0; j < identifierList.length; j++) {
                        var identifier = identifierList[j];

                        if (inArray(identifier.starters, char)) {
                            var tokenData = this.computeTokenData(data, i, identifier);
                            tokens.push(new Token(identifier.identifier, tokenData.data));
                            i = tokenData.continueValue - 1;
                        }
                    }
                }
            }

            return tokens;
        }
    }, {
        key: "run",
        value: function run(data) {
            return { err: null, tokens: this.lexicallyAnalyze(data) };
        }
    }]);

    return Transpiler;
}();

exports.Transpiler = Transpiler;