"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prettytable_1 = require("prettytable");
var mpv = require('node-mpv');
function showListIndex(arr, header1, header2) {
    var pt = new prettytable_1.default();
    pt.header(header1, header2);
    for (var i = 0; i < arr.length; i++) {
        pt.row(arr[i][header1], arr[i][header2]);
    }
    console.log(pt.toString());
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
