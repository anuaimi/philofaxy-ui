const url = require('url');

// enum PaperSize { A4, A5, Personal, Pocket };

// load the json file & parse it
const data = require("../../data/philofaxy.json");


// const jsonData = JSON.parse(data);
// console.log(jsonData);

// save a cleanded up version
// var fs = require("fs");
// fs.writeFile("output.json", JSON.stringify(jsonData), function(err:any) {
//   console.log(err);
// });

// for each url, remove the host and the path
// console.log(data);

function downloadFile( sourceUrl: string, targetFilename: string): boolean {

  // download the file  - save to disk

  return true;
}

function generateLocalFilename( name: string, paperSize: string, sourceUrl: string, modifier: string = "") : string {

  // generate path & filename to save to
    let parsedUrl = url.parse(sourceUrl)
  
    // get filename and extension
    const remoteFilename = parsedUrl.pathname.split('/').pop();
    const filenameExt = remoteFilename.split('.').pop();
    const filename = name.replace(/ /g, "_");
  
    // build local filename
    const localFilename = "./data/" + paperSize + "/" + filename + modifier + "." + filenameExt;
  
    return localFilename;
}

function main() {

  // for each planner template
  for (var entry in data) {

    const name = data[entry]['name'];
    const paperSize = data[entry]['pageSize'];
    console.log('getting files for: ', name, " (", paperSize, ")");

    let sourceUrl = data[entry]['preview'];
    let localFilename = generateLocalFilename( name, paperSize, sourceUrl);
    downloadFile( sourceUrl, localFilename);

    sourceUrl = data[entry]['inserts-pdf'];
    localFilename = generateLocalFilename( name, paperSize, sourceUrl);
    downloadFile( sourceUrl, localFilename);

    sourceUrl = data[entry]['inserts-word'];
    localFilename = generateLocalFilename( name, paperSize, sourceUrl);
    downloadFile( sourceUrl, localFilename);

    sourceUrl = data[entry]['template-word'];
    localFilename = generateLocalFilename( name, paperSize, sourceUrl, "_template");
    downloadFile( sourceUrl, localFilename);

    sourceUrl = data[entry]['template-excel'];
    localFilename = generateLocalFilename( name, paperSize, sourceUrl, "_template");
    downloadFile( sourceUrl, localFilename);
  }

}

main();
