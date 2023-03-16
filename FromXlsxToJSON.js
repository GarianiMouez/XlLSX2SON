const {
  DeleteLastChar,
  DeleteSpecialChars,
  DeleteUnities,
} = require("./DeleteFunction");
const ToDictionary = (SheetPath) => {
  var object = {};

  var Dig1 = {};
  var Dig2 = {};
  var PER001 = {};
  var ValeurProcess = {};
  var ValeurMoteur = {};
  var CompositionDuBiogaz = {};
  var CompositionDuBiogaz2 = {};

  object[DeleteSpecialChars(DeleteLastChar(SheetPath["C2"].w))] =
    SheetPath["D2"].w;
  object[DeleteSpecialChars(DeleteLastChar(SheetPath["H2"].w))] =
    SheetPath["I2"].w;
  object[DeleteSpecialChars(SheetPath["B5"].w)] = SheetPath["B7"].w;

  ////////***********************************  Valeur Process *******************************/////////////

  /////////Composition du Biogaz//////
  CompositionDuBiogaz[DeleteSpecialChars(SheetPath["I6"].w)] = DeleteUnities(
    SheetPath["I7"].w
  );
  CompositionDuBiogaz[DeleteSpecialChars(SheetPath["J6"].w)] = DeleteUnities(
    SheetPath["J7"].w
  );
  CompositionDuBiogaz[DeleteSpecialChars(SheetPath["K6"].w)] = DeleteUnities(
    SheetPath["K7"].w
  );

  Object["Nombre Valeur Process"] = 3;
  ///////////§Digesteur 1////////////////
  if (SheetPath["C7"] == undefined) {
    Dig1[SheetPath["Etat"].w] = 0;
  } else {
    Dig1["Etat"] = SheetPath["C7"].w;
  }

  Dig1[DeleteSpecialChars(SheetPath["D5"].w + " " + SheetPath["D6"].w)] =
    SheetPath["D7"].w;
  Dig1[DeleteSpecialChars(SheetPath["D5"].w + " " + SheetPath["E6"].w)] = 0;
  Dig1[DeleteSpecialChars(SheetPath["F5"].w + " " + SheetPath["F6"].w)] =
    DeleteUnities(SheetPath["F7"].w);
  Dig1[DeleteSpecialChars(SheetPath["F5"].w + " " + SheetPath["G6"].w)] =
    DeleteUnities(SheetPath["G7"].w);
  Dig1[DeleteSpecialChars(SheetPath["H5"].w)] = DeleteUnities(
    SheetPath["H7"].w
  );
  Dig1[DeleteSpecialChars(SheetPath["I5"].w)] = CompositionDuBiogaz;
  Dig1[DeleteSpecialChars(SheetPath["L5"].w)] = DeleteUnities(
    SheetPath["L7"].w
  );
  Dig1[DeleteSpecialChars(SheetPath["M5"].w)] = DeleteUnities(
    SheetPath["M7"].w
  );
  Dig1[DeleteSpecialChars(SheetPath["N5"].w + "%")] = DeleteUnities(
    SheetPath["N7"].w
  );
  Dig1[DeleteSpecialChars(SheetPath["O5"].w + " " + SheetPath["O6"].w)] =
    DeleteUnities(SheetPath["O7"].w);
  Dig1[DeleteSpecialChars(SheetPath["O5"].w + " " + SheetPath["P6"].w)] =
    DeleteUnities(SheetPath["P7"].w);

  Dig1[DeleteSpecialChars(SheetPath["Q5"].w + SheetPath["Q6"].w)] =
    DeleteUnities(SheetPath["Q7"].w);
  Dig1[DeleteSpecialChars(SheetPath["Q5"].w + SheetPath["R6"].w)] =
    DeleteUnities(SheetPath["R7"].w);

  if (SheetPath["S7"].w !== undefined) {
    Dig1[DeleteSpecialChars(SheetPath["S5"].w)] = 1;
  } else {
    Dig1[DeleteSpecialChars(SheetPath["S5"].w)] = 0;
  }

  if (SheetPath["U7"].w !== undefined) {
    Dig1[DeleteSpecialChars(SheetPath["U5"].w)] = 1;
  } else {
    Dig1[DeleteSpecialChars(SheetPath["U5"].w)] = 0;
  }

  if (SheetPath["W7"].w !== undefined) {
    Dig1[DeleteSpecialChars(SheetPath["W5"].w)] = 1;
  } else {
    Dig1[DeleteSpecialChars(SheetPath["W5"].w)] = 0;
  }
  Dig1[DeleteSpecialChars(SheetPath["Y5"].w)] = DeleteUnities(
    SheetPath["Y7"].w
  );
  Dig1[DeleteSpecialChars(SheetPath["Z5"].w)] = DeleteUnities(
    SheetPath["Z7"].w
  );
  Dig1[DeleteSpecialChars(SheetPath["AA5"].w)] = DeleteUnities(
    SheetPath["AA7"].w
  );
  Dig1[DeleteSpecialChars(SheetPath["AB5"].w)] = DeleteUnities(
    SheetPath["AB7"].w
  );

  ///////////Digesteur 2////////////////
  Dig2["Etat"] = SheetPath["C9"].w;
  Dig2[DeleteSpecialChars(SheetPath["D5"].w + " " + SheetPath["D6"].w)] =
    SheetPath["D7"].w;
  Dig2[DeleteSpecialChars(SheetPath["D5"].w + " " + SheetPath["E6"].w)] = 0;
  Dig2[DeleteSpecialChars(SheetPath["F5"].w + " " + SheetPath["F6"].w)] =
    DeleteUnities(SheetPath["F7"].w);
  Dig2[DeleteSpecialChars(SheetPath["F5"].w + SheetPath["G6"].w)] =
    DeleteUnities(SheetPath["G7"].w);
  Dig2[DeleteSpecialChars(SheetPath["H5"].w)] = DeleteUnities(
    SheetPath["H7"].w
  );
  Dig2[DeleteSpecialChars(SheetPath["I5"].w)] = CompositionDuBiogaz;
  Dig2[DeleteSpecialChars(SheetPath["L5"].w)] = DeleteUnities(
    SheetPath["L7"].w
  );
  Dig2[DeleteSpecialChars(SheetPath["M5"].w)] = DeleteUnities(
    SheetPath["M7"].w
  );
  Dig2[DeleteSpecialChars(SheetPath["N5"].w + "%")] = DeleteUnities(
    SheetPath["N7"].w
  );

  Dig2[DeleteSpecialChars(SheetPath["O5"].w + " " + SheetPath["O6"].w)] =
    DeleteUnities(SheetPath["O7"].w);
  Dig2[DeleteSpecialChars(SheetPath["O5"].w + " " + SheetPath["P6"].w)] =
    DeleteUnities(SheetPath["P7"].w);

  Dig2[DeleteSpecialChars(SheetPath["Q5"].w + " " + SheetPath["Q6"].w)] =
    DeleteUnities(SheetPath["Q7"].w);
  Dig2[DeleteSpecialChars(SheetPath["Q5"].w + " " + SheetPath["R6"].w)] =
    DeleteUnities(SheetPath["R7"].w);

  if (SheetPath["S7"].w !== undefined) {
    Dig2[DeleteSpecialChars(SheetPath["S5"].w)] = 1;
  } else {
    Dig2[DeleteSpecialChars(SheetPath["S5"].w)] = 0;
  }

  if (SheetPath["U7"].w !== undefined) {
    Dig2[DeleteSpecialChars(SheetPath["U5"].w)] = 1;
  } else {
    Dig2[DeleteSpecialChars(SheetPath["U5"].w)] = 0;
  }

  if (SheetPath["W7"].w !== undefined) {
    Dig2[DeleteSpecialChars(SheetPath["W5"].w)] = 1;
  } else {
    Dig2[DeleteSpecialChars(SheetPath["W5"].w)] = 0;
  }
  Dig2[DeleteSpecialChars(SheetPath["Y5"].w)] = DeleteUnities(
    SheetPath["Y7"].w
  );
  Dig2[DeleteSpecialChars(SheetPath["Z5"].w)] = DeleteUnities(
    SheetPath["Z7"].w
  );
  Dig2[DeleteSpecialChars(SheetPath["AA5"].w)] = DeleteUnities(
    SheetPath["AA7"].w
  );
  Dig2[DeleteSpecialChars(SheetPath["AB5"].w)] = DeleteUnities(
    SheetPath["AB7"].w
  );
  ///////////PER001////////////////
  CompositionDuBiogaz2[DeleteSpecialChars(SheetPath["I6"].w)] =
    SheetPath["I11"].w;
  CompositionDuBiogaz2[DeleteSpecialChars(SheetPath["J6"].w)] =
    SheetPath["J11"].w;
  CompositionDuBiogaz2[DeleteSpecialChars(SheetPath["K6"].w)] =
    SheetPath["K11"].w;

  PER001["Etat"] = SheetPath["C11"].w;
  PER001[DeleteSpecialChars(SheetPath["D5"].w + " " + SheetPath["D6"].w)] =
    SheetPath["D7"].w;
  PER001[DeleteSpecialChars(SheetPath["D5"].w + " " + SheetPath["E6"].w)] = 0;
  PER001[DeleteSpecialChars(SheetPath["F5"].w + " " + SheetPath["F6"].w)] =
    SheetPath["F11"].w;
  PER001[DeleteSpecialChars(SheetPath["F5"].w + " " + SheetPath["G6"].w)] =
    SheetPath["G11"].w;
  PER001[DeleteSpecialChars(SheetPath["H5"].w)] = DeleteUnities(
    SheetPath["H7"].w
  );
  PER001[DeleteSpecialChars(SheetPath["I5"].w)] = CompositionDuBiogaz2;
  PER001[DeleteSpecialChars(SheetPath["L5"].w)] = DeleteUnities(
    SheetPath["L7"].w
  );
  PER001[DeleteSpecialChars(SheetPath["M5"].w)] = DeleteUnities(
    SheetPath["M7"].w
  );
  PER001[DeleteSpecialChars(SheetPath["N5"].w + "%")] = DeleteUnities(
    SheetPath["N7"].w
  );
  PER001[DeleteSpecialChars(SheetPath["O5"].w + " " + SheetPath["O6"].w)] =
    DeleteUnities(SheetPath["O7"].w);
  PER001[DeleteSpecialChars(SheetPath["O5"].w + " " + SheetPath["P6"].w)] =
    DeleteUnities(SheetPath["P7"].w);
  PER001[DeleteSpecialChars(SheetPath["Q5"].w + " " + SheetPath["Q6"].w)] =
    DeleteUnities(SheetPath["Q7"].w);
  PER001[DeleteSpecialChars(SheetPath["Q5"].w + " " + SheetPath["R6"].w)] =
    DeleteUnities(SheetPath["R7"].w);

  if (SheetPath["S7"].w !== undefined) {
    PER001[DeleteSpecialChars(SheetPath["S5"].w)] = 1;
  } else {
    PER001[DeleteSpecialChars(SheetPath["S5"].w)] = 0;
  }

  if (SheetPath["U7"].w !== undefined) {
    PER001[DeleteSpecialChars(SheetPath["U5"].w)] = 1;
  } else {
    PER001[DeleteSpecialChars(SheetPath["U5"].w)] = 0;
  }
  if (SheetPath["W7"].w !== undefined) {
    PER001[DeleteSpecialChars(SheetPath["W5"].w)] = 1;
  } else {
    PER001[DeleteSpecialChars(SheetPath["W5"].w)] = 0;
  }
  PER001[DeleteSpecialChars(SheetPath["Y5"].w)] = DeleteUnities(
    SheetPath["Y7"].w
  );
  PER001[DeleteSpecialChars(SheetPath["Z5"].w)] = DeleteUnities(
    SheetPath["Z7"].w
  );
  PER001[DeleteSpecialChars(SheetPath["AA5"].w)] = DeleteUnities(
    SheetPath["AA7"].w
  );
  PER001[DeleteSpecialChars(SheetPath["AB5"].w)] = DeleteUnities(
    SheetPath["AB7"].w
  );
  ///////////PER001////////////////

  ValeurProcess["Digisteur1"] = Dig1;
  ValeurProcess["Digisteur2"] = Dig2;
  ValeurProcess["PER_001"] = PER001;
  object["Valeur Process "] = ValeurProcess;
  ////////***********************************  Valeur Process *******************************/////////////

  ////////***********************************  Valeur Moteur *******************************/////////////
  Dig1 = {};
  Dig2 = {};
  PER001 = {};

  /////////////////Digisteur 1//////////////////
  Dig1[DeleteSpecialChars(SheetPath["AC5"].w)] = DeleteUnities(
    SheetPath["AC7"].w
  );
  if (SheetPath["AD7"] == undefined) {
    Dig1[DeleteSpecialChars(SheetPath["AD5"].w)] = 0;
  } else {
    Dig1[DeleteSpecialChars(SheetPath["AD5"].w)] = DeleteUnities(
      SheetPath["AD7"].w
    );
  }

  Dig1[DeleteSpecialChars(SheetPath["AE5"].w)] = SheetPath["AE7"].w;
  Dig1[DeleteSpecialChars(SheetPath["AF5"].w + " " + SheetPath["AF6"].w)] =
    DeleteUnities(SheetPath["AF7"].w);
  Dig1[DeleteSpecialChars(SheetPath["AF5"].w + " " + SheetPath["AG6"].w)] =
    DeleteUnities(SheetPath["AG7"].w);

  if (SheetPath["AH7"] == undefined) {
    Dig1[DeleteSpecialChars(SheetPath["AH5"].w)] = 0;
  } else {
    Dig1[DeleteSpecialChars(SheetPath["AH5"].w)] = DeleteUnities(
      SheetPath["AH7"].w
    );
  }

  Dig1[DeleteSpecialChars(SheetPath["AI5"].w + " " + SheetPath["AI6"].w)] =
    SheetPath["AI7"].w;
  Dig1[DeleteSpecialChars(SheetPath["AJ5"].w + " " + SheetPath["AJ6"].w)] =
    SheetPath["AJ7"].w;
  Dig1[DeleteSpecialChars(SheetPath["AK5"].w + " " + SheetPath["AK6"].w)] =
    SheetPath["AK7"].w;
  Dig1[DeleteSpecialChars(SheetPath["AL5"].w + " " + SheetPath["AL6"].w)] =
    DeleteUnities(SheetPath["AL7"].w);
  Dig1[DeleteSpecialChars(SheetPath["AM5"].w + " " + SheetPath["AM6"].w)] =
    DeleteUnities(SheetPath["AM7"].w);
  Dig1[DeleteSpecialChars(SheetPath["AN5"].w + " " + SheetPath["AN6"].w)] =
    DeleteUnities(SheetPath["AN7"].w);
  /////////////////Digisteur 2//////////////////
  Dig2[DeleteSpecialChars(SheetPath["AC5"].w)] = DeleteUnities(
    SheetPath["AC7"].w
  );
  if (SheetPath["AD7"] == undefined) {
    Dig2[DeleteSpecialChars(SheetPath["AD5"].w)] = 0;
  } else {
    Dig2[DeleteSpecialChars(SheetPath["AD5"].w)] = DeleteUnities(
      SheetPath["AD7"].w
    );
  }
  Dig2[DeleteSpecialChars(SheetPath["AE5"].w)] = SheetPath["AE7"].w;
  Dig2[DeleteSpecialChars(SheetPath["AF5"].w + SheetPath["AF6"].w)] =
    DeleteUnities(SheetPath["AF7"].w);
  Dig2[DeleteSpecialChars(SheetPath["AF5"].w + SheetPath["AG6"].w)] =
    DeleteUnities(SheetPath["AG7"].w);
  if (SheetPath["AH7"] == undefined) {
    Dig2[DeleteSpecialChars(SheetPath["AH5"].w)] = 0;
  } else {
    Dig2[DeleteSpecialChars(SheetPath["AH5"].w)] = DeleteUnities(
      SheetPath["AH7"].w
    );
  }

  Dig2[DeleteSpecialChars(SheetPath["AI5"].w + " " + SheetPath["AI6"].w)] =
    SheetPath["AI7"].w;
  Dig2[DeleteSpecialChars(SheetPath["AJ5"].w + " " + SheetPath["AJ6"].w)] =
    SheetPath["AJ7"].w;
  Dig2[DeleteSpecialChars(SheetPath["AK5"].w + " " + SheetPath["AK6"].w)] =
    SheetPath["AK7"].w;
  Dig2[DeleteSpecialChars(SheetPath["AL5"].w + " " + SheetPath["AL6"].w)] =
    DeleteUnities(SheetPath["AL7"].w);
  Dig2[DeleteSpecialChars(SheetPath["AM5"].w + " " + SheetPath["AM6"].w)] =
    DeleteUnities(SheetPath["AM7"].w);
  Dig2[DeleteSpecialChars(SheetPath["AN5"].w + " " + SheetPath["AN6"].w)] =
    DeleteUnities(SheetPath["AN7"].w);

  /////////////////PER001 //////////////////

  PER001[DeleteSpecialChars(SheetPath["AC5"].w)] = DeleteUnities(
    SheetPath["AC7"].w
  );
  if (SheetPath["AD7"] == undefined) {
    PER001[DeleteSpecialChars(SheetPath["AD5"].w)] = 0;
  } else {
    PER001[DeleteSpecialChars(SheetPath["AD5"].w)] = DeleteUnities(
      SheetPath["AD7"].w
    );
  }
  PER001[DeleteSpecialChars(SheetPath["AE5"].w)] = SheetPath["AE7"].w;
  PER001[DeleteSpecialChars(SheetPath["AF5"].w + SheetPath["AF6"].w)] =
    DeleteUnities(SheetPath["AF7"].w);
  PER001[DeleteSpecialChars(SheetPath["AF5"].w + SheetPath["AG6"].w)] =
    DeleteUnities(SheetPath["AG7"].w);
  if (SheetPath["AH7"] == undefined) {
    PER001[DeleteSpecialChars(SheetPath["AH5"].w)] = 0;
  } else {
    PER001[DeleteSpecialChars(SheetPath["AH5"].w)] = DeleteUnities(
      SheetPath["AH7"].w
    );
  }

  PER001[DeleteSpecialChars(SheetPath["AI5"].w + " " + SheetPath["AI6"].w)] =
    SheetPath["AI7"].w;
  PER001[DeleteSpecialChars(SheetPath["AJ5"].w + " " + SheetPath["AJ6"].w)] =
    SheetPath["AJ7"].w;
  PER001[DeleteSpecialChars(SheetPath["AK5"].w + " " + SheetPath["AK6"].w)] =
    SheetPath["AK7"].w;
  PER001[DeleteSpecialChars(SheetPath["AL5"].w + " " + SheetPath["AL6"].w)] =
    DeleteUnities(SheetPath["AL7"].w);
  PER001[DeleteSpecialChars(SheetPath["AM5"].w + " " + SheetPath["AM6"].w)] =
    DeleteUnities(SheetPath["AM7"].w);
  PER001[DeleteSpecialChars(SheetPath["AN5"].w + " " + SheetPath["AN6"].w)] =
    DeleteUnities(SheetPath["AN7"].w);

  ValeurMoteur["Digisteur1"] = Dig1;
  ValeurMoteur["Digisteur2"] = Dig2;
  ValeurMoteur["PER-001"] = PER001;
  object["Valeur Moteur"] = ValeurMoteur;
  return object;
};
module.exports = { ToDictionary };
