"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PrettyTable = require('prettytable');
var mpv = require('node-mpv');
var data_1 = require("./data");
function showListIndex(arr, header1, header2, suras) {
    if (suras === void 0) { suras = false; }
    var pt = new PrettyTable();
    pt.fieldNames([header1, header2]);
    for (var i = 0; i < arr.length; i++) {
        if (suras) {
            pt.addRow([arr[i], data_1.surasDictionary[arr[i]]]);
        }
        else {
            pt.addRow([i, arr[i]]);
        }
    }
    pt.print();
}
exports.showListIndex = showListIndex;
function runFromURL(url) {
    var mpvPlayer = new mpv({
        "verbose": false,
        "audio_only": true
    });
    mpvPlayer.load(url);
    mpvPlayer.play();
    mpvPlayer.on('stopped', function () {
        console.log("Finished playing");
        process.exit(1);
    });
}
exports.runFromURL = runFromURL;
