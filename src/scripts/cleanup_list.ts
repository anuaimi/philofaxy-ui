const url = require('url');
const fs = require('fs');

const {execSync} = require('child_process');
const { Readable } = require('stream');
const { finished } = require('stream/promises');

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

 // downloadFile - download the requested file & save to disk
async function downloadFile( sourceUrl: string, targetFilename: string): Promise<boolean> {

  console.log("  downloading: ", sourceUrl);

  // see if file already exists
  if (fs.existsSync(targetFilename)) {
    // console.log('  have file already');
    return true;
  }

  // need to download the file
  const response = await fetch(sourceUrl);
  if (response.ok) {
    const stream = fs.createWriteStream(targetFilename);
    await finished(Readable.fromWeb(response.body).pipe(stream));  
  } else {
    console.log("  error downloading file: ",response.statusText);
    return false;
  }

  // console.log("  downloaded file");

  // handle grumpy servers
  await execSync('sleep 4');

  return true;
}

function generateLocalFilename( desiredYear: string, name: string, paperSize: string, sourceUrl: string, modifier: string = "") : string {

  // generate path & filename to save to
    let parsedUrl = url.parse(sourceUrl)
  
    // get filename and extension
    const remoteFilename = parsedUrl.pathname.split('/').pop();
    const filenameExt = remoteFilename.split('.').pop();
    const filename = name.replace(/ /g, "_");
  
    let localFilename:string = "";

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

async function main() {

  // site seems to have files for 2023, 2024 and 2025
  const desiredYear = "2025";
  
  // for each planner template
  for (var entry in data) {

    const name = data[entry]['name'];
    const paperSize = data[entry]['pageSize'];
    console.log('getting files for: ', desiredYear, " - ", name, " (", paperSize, ")");

    let sourceUrl = data[entry]['preview'];
    sourceUrl = sourceUrl.replace(/2023/g, desiredYear);

    let localFilename = await generateLocalFilename( desiredYear, name, paperSize, sourceUrl);
    await downloadFile( sourceUrl, localFilename);

    sourceUrl = data[entry]['inserts-pdf'];
    localFilename = await generateLocalFilename( desiredYear, name, paperSize, sourceUrl);
    await downloadFile( sourceUrl, localFilename);

    sourceUrl = data[entry]['inserts-word'];
    localFilename = await generateLocalFilename( desiredYear, name, paperSize, sourceUrl);
    await downloadFile( sourceUrl, localFilename);

    sourceUrl = data[entry]['template-word'];
    localFilename = await generateLocalFilename( desiredYear, name, paperSize, sourceUrl, "_template");
    await downloadFile( sourceUrl, localFilename);

    sourceUrl = data[entry]['template-excel'];
    localFilename = await generateLocalFilename( desiredYear, name, paperSize, sourceUrl, "_template");
    await downloadFile( sourceUrl, localFilename);

    // don't want to get blocked by the server
    // await execSync('sleep 5');
  }

}

main();
