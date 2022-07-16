import { CommandLine, CLIArgs } from "./utilities/parser";
import { runRadio, showAllRadios } from "./modes/radioMode/radioMode";
import { runSurah, showAllReciters, showReciterAvailableSuras } from "./modes/reciterMode/reciterMode";

const args: CLIArgs = CommandLine.getArgs();


if (args.radio >= 0) {
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