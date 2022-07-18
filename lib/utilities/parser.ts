import { parse } from 'ts-command-line-args';

export interface CLIArgs {
    version?: boolean;
    radio?: number;
    showRadios?: boolean;
    showReciters?: boolean;
    showSuras?: boolean;
    reciterSurah?: number[];
    help?: boolean;
}



export class CommandLine {
    static getArgs(): CLIArgs {
        const args = parse<CLIArgs>({
            showRadios: { type: Boolean, optional: true, alias: 'n', description: 'Shows all available radio channels' },
            showReciters: { type: Boolean, optional: true, alias: 'r', description: 'Shows all available reciters' },
            showSuras: { type: Boolean, optional: true, alias: 's', description: 'Show all suras in the Quran' },
            radio: { type: Number, optional: true, alias: 'd', description: 'Play specific radio' },
            reciterSurah: { type: Number, multiple: true, optional: true, alias: 'c', description: 'lay specific surah by a specific reciter. \nIf no surah specified, it will shows the available suras for the specified reciter.' },
            version: { type: Boolean, optional: true, alias: 'v', description: 'Shows the current version' },
            help: { type: Boolean, optional: true, alias: 'h', description: 'Prints this usage guide' },
        },
            {
                helpArg: 'help',
                headerContentSections: [{ header: 'Quran-CLI', content: 'Listen to the Quran from your terminal' }],
                footerContentSections: [{ header: '^_^', content: `Recall us in your doa'!` }],
            },
        );
        if (args.reciterSurah === undefined) {
            args.reciterSurah = [];
        }

        return args;
    }
}