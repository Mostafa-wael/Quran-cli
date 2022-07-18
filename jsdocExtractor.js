var jsdocExtractor = require("jsdoc-extractor");
var readFileSync = require("fs").readFileSync;
var buf = readFileSync("./quran-cli.js");
for (var _i = 0, _a = jsdocExtractor(buf); _i < _a.length; _i++) {
    var _b = _a[_i], doc = _b[0], start = _b[1], end = _b[2];
    console.log("Found a new JSDoc block between " + start + " and " + end);
    console.log(doc.toString());
    console.log("-------------");
}
