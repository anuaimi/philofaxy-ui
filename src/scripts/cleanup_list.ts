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

  console.log("downloading: ", sourceUrl);

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

async function main() {

  // const sourceUrl = "https://philofaxy.com/inserts/__2020%20revamp/1.1%20day%20per%20page/Picture%201.png";
  // const response = await fetch(sourceUrl);
  // if (response.ok) {
  //   if (response.body === undefined) {
  //     console.log('no stream');
  //   } else {
  //     console.log('ready to get body');
  //     console.log(response.body);
  //     const stream = fs.createWriteStream("./test.png");
  //     await finished(Readable.fromWeb(response.body).pipe(stream));
  //     console.log("file written");
  //   }
  // } else {
  //   console.log(response.statusText);
  // }
  // console.log("==========");

  // for each planner template
  for (var entry in data) {

    const name = data[entry]['name'];
    const paperSize = data[entry]['pageSize'];
    console.log('getting files for: ', name, " (", paperSize, ")");

    let sourceUrl = data[entry]['preview'];
    let localFilename = await generateLocalFilename( name, paperSize, sourceUrl);
    await downloadFile( sourceUrl, localFilename);

    sourceUrl = data[entry]['inserts-pdf'];
    localFilename = await generateLocalFilename( name, paperSize, sourceUrl);
    await downloadFile( sourceUrl, localFilename);

    sourceUrl = data[entry]['inserts-word'];
    localFilename = await generateLocalFilename( name, paperSize, sourceUrl);
    await downloadFile( sourceUrl, localFilename);

    sourceUrl = data[entry]['template-word'];
    localFilename = await generateLocalFilename( name, paperSize, sourceUrl, "_template");
    await downloadFile( sourceUrl, localFilename);

    sourceUrl = data[entry]['template-excel'];
    localFilename = await generateLocalFilename( name, paperSize, sourceUrl, "_template");
    await downloadFile( sourceUrl, localFilename);

    // don't want to get blocked by the server
    // await execSync('sleep 5');
  }

}

main();
