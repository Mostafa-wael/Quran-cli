import { parse } from 'ts-command-line-args';

export interface CLIArgs {
    version?: boolean;
    radio?: number;
    showRadio?: boolean;
    reciterSurah?: number[];
    help?: boolean;
}



export class CommandLine {
    static getArgs(): CLIArgs {
        const args = parse<CLIArgs>({
            radio: { type: Number , optional: true,  alias: 'd' , description: 'Specify the radio channel to listen to' },
            reciterSurah: { type: Number , multiple: true, optional: true,  alias: 'c' , description: 'Specify the reciter and the surah to listen to' },
            showRadio: { type: Boolean, optional: true, alias: 'n', description: 'Prints this usage guide' },
            version: { type: Boolean, optional: true, alias: 'v', description: 'Prints this usage guide' },
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

        return args
    }
}