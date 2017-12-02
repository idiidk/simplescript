#!/usr/bin/env node
"use strict";

var _fs = require("fs");

var _Transpile = require("./Transpile.js");

var _Arguments = require("./Arguments.js");

var _Log = require("./Log.js");

var argv = new _Arguments.ArgumentParser.parse(process.argv);

if (argv.length > 2) {
    (0, _fs.stat)(argv[2], function (err, stats) {
        if (err) {
            _Log.Logger.error("Input file " + argv[2] + " not found!");
        } else {
            (0, _fs.readFile)(argv[2], "utf-8", function (err, data) {
                if (err) {
                    _Log.Logger.error(err);
                    process.exit(1);
                } else {
                    console.log(_Transpile.Transpiler.run(data));
                }
            });
        }
    });
} else {
    _Log.Logger.error("Input file not found!");
}