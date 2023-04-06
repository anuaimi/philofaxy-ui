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
for (var entry in data) {
    console.log(data[entry]['name'], ": ", data[entry]['pageSize']);
}
