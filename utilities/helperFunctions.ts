import { surasDictionary } from "./data";
// let PrettyTable = require('prettytable');
import colors = require('colors');
import Table = require('../custom_node_modules/cli-table3');
import mpv = require('node-mpv');

export function showListIndex(arr: string[], header1: string, header2: string, suras: boolean = false) {
    let table = new Table({ head: [colors.cyan(header1), colors.cyan(header2)] });
    for (let i = 0; i < arr.length; i++) {
        if (suras) {
            // pt.addRow([arr[i], surasDictionary[arr[i]]]);
            table.push([colors.green(arr[i]), colors.yellow(surasDictionary[arr[i]])]);
        } else {
            table.push([colors.green(String(i)), colors.yellow(arr[i])]);
        }
    }
    console.log(table.toString());
}


export function runFromURL(url: string) {
    // run MPV subprocess
    let mpvPlayer = new mpv({
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

export function raiseError (name, message) {
    const err = new Error(message);
    err.name = name;
    console.log(err.message);
    //TODO: Raise error and catch it in a higher level
    // throw err
  }