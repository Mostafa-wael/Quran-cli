#!/usr/bin/env node
import { CommandLine, CLIArgs } from "./utilities/parser";
import { runRadio, showAllRadios } from "./modes/radioMode/radioMode";
import { print } from "./utilities/helperFunctions";
import colors = require('colors');
import { runSurah, showAllReciters, showReciterAvailableSuras } from "./modes/reciterMode/reciterMode";
const pj = require('../package.json')



try {
    const args: CLIArgs = CommandLine.getArgs();

    // Do action based on the mode
    if (args.version == true) {
        print(`${pj.name} v${pj.version}`, "green");
    }
    else if (args.radio != undefined) {
        runRadio(args.radio);
    }
    else if (args.reciterSurah.length > 0) {
        if (args.reciterSurah.length == 1) {
            showReciterAvailableSuras(args.reciterSurah[0]);
        }
        else {
            runSurah(args.reciterSurah[0], args.reciterSurah[1]);
        }
    }
    else if (args.showRadios == true) {
        showAllRadios();
    }
    else if (args.showReciters == true) {
        showAllReciters();
    }
    else if (args.showSuras == true) {
        // TODO: use the values from the surasDictionary
        showReciterAvailableSuras(0); // we are sure that the reciter 0 has all the suras.
    }
}
catch (err) {
    // check if the error is a CLI error
    if (err.name == "UNKNOWN_OPTION") {
        print("Invalid option. Use -h to see the usage guide.", "red");
    }
    else if (err.name == "ALREADY_SET") {
        print("You can't set the same option more than once.", "red");
    }
    else if (err.name == "UNKNOWN_VALUE") {
        print("Invalid value. Use -h to see the usage guide.", "red");
    }
    else // custom error message
    {
        print(err.message, "red");
    }
}