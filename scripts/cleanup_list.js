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
var url = require('url');
var fs = require('fs');
var execSync = require('child_process').execSync;
var Readable = require('stream').Readable;
var finished = require('stream/promises').finished;
// enum PaperSize { A4, A5, Personal, Pocket };
// load the json file & parse it
var data = require("../../data/philofaxy.json");
// const jsonData = JSON.parse(data);
// console.log(jsonData);
// save a cleanded up version
// var fs = require("fs");
// fs.writeFile("output.json", JSON.stringify(jsonData), function(err:any) {
//   console.log(err);
// });
// for each url, remove the host and the path
// console.log(data);
// downloadFile - download the requested file & save to disk
function downloadFile(sourceUrl, targetFilename) {
    return __awaiter(this, void 0, void 0, function () {
        var response, stream;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("  downloading: ", sourceUrl);
                    // see if file already exists
                    if (fs.existsSync(targetFilename)) {
                        // console.log('  have file already');
                        return [2 /*return*/, true];
                    }
                    return [4 /*yield*/, fetch(sourceUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    stream = fs.createWriteStream(targetFilename);
                    return [4 /*yield*/, finished(Readable.fromWeb(response.body).pipe(stream))];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    console.log("  error downloading file: ", response.statusText);
                    return [2 /*return*/, false];
                case 4: 
                // console.log("  downloaded file");
                // handle grumpy servers
                return [4 /*yield*/, execSync('sleep 4')];
                case 5:
                    // console.log("  downloaded file");
                    // handle grumpy servers
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
function generateLocalFilename(desiredYear, name, paperSize, sourceUrl, modifier) {
    if (modifier === void 0) { modifier = ""; }
    // generate path & filename to save to
    var parsedUrl = url.parse(sourceUrl);
    // get filename and extension
    var remoteFilename = parsedUrl.pathname.split('/').pop();
    var filenameExt = remoteFilename.split('.').pop();
    var filename = name.replace(/ /g, "_");
    var localFilename = "";
    // build local filename
    localFilename = "./data/" + paperSize + "/" + filename + modifier + "." + filenameExt;
    // see if actually should be in a subdirectory
    if (sourceUrl.search("2023") > 0) {
        sourceUrl = sourceUrl.replace(/2023/g, desiredYear);
        localFilename = "./data/" + paperSize + "/" + desiredYear.toString() + "/" + filename + modifier + "." + filenameExt;
    }
    //if template, template
    if (modifier === "_template") {
        localFilename = "./data/" + paperSize + "/templates/" + filename + modifier + "." + filenameExt;
    }
    return localFilename;
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var desiredYear, _a, _b, _c, _i, entry, name_1, paperSize, sourceUrl, localFilename;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    desiredYear = "2024";
                    _a = data;
                    _b = [];
                    for (_c in _a)
                        _b.push(_c);
                    _i = 0;
                    _d.label = 1;
                case 1:
                    if (!(_i < _b.length)) return [3 /*break*/, 13];
                    _c = _b[_i];
                    if (!(_c in _a)) return [3 /*break*/, 12];
                    entry = _c;
                    name_1 = data[entry]['name'];
                    paperSize = data[entry]['pageSize'];
                    console.log('getting files for: ', desiredYear, " - ", name_1, " (", paperSize, ")");
                    sourceUrl = data[entry]['preview'];
                    sourceUrl = sourceUrl.replace(/2023/g, desiredYear);
                    return [4 /*yield*/, generateLocalFilename(desiredYear, name_1, paperSize, sourceUrl)];
                case 2:
                    localFilename = _d.sent();
                    return [4 /*yield*/, downloadFile(sourceUrl, localFilename)];
                case 3:
                    _d.sent();
                    sourceUrl = data[entry]['inserts-pdf'];
                    return [4 /*yield*/, generateLocalFilename(desiredYear, name_1, paperSize, sourceUrl)];
                case 4:
                    localFilename = _d.sent();
                    return [4 /*yield*/, downloadFile(sourceUrl, localFilename)];
                case 5:
                    _d.sent();
                    sourceUrl = data[entry]['inserts-word'];
                    return [4 /*yield*/, generateLocalFilename(desiredYear, name_1, paperSize, sourceUrl)];
                case 6:
                    localFilename = _d.sent();
                    return [4 /*yield*/, downloadFile(sourceUrl, localFilename)];
                case 7:
                    _d.sent();
                    sourceUrl = data[entry]['template-word'];
                    return [4 /*yield*/, generateLocalFilename(desiredYear, name_1, paperSize, sourceUrl, "_template")];
                case 8:
                    localFilename = _d.sent();
                    return [4 /*yield*/, downloadFile(sourceUrl, localFilename)];
                case 9:
                    _d.sent();
                    sourceUrl = data[entry]['template-excel'];
                    return [4 /*yield*/, generateLocalFilename(desiredYear, name_1, paperSize, sourceUrl, "_template")];
                case 10:
                    localFilename = _d.sent();
                    return [4 /*yield*/, downloadFile(sourceUrl, localFilename)];
                case 11:
                    _d.sent();
                    _d.label = 12;
                case 12:
                    _i++;
                    return [3 /*break*/, 1];
                case 13: return [2 /*return*/];
            }
        });
    });
}
main();
