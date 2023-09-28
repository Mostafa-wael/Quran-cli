"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runRadio = exports.showAllRadios = void 0;
var node_fetch_1 = require("node-fetch");
var helperFunctions_1 = require("../../utilities/helperFunctions");
var url = "https://api.mp3quran.net/radios/radio_english.json";
function getData() {
    try {
        (0, helperFunctions_1.print)("Fetching data...", "cyan");
        return (0, node_fetch_1.default)(url)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            return res['radios'];
        });
    }
    catch (err) {
        (0, helperFunctions_1.print)("No available Internet connection", "red");
        process.exit(1);
    }
}
function getRadioNamesList() {
    return __awaiter(this, void 0, void 0, function () {
        var data, radios, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, getData()];
                case 1:
                    data = _a.sent();
                    radios = [];
                    for (i = 0; i < data.length; i++) {
                        radios.push(data[i]['name']);
                    }
                    return [2, radios];
            }
        });
    });
}
function getSpecificRadioData(radioIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, getData()];
                case 1:
                    data = _a.sent();
                    return [2, data[radioIndex]];
            }
        });
    });
}
function showAllRadios() {
    getRadioNamesList().then(function (res) {
        (0, helperFunctions_1.showListIndex)(res, 'Radio Index', 'Name');
    }).catch(function (err) {
        (0, helperFunctions_1.raiseError)("SHOW_ALL_RADIOS", "Error while showing all the radios");
    });
}
exports.showAllRadios = showAllRadios;
function runRadio(radioIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var data, radioName, _a, err_1, list, errMsg;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 6]);
                    return [4, getSpecificRadioData(radioIndex)];
                case 1:
                    data = _b.sent();
                    return [4, data['name']];
                case 2:
                    radioName = _b.sent();
                    (0, helperFunctions_1.print)("Radio Channel: ".concat(radioName), "green");
                    _a = helperFunctions_1.runFromURL;
                    return [4, data['radio_url']];
                case 3:
                    _a.apply(void 0, [_b.sent()]);
                    return [3, 6];
                case 4:
                    err_1 = _b.sent();
                    return [4, getRadioNamesList()];
                case 5:
                    list = _b.sent();
                    errMsg = "Please, enter an index from 0 to " + (list.length - 1) + "\nYou can list all the radio channels using the '-n' option.";
                    (0, helperFunctions_1.raiseError)("INVALID_VALUE", errMsg);
                    return [3, 6];
                case 6: return [2];
            }
        });
    });
}
exports.runRadio = runRadio;
