import React from "react"

import Input from "../../../../elements/Input/Input"

const compareInputs = () => (
  <React.Fragment>
    <Input
      type="inputFullWidth"
      id="insurance-compare"
      label="Aktuelle Krankenkasse"
      helperText="Some important helper text"
      options={[
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
      ]}
    />
    <Input id="postalcode-compare" label="PLZ" helperText="Important help" />
    <Input id="city-compare" label="Ort" helperText="Important help" />
    <Input
      type="selectInput"
      id="age-compare"
      label="Alersgruppe"
      helperText="Some important helper text"
      options={["0-18 Jahre", "19-25 Jahre", "ab 25 Jahre"]}
    />
  </React.Fragment>
)

export default compareInputs
