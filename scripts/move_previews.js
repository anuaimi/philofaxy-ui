var fs = require('fs');
var baseSrcDir = "data/";
var baseDestDir = "public/images/";
function moveImages(srcDir, destDir) {
    // get list of file in source directory
    fs.readdirSync(srcDir).forEach(function (file) {
        // see if its a PNG
        var fileExt = /png/;
        if (file.search(fileExt) > 0) {
            var srcFile = srcDir + '/' + file;
            var destFile = destDir + '/' + file;
            // copy file to destination directory
            fs.copyFile(srcFile, destFile, function (err) {
                if (err)
                    throw err;
            });
        }
    });
    // done
}
function main() {
    var paperSize = "a4-a5";
    moveImages(baseSrcDir + paperSize, baseDestDir + paperSize);
    paperSize = "personal";
    moveImages(baseSrcDir + paperSize, baseDestDir + paperSize);
    paperSize = "pocket";
    moveImages(baseSrcDir + paperSize, baseDestDir + paperSize);
}
main();
