const {
  DeleteLastChar,
  DeleteSpecialChars,
  DeleteUnities,
} = require("./DeleteFunction");
const OneLevelKeys = (SheetPath) => {
  var object = {};

  object[
    DeleteSpecialChars(
      DeleteLastChar(SheetPath["C2"].w) + " " + SheetPath["B5"].w
    )
  ] = SheetPath["D2"].w + "   " + SheetPath["B7"].w;
  object[DeleteSpecialChars(DeleteLastChar(SheetPath["H2"].w))] =
    SheetPath["I2"].w;

  /////////////////// Digesteur 1//////////////////
  if (SheetPath["C7"] == undefined) {
    object["Digesteur1_Etat"] = 0;
  } else {
    object["Digesteur1_Etat"] = SheetPath["C7"].w;
  }

  object[
    "Digisteur1" +
      DeleteSpecialChars(SheetPath["D5"].w + " " + SheetPath["D6"].w)
  ] = SheetPath["D7"].w;
  object[
    "Digisteur1" +
      DeleteSpecialChars(SheetPath["D5"].w + " " + SheetPath["E6"].w)
  ] = 0;
  object[
    "Digisteur1" +
      DeleteSpecialChars(SheetPath["F5"].w + " " + SheetPath["F6"].w)
  ] = DeleteUnities(SheetPath["F7"].w);
  object[
    "Digisteur1" +
      DeleteSpecialChars(SheetPath["F5"].w + " " + SheetPath["G6"].w)
  ] = DeleteUnities(SheetPath["G7"].w);
  object["Digisteur1" + DeleteSpecialChars(SheetPath["H5"].w)] = DeleteUnities(
    SheetPath["H7"].w
  );
  object[
    "Digisteur1" +
      DeleteSpecialChars(SheetPath["I5"].w) +
      DeleteSpecialChars(SheetPath["I6"].w)
  ] = DeleteUnities(SheetPath["I7"].w);
  object[
    "Digisteur1" +
      DeleteSpecialChars(SheetPath["I5"].w) +
      DeleteSpecialChars(SheetPath["J6"].w)
  ] = DeleteUnities(SheetPath["J7"].w);
  object[
    "Digisteur1" +
      DeleteSpecialChars(SheetPath["I5"].w) +
      DeleteSpecialChars(SheetPath["K6"].w)
  ] = DeleteUnities(SheetPath["K7"].w);

  object["Digisteur1" + DeleteSpecialChars(SheetPath["L5"].w)] = DeleteUnities(
    SheetPath["L7"].w
  );
  object["Digisteur1" + DeleteSpecialChars(SheetPath["M5"].w)] = DeleteUnities(
    SheetPath["M7"].w
  );
  object["Digisteur1" + DeleteSpecialChars(SheetPath["N5"].w + "%")] =
    DeleteUnities(SheetPath["N7"].w);
  object[
    "Digisteur1" +
      DeleteSpecialChars(SheetPath["O5"].w + " " + SheetPath["O6"].w)
  ] = DeleteUnities(SheetPath["O7"].w);
  object[
    "Digisteur1" +
      DeleteSpecialChars(SheetPath["O5"].w + " " + SheetPath["P6"].w)
  ] = DeleteUnities(SheetPath["P7"].w);

  object[
    "Digisteur1" + DeleteSpecialChars(SheetPath["Q5"].w + SheetPath["Q6"].w)
  ] = DeleteUnities(SheetPath["Q7"].w);
  object[
    "Digisteur1" + DeleteSpecialChars(SheetPath["Q5"].w + SheetPath["R6"].w)
  ] = DeleteUnities(SheetPath["R7"].w);

  if (SheetPath["S7"].w !== undefined) {
    object["Digisteur1" + DeleteSpecialChars(SheetPath["S5"].w)] = 1;
  } else {
    object["Digisteur1" + DeleteSpecialChars(SheetPath["S5"].w)] = 0;
  }

  if (SheetPath["U7"].w !== undefined) {
    object["Digisteur1" + DeleteSpecialChars(SheetPath["U5"].w)] = 1;
  } else {
    object["Digisteur1" + DeleteSpecialChars(SheetPath["U5"].w)] = 0;
  }

  if (SheetPath["W7"].w !== undefined) {
    object["Digisteur1" + DeleteSpecialChars(SheetPath["W5"].w)] = 1;
  } else {
    object["Digisteur1" + DeleteSpecialChars(SheetPath["W5"].w)] = 0;
  }
  object["Digisteur1" + DeleteSpecialChars(SheetPath["Y5"].w)] = DeleteUnities(
    SheetPath["Y7"].w
  );
  object["Digisteur1" + DeleteSpecialChars(SheetPath["Z5"].w)] = DeleteUnities(
    SheetPath["Z7"].w
  );
  object["Digisteur1" + DeleteSpecialChars(SheetPath["AA5"].w)] = DeleteUnities(
    SheetPath["AA7"].w
  );
  object["Digisteur1" + DeleteSpecialChars(SheetPath["AB5"].w)] = DeleteUnities(
    SheetPath["AB7"].w
  );
  object["Digisteur1" + DeleteSpecialChars(SheetPath["AC5"].w)] = DeleteUnities(
    SheetPath["AC7"].w
  );
  if (SheetPath["AD7"] == undefined) {
    object["Digisteur1" + DeleteSpecialChars(SheetPath["AD5"].w)] = 0;
  } else {
    object["Digisteur1" + DeleteSpecialChars(SheetPath["AD5"].w)] =
      DeleteUnities(SheetPath["AD7"].w);
  }

  object["Digisteur1" + DeleteSpecialChars(SheetPath["AE5"].w)] = DeleteUnities(
    SheetPath["AE7"].w
  );
  object[
    "Digisteur1" +
      DeleteSpecialChars(SheetPath["AF5"].w + " " + SheetPath["AF6"].w)
  ] = DeleteUnities(SheetPath["AF7"].w);
  object[
    "Digisteur1" +
      DeleteSpecialChars(SheetPath["AF5"].w + " " + SheetPath["AG6"].w)
  ] = DeleteUnities(SheetPath["AG7"].w);

  if (SheetPath["AH7"] == undefined) {
    object["Digisteur1" + DeleteSpecialChars(SheetPath["AH5"].w)] = 0;
  } else {
    object["Digisteur1" + DeleteSpecialChars(SheetPath["AH5"].w)] =
      DeleteUnities(SheetPath["AH7"].w);
  }

  object[
    "Digisteur1" +
      DeleteSpecialChars(SheetPath["AI5"].w + " " + SheetPath["AI6"].w)
  ] = DeleteUnities(SheetPath["AI7"].w);
  object[
    "Digisteur1" +
      DeleteSpecialChars(SheetPath["AJ5"].w + " " + SheetPath["AJ6"].w)
  ] = DeleteUnities(SheetPath["AJ7"].w);
  object[
    "Digisteur1" +
      DeleteSpecialChars(SheetPath["AK5"].w + " " + SheetPath["AK6"].w)
  ] = DeleteUnities(SheetPath["AK7"].w);
  object[
    "Digisteur1" +
      DeleteSpecialChars(SheetPath["AL5"].w + " " + SheetPath["AL6"].w)
  ] = DeleteUnities(SheetPath["AL7"].w);
  object[
    "Digisteur1" +
      DeleteSpecialChars(SheetPath["AM5"].w + " " + SheetPath["AM6"].w)
  ] = DeleteUnities(SheetPath["AM7"].w);
  object[
    "Digisteur1" +
      DeleteSpecialChars(SheetPath["AN5"].w + " " + SheetPath["AN6"].w)
  ] = DeleteUnities(SheetPath["AN7"].w);

  /////////////////// Digesteur 2//////////////////

  object["Digesteur2_Etat"] = SheetPath["C9"].w;
  object[
    "Digisteur2" +
      DeleteSpecialChars(SheetPath["D5"].w + " " + SheetPath["D6"].w)
  ] = SheetPath["D7"].w;
  object[
    "Digisteur2" +
      DeleteSpecialChars(SheetPath["D5"].w + " " + SheetPath["E6"].w)
  ] = 0;
  object[
    "Digisteur2" +
      DeleteSpecialChars(SheetPath["F5"].w + " " + SheetPath["F6"].w)
  ] = DeleteUnities(SheetPath["F7"].w);
  object[
    "Digisteur2" + DeleteSpecialChars(SheetPath["F5"].w + SheetPath["G6"].w)
  ] = DeleteUnities(SheetPath["G7"].w);
  object["Digisteur2" + DeleteSpecialChars(SheetPath["H5"].w)] = DeleteUnities(
    SheetPath["H7"].w
  );
  object[
    "Digisteur2" +
      DeleteSpecialChars(SheetPath["I5"].w) +
      DeleteSpecialChars(SheetPath["I6"].w)
  ] = DeleteUnities(SheetPath["I7"].w);
  object[
    "Digisteur2" +
      DeleteSpecialChars(SheetPath["I5"].w) +
      DeleteSpecialChars(SheetPath["J6"].w)
  ] = DeleteUnities(SheetPath["J7"].w);
  object[
    "Digisteur2" +
      DeleteSpecialChars(SheetPath["I5"].w) +
      DeleteSpecialChars(SheetPath["K6"].w)
  ] = DeleteUnities(SheetPath["K7"].w);

  object["Digisteur2" + DeleteSpecialChars(SheetPath["L5"].w)] = DeleteUnities(
    SheetPath["L7"].w
  );
  object["Digisteur2" + DeleteSpecialChars(SheetPath["M5"].w)] = DeleteUnities(
    SheetPath["M7"].w
  );
  object["Digisteur2" + DeleteSpecialChars(SheetPath["N5"].w + "%")] =
    DeleteUnities(SheetPath["N7"].w);

  object[
    "Digisteur2" +
      DeleteSpecialChars(SheetPath["O5"].w + " " + SheetPath["O6"].w)
  ] = DeleteUnities(SheetPath["O7"].w);
  object[
    "Digisteur2" +
      DeleteSpecialChars(SheetPath["O5"].w + " " + SheetPath["P6"].w)
  ] = DeleteUnities(SheetPath["P7"].w);

  object[
    "Digisteur2" +
      DeleteSpecialChars(SheetPath["Q5"].w + " " + SheetPath["Q6"].w)
  ] = DeleteUnities(SheetPath["Q7"].w);
  object[
    "Digisteur2" +
      DeleteSpecialChars(SheetPath["Q5"].w + " " + SheetPath["R6"].w)
  ] = DeleteUnities(SheetPath["R7"].w);

  if (SheetPath["S7"].w !== undefined) {
    object["Digisteur2" + DeleteSpecialChars(SheetPath["S5"].w)] = 1;
  } else {
    object["Digisteur2" + DeleteSpecialChars(SheetPath["S5"].w)] = 0;
  }

  if (SheetPath["U7"].w !== undefined) {
    object["Digisteur2" + DeleteSpecialChars(SheetPath["U5"].w)] = 1;
  } else {
    object["Digisteur2" + DeleteSpecialChars(SheetPath["U5"].w)] = 0;
  }

  if (SheetPath["W7"].w !== undefined) {
    object["Digisteur2" + DeleteSpecialChars(SheetPath["W5"].w)] = 1;
  } else {
    object["Digisteur2" + DeleteSpecialChars(SheetPath["W5"].w)] = 0;
  }
  object["Digisteur2" + DeleteSpecialChars(SheetPath["Y5"].w)] = DeleteUnities(
    SheetPath["Y7"].w
  );
  object["Digisteur2" + DeleteSpecialChars(SheetPath["Z5"].w)] = DeleteUnities(
    SheetPath["Z7"].w
  );
  object["Digisteur2" + DeleteSpecialChars(SheetPath["AA5"].w)] = DeleteUnities(
    SheetPath["AA7"].w
  );
  object["Digisteur2" + DeleteSpecialChars(SheetPath["AB5"].w)] = DeleteUnities(
    SheetPath["AB7"].w
  );

  object["Digisteur2" + DeleteSpecialChars(SheetPath["AC5"].w)] = DeleteUnities(
    SheetPath["AC7"].w
  );
  if (SheetPath["AD7"] == undefined) {
    object["Digisteur2" + DeleteSpecialChars(SheetPath["AD5"].w)] = 0;
  } else {
    object["Digisteur2" + DeleteSpecialChars(SheetPath["AD5"].w)] =
      DeleteUnities(SheetPath["AD7"].w);
  }
  object["Digisteur2" + DeleteSpecialChars(SheetPath["AE5"].w)] = DeleteUnities(
    SheetPath["AE7"].w
  );
  object[
    "Digisteur2" + DeleteSpecialChars(SheetPath["AF5"].w + SheetPath["AF6"].w)
  ] = DeleteUnities(SheetPath["AF7"].w);
  object[
    "Digisteur2" + DeleteSpecialChars(SheetPath["AF5"].w + SheetPath["AG6"].w)
  ] = DeleteUnities(SheetPath["AG7"].w);
  if (SheetPath["AH7"] == undefined) {
    object["Digisteur2" + DeleteSpecialChars(SheetPath["AH5"].w)] = 0;
  } else {
    object["Digisteur2" + DeleteSpecialChars(SheetPath["AH5"].w)] =
      DeleteUnities(SheetPath["AH7"].w);
  }

  object[
    "Digisteur2" +
      DeleteSpecialChars(SheetPath["AI5"].w + " " + SheetPath["AI6"].w)
  ] = DeleteUnities(SheetPath["AI7"].w);
  object[
    "Digisteur2" +
      DeleteSpecialChars(SheetPath["AJ5"].w + " " + SheetPath["AJ6"].w)
  ] = DeleteUnities(SheetPath["AJ7"].w);
  object[
    "Digisteur2" +
      DeleteSpecialChars(SheetPath["AK5"].w + " " + SheetPath["AK6"].w)
  ] = DeleteUnities(SheetPath["AK7"].w);
  object[
    "Digisteur2" +
      DeleteSpecialChars(SheetPath["AL5"].w + " " + SheetPath["AL6"].w)
  ] = DeleteUnities(SheetPath["AL7"].w);
  object[
    "Digisteur2" +
      DeleteSpecialChars(SheetPath["AM5"].w + " " + SheetPath["AM6"].w)
  ] = DeleteUnities(SheetPath["AM7"].w);
  object[
    "Digisteur2" +
      DeleteSpecialChars(SheetPath["AN5"].w + " " + SheetPath["AN6"].w)
  ] = DeleteUnities(SheetPath["AN7"].w);

  /////////////////// PER001//////////////////

  object["PER001_Etat"] = SheetPath["C11"].w;
  object[
    "PER001" + DeleteSpecialChars(SheetPath["D5"].w + " " + SheetPath["D6"].w)
  ] = SheetPath["D7"].w;
  object[
    "PER001" + DeleteSpecialChars(SheetPath["D5"].w + " " + SheetPath["E6"].w)
  ] = 0;
  object[
    "PER001" + DeleteSpecialChars(SheetPath["F5"].w + " " + SheetPath["F6"].w)
  ] = DeleteUnities(SheetPath["F11"].w);
  object[
    "PER001" + DeleteSpecialChars(SheetPath["F5"].w + " " + SheetPath["G6"].w)
  ] = DeleteUnities(SheetPath["G11"].w);
  object["PER001" + DeleteSpecialChars(SheetPath["H5"].w)] = DeleteUnities(
    SheetPath["H7"].w
  );
  object[
    "PER001" +
      DeleteSpecialChars(SheetPath["I5"].w) +
      DeleteSpecialChars(SheetPath["I6"].w)
  ] = DeleteUnities(SheetPath["I11"].w);
  object[
    "PER001" +
      DeleteSpecialChars(SheetPath["I5"].w) +
      DeleteSpecialChars(SheetPath["J6"].w)
  ] = DeleteUnities(SheetPath["J11"].w);
  object[
    "PER001" +
      DeleteSpecialChars(SheetPath["I5"].w) +
      DeleteSpecialChars(SheetPath["K6"].w)
  ] = DeleteUnities(SheetPath["K11"].w);

  object["PER001" + DeleteSpecialChars(SheetPath["L5"].w)] = DeleteUnities(
    SheetPath["L7"].w
  );
  object["PER001" + DeleteSpecialChars(SheetPath["M5"].w)] = DeleteUnities(
    SheetPath["M7"].w
  );
  object["PER001" + DeleteSpecialChars(SheetPath["N5"].w + "%")] =
    DeleteUnities(SheetPath["N7"].w);
  object[
    "PER001" + DeleteSpecialChars(SheetPath["O5"].w + " " + SheetPath["O6"].w)
  ] = DeleteUnities(SheetPath["O7"].w);
  object[
    "PER001" + DeleteSpecialChars(SheetPath["O5"].w + " " + SheetPath["P6"].w)
  ] = DeleteUnities(SheetPath["P7"].w);
  object[
    "PER001" + DeleteSpecialChars(SheetPath["Q5"].w + " " + SheetPath["Q6"].w)
  ] = DeleteUnities(SheetPath["Q7"].w);
  object[
    "PER001" + DeleteSpecialChars(SheetPath["Q5"].w + " " + SheetPath["R6"].w)
  ] = DeleteUnities(SheetPath["R7"].w);

  if (SheetPath["S7"].w !== undefined) {
    object["PER001" + DeleteSpecialChars(SheetPath["S5"].w)] = 1;
  } else {
    object["PER001" + DeleteSpecialChars(SheetPath["S5"].w)] = 0;
  }

  if (SheetPath["U7"].w !== undefined) {
    object["PER001" + DeleteSpecialChars(SheetPath["U5"].w)] = 1;
  } else {
    object["PER001" + DeleteSpecialChars(SheetPath["U5"].w)] = 0;
  }
  if (SheetPath["W7"].w !== undefined) {
    object["PER001" + DeleteSpecialChars(SheetPath["W5"].w)] = 1;
  } else {
    object["PER001" + DeleteSpecialChars(SheetPath["W5"].w)] = 0;
  }
  object["PER001" + DeleteSpecialChars(SheetPath["Y5"].w)] = DeleteUnities(
    SheetPath["Y7"].w
  );
  object["PER001" + DeleteSpecialChars(SheetPath["Z5"].w)] = DeleteUnities(
    SheetPath["Z7"].w
  );
  object["PER001" + DeleteSpecialChars(SheetPath["AA5"].w)] = DeleteUnities(
    SheetPath["AA7"].w
  );
  object["PER001" + DeleteSpecialChars(SheetPath["AB5"].w)] = DeleteUnities(
    SheetPath["AB7"].w
  );

  object["PER001" + DeleteSpecialChars(SheetPath["AC5"].w)] = DeleteUnities(
    SheetPath["AC7"].w
  );
  if (SheetPath["AD7"] == undefined) {
    object["PER001" + DeleteSpecialChars(SheetPath["AD5"].w)] = 0;
  } else {
    object["PER001" + DeleteSpecialChars(SheetPath["AD5"].w)] = DeleteUnities(
      SheetPath["AD7"].w
    );
  }
  object["PER001" + DeleteSpecialChars(SheetPath["AE5"].w)] = DeleteUnities(
    SheetPath["AE7"].w
  );
  object[
    "PER001" + DeleteSpecialChars(SheetPath["AF5"].w + SheetPath["AF6"].w)
  ] = DeleteUnities(SheetPath["AF7"].w);
  object[
    "PER001" + DeleteSpecialChars(SheetPath["AF5"].w + SheetPath["AG6"].w)
  ] = DeleteUnities(SheetPath["AG7"].w);
  if (SheetPath["AH7"] == undefined) {
    object["PER001" + DeleteSpecialChars(SheetPath["AH5"].w)] = 0;
  } else {
    object["PER001" + DeleteSpecialChars(SheetPath["AH5"].w)] = DeleteUnities(
      SheetPath["AH7"].w
    );
  }

  object[
    "PER001" + DeleteSpecialChars(SheetPath["AI5"].w + " " + SheetPath["AI6"].w)
  ] = DeleteUnities(SheetPath["AI7"].w);
  object[
    "PER001" + DeleteSpecialChars(SheetPath["AJ5"].w + " " + SheetPath["AJ6"].w)
  ] = DeleteUnities(SheetPath["AJ7"].w);
  object[
    "PER001" + DeleteSpecialChars(SheetPath["AK5"].w + " " + SheetPath["AK6"].w)
  ] = DeleteUnities(SheetPath["AK7"].w);
  object[
    "PER001" + DeleteSpecialChars(SheetPath["AL5"].w + " " + SheetPath["AL6"].w)
  ] = DeleteUnities(SheetPath["AL7"].w);
  object[
    "PER001" + DeleteSpecialChars(SheetPath["AM5"].w + " " + SheetPath["AM6"].w)
  ] = DeleteUnities(SheetPath["AM7"].w);
  object[
    "PER001" + DeleteSpecialChars(SheetPath["AN5"].w + " " + SheetPath["AN6"].w)
  ] = DeleteUnities(SheetPath["AN7"].w);

  return object;
};
module.exports = {
  OneLevelKeys,
};
