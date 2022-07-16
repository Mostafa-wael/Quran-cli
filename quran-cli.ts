import { CommandLine,CLIArgs } from "./utilities/parser";
import { runRadio, showAllRadios } from "./modes/radioMode/radioMode";
import { runSurah, showAllReciters, showAvailableSuras } from "./modes/reciterMode/reciterMode";

const args: CLIArgs = CommandLine.getArgs();


if(args.radio >= 0) {
    runRadio(args.radio);
}
else if(args.reciterSurah.length > 0) {
    runSurah(args.reciterSurah[0], args.reciterSurah[1]);
}
else if(args.showRadio == true) {
    showAllRadios();
}
else if(args.showReciters == true) {
    showAllReciters();
}
else if(args.showSuras == true) {
    showAvailableSuras(0);
}