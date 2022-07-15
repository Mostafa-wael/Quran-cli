"use strict";
exports.__esModule = true;
exports.runFromURL = exports.showListIndex = void 0;
var PrettyTable = require('prettytable');
var mpv = require('node-mpv');
function showListIndex(arr, header1, header2) {
    var pt = new PrettyTable();
    pt.fieldNames([header1, header2]);
    for (var i = 0; i < arr.length; i++) {
        pt.addRow([i, arr[i]]);
    }
    console.log(pt.toString());
}
exports.showListIndex = showListIndex;
function runFromURL(url) {
    // run MPV subprocess
    var mpvPlayer = new mpv({
        "verbose": false,
        "audio_only": true
    });
    mpvPlayer.load(url);
    mpvPlayer.play();
    mpvPlayer.on('stopped', function () {
        console.log("Finished playing");
        process.exit(1); // close the program
    });
}
exports.runFromURL = runFromURL;
