"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = require("./utilities/parser");
var radioMode_1 = require("./modes/radioMode/radioMode");
var reciterMode_1 = require("./modes/reciterMode/reciterMode");
var args = parser_1.CommandLine.getArgs();
if (args.radio >= 0) {
    radioMode_1.runRadio(args.radio);
}
else if (args.reciterSurah.length > 0) {
    reciterMode_1.runSurah(args.reciterSurah[0], args.reciterSurah[1]);
}
