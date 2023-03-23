const XLSX = require("xlsx");
const fs = require("fs");
const XLSXpath = "./xlsxFile/suivi installation TARENTI.xlsx";
const workbook = XLSX.readFile(XLSXpath);
const { ToDictionary } = require("./FromXlsxToJSON");
const { OneLevelKeys } = require("./OneLevelKeys");
const n = workbook.SheetNames.length;

var array = [];
var arrayOLK = []; //// OLK= one level key
for (i = n - 1; i > -1; i--) {
  let sheet = workbook.SheetNames[i];
  let sheet1 = workbook.Sheets[sheet];

  array.push(ToDictionary(sheet1));
  arrayOLK.push(OneLevelKeys(sheet1));
}

var json = JSON.stringify(array);
fs.writeFile("outputTest.json", json, "utf8", function (err) {
  if (err) {
    console.log("An error occured while writing JSON Object to File.");
    return console.log(err);
  }

  console.log("JSON file has been saved.");
});
var json = JSON.stringify(arrayOLK);
fs.writeFile("outputTestOLK.json", json, "utf8", function (err) {
  if (err) {
    console.log("An error occured while writing JSON Object to File.");
    return console.log(err);
  }

  console.log("JSON file has been saved.");
});
