"use strict";
exports.__esModule = true;
var prettytable_1 = require("prettytable");
function showListIndex(arr, header1, header2) {
    var pt = new prettytable_1["default"]();
    pt.header(header1, header2);
    for (var i = 0; i < arr.length; i++) {
        pt.row(arr[i][header1], arr[i][header2]);
    }
    console.log(pt.toString());
}
exports.showListIndex = showListIndex;
