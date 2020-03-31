import React from "react"

import Input from "../../../elements/Input/Input"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"

import classes from "./Inputs.module.css"

const formInputs = () => (
  <div className={classes.Inputs}>
    <RadioGroup
      className={classes.Radios}
      aria-label="gender"
      name="gender1"
      value="female"
    >
      <FormControlLabel
        value="female"
        control={<Radio size="small" />}
        label="Female"
      />
      <FormControlLabel
        value="male"
        control={<Radio size="small" />}
        label="Male"
      />
    </RadioGroup>
    <Input
      type="textInputHalf"
      id="contactform-name"
      helperText=" "
      label="Vorname"
    />
    <Input
      type="textInputHalf"
      id="contactform-lastname"
      helperText=" "
      label="Nachname"
    />
    <Input
      type="textInputHalf"
      id="contactform-street"
      helperText=" "
      label="Strasse"
    />
    <Input
      type="textInputQuarter"
      id="contactform-postal"
      helperText="Some important helper text"
      label="PLZ"
    />
    <Input
      type="textInputQuarter"
      id="contactform-location"
      helperText=" "
      label="Ort"
    />
    <Input
      type="textInputHalf"
      id="contactform-tel"
      helperText=" "
      label="Telefon"
    />
    <Input
      type="textInputHalf"
      id="contactform-email"
      helperText=" "
      label="E-Mail"
    />
    <Input
      type="textInputHalf"
      id="contactform-birthdate"
      helperText=" "
      label="Geburtsdatum"
    />
    <Input
      style={{ width: "48%" }}
      type="selectInput"
      id="contactform-persons"
      label="Anzahl Personen im Haushalt"
      helperText=" "
      options={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
    />
    <Input
      type="inputFullWidth"
      id="contactform-insurace"
      label="Aktuelle Krankenkasse"
      helperText=" "
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
    <Input
      style={{ width: "100%" }}
      type="textarea"
      id="contactform-textarea"
      label="Nachricht"
      helperText=" "
    />
  </div>
)

export default formInputs
