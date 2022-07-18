"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = require("./utilities/parser");
var radioMode_1 = require("./modes/radioMode/radioMode");
var reciterMode_1 = require("./modes/reciterMode/reciterMode");
var pj = require('./package.json');
var args = parser_1.CommandLine.getArgs();
if (args.version == true) {
    console.log(pj.version);
}
else if (args.radio >= 0) {
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
