import { CommandLine,CLIArgs } from "./utilities/parser";
import { runRadio } from "./modes/radioMode/radioMode";
import { runSurah } from "./modes/reciterMode/reciterMode";

const args: CLIArgs = CommandLine.getArgs();


if(args.radio >= 0) {
    runRadio(args.radio);
}
else if(args.reciterSurah.length > 0) {
    runSurah(args.reciterSurah[0], args.reciterSurah[1]);
}