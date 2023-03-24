const { parse } = require("json2csv");
const fs = require("fs");
const filePath = "./outputTestOLK.json";

////// data of json /////
const jsonData = fs.readFileSync(filePath);
const data = JSON.parse(jsonData);
console.log(data);
const csv = parse(data);

console.log(csv);
fs.writeFileSync("TEST2.csv", csv, (err) => {
  if (err) console.log(err);
});
