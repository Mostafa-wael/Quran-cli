"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = require("./utilities/parser");
var radioMode_1 = require("./modes/radioMode/radioMode");
var helperFunctions_1 = require("./utilities/helperFunctions");
var reciterMode_1 = require("./modes/reciterMode/reciterMode");
var pj = require('../package.json');
try {
    var args = parser_1.CommandLine.getArgs();
    if (args.version == true) {
        helperFunctions_1.print(pj.name + " v" + pj.version, "green");
    }
    else if (args.radio != undefined) {
        radioMode_1.runRadio(args.radio);
    }
    else if (args.reciterSurah.length > 0) {
        if (args.reciterSurah.length == 1) {
            reciterMode_1.showReciterAvailableSuras(args.reciterSurah[0]);
        }
        else {
            reciterMode_1.runSurah(args.reciterSurah[0], args.reciterSurah[1]);
        }
    }
    else if (args.showRadios == true) {
        radioMode_1.showAllRadios();
    }
    else if (args.showReciters == true) {
        reciterMode_1.showAllReciters();
    }
    else if (args.showSuras == true) {
        reciterMode_1.showReciterAvailableSuras(0);
    }
}
catch (err) {
    if (err.name == "UNKNOWN_OPTION") {
        helperFunctions_1.print("Invalid option. Use -h to see the usage guide.", "red");
    }
    else if (err.name == "ALREADY_SET") {
        helperFunctions_1.print("You can't set the same option more than once.", "red");
    }
    else if (err.name == "UNKNOWN_VALUE") {
        helperFunctions_1.print("Invalid value. Use -h to see the usage guide.", "red");
    }
    else {
        helperFunctions_1.print(err.message, "red");
    }
}
