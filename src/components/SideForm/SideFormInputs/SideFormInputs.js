import React from "react"

import Input from "../../../elements/Input/Input"

const sideFormInputs = () => (
  <React.Fragment>
    <Input type="textInput" id="name-index" label="Vorname" helperText=" " />
    <Input
      type="textInput"
      id="lastname-index"
      label="Nachname"
      helperText=" "
    />
    <Input type="textInput" id="street-index" label="Strasse" helperText=" " />
    <Input type="textInput" id="postal-index" label="PLZ" helperText=" " />
    <Input type="textInput" id="place-index" label="Ort" helperText=" " />
    <Input type="textInput" id="phone-index" label="Telefon" helperText=" " />
    <Input type="textInput" id="email-index" label="E-Mail" helperText=" " />
    <Input
      type="textInput"
      id="bdate-index"
      label="Geburtsdatum"
      helperText=" "
    />
    <Input
      type="inputFullWidth"
      id="persons-index"
      label="Anzahl Personen im Haushalt"
      helperText="Some important"
      options={["AA", "BB"]}
    />
    <Input
      type="inputFullWidth"
      id="insurance-index"
      label="Aktuelle Krankenkasse"
      helperText="Some important"
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
  </React.Fragment>
)

export default sideFormInputs
