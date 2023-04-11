const fs = require('fs');

const baseSrcDir = "data/";
const baseDestDir = "public/images/";


function moveImages(srcDir, destDir) {

  // get list of file in source directory
  fs.readdirSync(srcDir).forEach((file) => {
 
    // see if its a PNG
    const fileExt = /png/
    if (file.search(fileExt) > 0) {

      const srcFile = srcDir + '/' + file;
      const destFile = destDir + '/' + file;

      // copy file to destination directory
      fs.copyFile(srcFile, destFile, (err) => {
        if (err) throw err;
      });

    }
  });

  // done
}

function main() {

  let paperSize = "a4-a5";
  moveImages(baseSrcDir+paperSize, baseDestDir+paperSize);

  paperSize = "personal";
  moveImages(baseSrcDir+paperSize, baseDestDir+paperSize);

  paperSize = "pocket";
  moveImages(baseSrcDir+paperSize, baseDestDir+paperSize);
}

main();
