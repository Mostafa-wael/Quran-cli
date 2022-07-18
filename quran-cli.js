"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = require("./utilities/parser");
var radioMode_1 = require("./modes/radioMode/radioMode");
var reciterMode_1 = require("./modes/reciterMode/reciterMode");
var args = parser_1.CommandLine.getArgs();
<<<<<<< HEAD
if (args.version == true) {
    console.log("Version: 1.0.0");
}
else if (args.radio >= 0) {
    radioMode_1.runRadio(args.radio);
=======
if (args.radio >= 0) {
    (0, radioMode_1.runRadio)(args.radio);
>>>>>>> 257237a1a2a472e4e4f08e0dbe18736645218b2b
}
else if (args.reciterSurah.length > 0) {
    if (args.reciterSurah.length == 1) {
        (0, reciterMode_1.showReciterAvailableSuras)(args.reciterSurah[0]);
    }
    else {
        (0, reciterMode_1.runSurah)(args.reciterSurah[0], args.reciterSurah[1]);
    }
}
else if (args.showRadios == true) {
    (0, radioMode_1.showAllRadios)();
}
else if (args.showReciters == true) {
    (0, reciterMode_1.showAllReciters)();
}
else if (args.showSuras == true) {
    (0, reciterMode_1.showReciterAvailableSuras)(0);
}
