"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
var vscode = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension "q-cli" is now active!');
    var disposable = vscode.commands.registerCommand('q-cli.helloWorld', function () {
        vscode.window.showInformationMessage('Hello World from quran-cli!');
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
