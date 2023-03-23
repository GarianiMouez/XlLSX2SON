const DeleteLastChar = (str) => {
  let index = str.length - 1; // index du caractère à supprimer
  str = str.substring(0, index); // supprimer le caractère à l'index spécifié
  return str;
};
const DeleteSpecialChars = (str) => {
  let outputStr = str.replace(/[^a-zA-Z0-9% ]/g, "");
  outputStr = outputStr.replace(/\s+/g, "_"); // Replace spaces with underscores
  return outputStr;
};

const DeleteUnities = (str) => {
  if (str === "N.D") {
    str = "0";
  }
  let outStr = str.replace(/[^0-9,.]/g, "");
  outStr = outStr.replace(/[","]/g, ".");

  const y = parseFloat(outStr);
  return y;
};

module.exports = { DeleteSpecialChars, DeleteLastChar, DeleteUnities };
