import React from "react"

import Input from "../../../elements/Input/Input"

import classes from "./Inputs.module.css"

const formInputs = () => (
  <div className={classes.Inputs}>
    <Input
      type="textInputHalf"
      id="contactform-name"
      helperText=" "
      label="Vorname Baby"
    />
    <Input
      type="textInputHalf"
      id="contactform-lastname"
      helperText=" "
      label="Nachname Baby"
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
      id="contactform-appointment"
      helperText=" "
      label="Voraussichtlicher geburtstermin"
    />
    <Input
      style={{ width: "48%" }}
      type="selectInput"
      id="contactform-persons"
      label="Anzahl Personen im Haushalt"
      helperText=" "
      options={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
    />
  </div>
)

export default formInputs
