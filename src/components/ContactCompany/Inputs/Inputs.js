import React from "react"

import Input from "../../../elements/Input/Input"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"

import classes from "./Inputs.module.css"

const formInputs = () => {
  return (
    <div>
      <div className={classes.Checkboxes}>
        <FormControlLabel
          className={classes.Checkbox}
          control={
            <Checkbox checked={true} name="Günstige-Prämien" size="small" />
          }
          label="Günstige Prämien"
        />
        <FormControlLabel
          control={
            <Checkbox checked={true} name="Alternativ-Medizin" size="small" />
          }
          label="Alternativ-Medizin"
        />
        <FormControlLabel
          control={
            <Checkbox checked={true} name="Freie-Arztwahl" size="small" />
          }
          label="Freie Arztwahl"
        />
        <FormControlLabel
          control={
            <Checkbox checked={true} name="Sport-Fitness" size="small" />
          }
          label="Sport & Fitness"
        />
        <FormControlLabel
          control={
            <Checkbox checked={true} name="Zusatzversicherung" size="small" />
          }
          label="Zusatzversicherung"
        />
        <FormControlLabel
          control={
            <Checkbox checked={true} name="Rabatte-für-Familien" size="small" />
          }
          label="Rabatte für Familien"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={true}
              name="Halbprivat-oder-Privat"
              size="small"
            />
          }
          label="Halbprivat oder Privat"
        />
        <FormControlLabel
          control={<Checkbox checked={true} name="Sonstiges" size="small" />}
          label="Sonstiges"
        />

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
      </div>
      <div className={classes.Inputs}>
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
          id="contactform-appointment"
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
          id="contactform-persons"
          label="Anzahl Personen im Haushalt"
          helperText=" "
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        />
      </div>
    </div>
  )
}

export default formInputs
