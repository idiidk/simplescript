#!/usr/bin/env node

import { stat, readFile } from "fs";
import { Transpiler } from "./Transpile.js";
import { ArgumentParser } from "./Arguments.js";
import { Logger } from "./Log.js";

const argv = new ArgumentParser.parse(process.argv);

if (argv.length > 2) {
    stat(argv[2], function(err, stats) {
        if(err){
            Logger.error(`Input file ${argv[2]} not found!`);
        } else {
            readFile(argv[2], "utf-8", function(err, data) {
                if(err) {
                    Logger.error(err);
                    process.exit(1);
                } else {
                    console.log(Transpiler.run(data));
                }
            });
        }
    });
} else {
    Logger.error("Input file not found!");
}