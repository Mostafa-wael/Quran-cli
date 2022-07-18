"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.raiseError = exports.runFromURL = exports.showListIndex = exports.print = void 0;
var data_1 = require("./data");
var colors = require("colors");
var Table = require("../custom_node_modules/cli-table3");
var mpv = require("node-mpv");
function print(str, color) {
    if (color === void 0) { color = "white"; }
    console.log(colors[color](str));
}
exports.print = print;
function showListIndex(arr, header1, header2, suras) {
    if (suras === void 0) { suras = false; }
    var table = new Table({ head: [colors.cyan(header1), colors.cyan(header2)] });
    for (var i = 0; i < arr.length; i++) {
        if (suras) {
            table.push([colors.green(arr[i]), colors.yellow(data_1.surasDictionary[arr[i]])]);
        }
        else {
            table.push([colors.green(String(i)), colors.yellow(arr[i])]);
        }
    }
    console.log(table.toString());
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
        print("Finished playing", "green");
        process.exit(1);
    });
}
exports.runFromURL = runFromURL;
function raiseError(name, message) {
    var err = new Error(colors.red(message));
    err.name = name;
    print(err.message, "red");
}
exports.raiseError = raiseError;
