"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_command_line_args_1 = require("ts-command-line-args");
exports.args = ts_command_line_args_1.parse({
    version: { type: String, alias: 'v', description: 'Show version' },
    interactive: { type: Boolean, alias: 'i', description: 'Interactive mode' },
    radio: { type: Number, alias: 'd', description: 'Specify the radio channel to listen to' },
    reciter: { type: Number, alias: 'c', description: 'Specify the reciter to listen to' },
    surah: { type: Number, alias: 's', description: 'Specify the surah to listen to' },
    help: { type: Boolean, optional: true, alias: 'h', description: 'Prints this usage guide' },
}, {
    helpArg: 'help',
    headerContentSections: [{ header: 'Quran-CLI', content: 'Listen to the Quran from your terminal' }],
    footerContentSections: [{ header: '^_^', content: "Recall us in your doa'!" }],
});
