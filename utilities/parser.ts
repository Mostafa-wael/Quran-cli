import { parse } from 'ts-command-line-args';

export interface CLIArgs {
    version?: boolean;
    radio?: number;
    showRadio?: boolean;
    showReciters?: boolean;
    showSuras?: boolean;
    reciterSurah?: number[];
    help?: boolean;
}



export class CommandLine {
    static getArgs(): CLIArgs {
        const args = parse<CLIArgs>({
            radio: { type: Number, optional: true, alias: 'd', description: 'Specify the radio channel to listen to' },
            reciterSurah: { type: Number, multiple: true, optional: true, alias: 'c', description: 'Specify the reciter and the surah to listen to. \nIf no surah specified, it will shows the available suras for the specified reciter.' },
            showRadio: { type: Boolean, optional: true, alias: 'n', description: 'Shows all available radio channels' },
            showReciters: { type: Boolean, optional: true, alias: 'r', description: 'Shows all available reciters' },
            showSuras: { type: Boolean, optional: true, alias: 's', description: 'Shows suras numbers' },
            version: { type: Boolean, optional: true, alias: 'v', description: 'Shows the current version' },
            help: { type: Boolean, optional: true, alias: 'h', description: 'Prints this usage guide' },
        },
            {
                helpArg: 'help',
                headerContentSections: [{ header: 'Quran-CLI', content: 'Listen to the Quran from your terminal' }],
                footerContentSections: [{ header: '^_^', content: `Recall us in your doa'!` }],
            },
        );
        if (args.version === true) {
            console.log("V1.0.0");
        }
        if (args.reciterSurah == undefined) {
            args.reciterSurah = [];
        }

        return args
    }
}