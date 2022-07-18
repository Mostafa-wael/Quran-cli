"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var path = require("path");
var Mocha = require("mocha");
var glob = require("glob");
function run() {
    var mocha = new Mocha({
        ui: 'tdd',
        color: true
    });
    var testsRoot = path.resolve(__dirname, '..');
    return new Promise(function (c, e) {
        glob('**/**.test.js', { cwd: testsRoot }, function (err, files) {
            if (err) {
                return e(err);
            }
            files.forEach(function (f) { return mocha.addFile(path.resolve(testsRoot, f)); });
            try {
                mocha.run(function (failures) {
                    if (failures > 0) {
                        e(new Error("".concat(failures, " tests failed.")));
                    }
                    else {
                        c();
                    }
                });
            }
            catch (err) {
                console.error(err);
                e(err);
            }
        });
    });
}
exports.run = run;
