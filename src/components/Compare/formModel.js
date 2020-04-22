const registrationModel = [
  {
    element: "select",
    name: "insurance",
    label: {
      de: "Aktuelle Krankenkasse",
      en: "Current health insurance",
      fr: "Caisse d'assurance maladie actuelle",
      it: "Assicurazione sanitaria attuale",
    },
    type: "inputFullWidth",
    id: "insurance-compare",
    defaultValue: "",
    helperText: " ",
    validation: "selectError",
    error: false,
    options: [
      "Vorgeburt",
      "AMB",
      "Agrisano",
      "Aquilana",
      "Arcosana",
      "Assura",
      "Atupri",
      "Avanex",
      "Avenir",
      "Birchmeier",
      "CSS",
      "Compact",
      "Concordia",
      "ÖKK",
      "EGK",
      "EasySana",
      "Einsiedeln",
      "Flaachtal",
      "Galenos",
      "Glarner",
      "GroupeMutuel",
      "Helsana",
      "Ingenbohl",
      "Innova",
      "Intras",
      "KPT / CPT",
      "Klug",
      "Kmu",
      "Kolping",
      "Lumneziana",
      "LuzernerHinterland",
      "Philos",
      "Progrès",
      "Provita",
      "Rhenusana",
      "SLKK",
      "Sana24",
      "Sanagate",
      "Sanavals",
      "Sanitas",
      "Sansan",
      "Simplon",
      "Sodalis",
      "Steffisburg",
      "Stoffel",
      "Sumiswalder",
      "Supra",
      "Swica",
      "Sympany",
      "Turbenthal",
      "Visana",
      "Wädenswil",
    ],
  },

  {
    element: "number",
    name: "plz",
    label: { de: "PLZ", en: "Postcode", fr: "NPA", it: "NPA" },
    type: "numberInputStyle",
    id: "postalcode-compare",
    defaultValue: "",
    helperText: " ",
    minLength: 4,
    validation: "lengthError",
    error: false,
  },

  {
    element: "text",
    name: "ort",
    label: { de: "Ort", en: "Town", fr: "Località", it: "Località" },
    type: "textReadOnly",
    id: "place-compare",
    defaultValue: "",
    helperText: " ",
    minLength: 2,
    validation: "lengthError",
    error: false,
  },

  {
    element: "select",
    name: "ageGroup",
    label: {
      de: "Altersgruppe",
      en: "Age Group",
      fr: "Tranche d'âge",
      it: "Fascia di età",
    },
    type: "ageSelectInput",
    id: "age-compare",
    defaultValue: "ERWACHSENE",
    helperText: " ",
    validation: "selectError",
    error: false,
    options: {
      de: ["0-18 Jahre", "19-25 Jahre", "ab 25 Jahre"],
      en: ["0-18 Years", "19-25 Years", "from 25 Years"],
      fr: ["0-18 Années", "19-25 Années", "A partir de 26 ans"],
      it: ["0-18 Anni", "19-25 Anni", "da 25 Anni"],
    },
    values: ["KINDER", "JUGENDLICHE", "ERWACHSENE"],
  },
]

export default registrationModel
