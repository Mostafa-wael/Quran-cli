let PrettyTable = require('prettytable');
let mpv = require('node-mpv');
import { surasDictionary } from "./data";

export function showListIndex(arr: string[], header1: string, header2: string, suras: boolean = false) {
    let pt = new PrettyTable();
    pt.fieldNames([header1, header2]);
    for (let i = 0; i < arr.length; i++) {
        if (suras) {
            pt.addRow([arr[i], surasDictionary[arr[i]]]);
        } else {
            pt.addRow([i, arr[i]]);
        }
    }
    console.log(pt.toString());
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
