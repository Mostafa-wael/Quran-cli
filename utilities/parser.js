"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_command_line_args_1 = require("ts-command-line-args");
var CommandLine = (function () {
    function CommandLine() {
    }
    CommandLine.getArgs = function () {
        var args = ts_command_line_args_1.parse({
            showRadios: { type: Boolean, optional: true, alias: 'n', description: 'Shows all available radio channels' },
            radio: { type: Number, optional: true, alias: 'd', description: 'Play specific radio' },
            reciterSurah: { type: Number, multiple: true, optional: true, alias: 'c', description: 'lay specific surah by a specific reciter. \nIf no surah specified, it will shows the available suras for the specified reciter.' },
            showReciters: { type: Boolean, optional: true, alias: 'r', description: 'Shows all available reciters' },
            showSuras: { type: Boolean, optional: true, alias: 's', description: 'Show all suras in the Quran' },
            version: { type: Boolean, optional: true, alias: 'v', description: 'Shows the current version' },
            help: { type: Boolean, optional: true, alias: 'h', description: 'Prints this usage guide' },
        }, {
            helpArg: 'help',
            headerContentSections: [{ header: 'Quran-CLI', content: 'Listen to the Quran from your terminal' }],
            footerContentSections: [{ header: '^_^', content: "Recall us in your doa'!" }],
        });
        if (args.reciterSurah == undefined) {
            args.reciterSurah = [];
        }
        return args;
    };
    return CommandLine;
}());
exports.CommandLine = CommandLine;
