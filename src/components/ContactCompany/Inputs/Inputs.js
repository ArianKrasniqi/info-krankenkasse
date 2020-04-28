import React, { useState } from "react"
import axios from "axios"

import Input from "../../../elements/Input/Input"
import Button from "../../../elements/Button/Buttonn"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import formModel from "./formModel"

import classes from "./Inputs.module.css"

import {
  lengthError,
  phoneError,
  emailError,
  dateError,
  selectError,
  checkPLZ,
} from "../../SideForm/SideFormInputs/validity"

const Inputs = (props) => {
  const [inputs, setInputs] = useState(formModel)
  // const [canton, setCanton] = useState("")

  const changeHelperText = ({
    validation,
    event,
    id,
    minLength,
    label,
    element,
  }) => {
    event.persist()

    const newInputs = [...inputs]
    const value = event.target.value

    const index = inputs.findIndex((input) => {
      return input.id === id
    })

    const error =
      validation === "lengthError"
        ? lengthError(value, minLength, label)
        : validation === "phoneError"
        ? phoneError(value, minLength, label)
        : validation === "emailError"
        ? emailError(value)
        : validation === "dateError"
        ? dateError(value)
        : validation === "selectError"
        ? selectError(value, label)
        : " "

    if (element === "select" && value !== undefined) {
      newInputs[index].defaultValue = value
    }

    newInputs[index].defaultValue = value
    newInputs[index].helperText = error
    newInputs[index].error = error === " " ? false : true

    if (label === "PLZ") {
      if (!newInputs[index].error) {
        const result = checkPLZ(value)
        if (result !== undefined) {
          newInputs[index + 1].label = result.place
          newInputs[index + 1].defaultValue = result.place
          newInputs[index + 1].error = false
          newInputs[index + 1].helperText = " "
          // setCanton(result)
        } else {
          // setCanton("")
          newInputs[index + 1].label = "Ort nicht gefunden"
          newInputs[index + 1].defaultValue = ""
          newInputs[index].helperText = "Ort nicht gefunden"
          newInputs[index].error = true
        }
      } else {
        newInputs[index + 1].label = "Ort"
        newInputs[index + 1].defaultValue = ""
      }
    }

    setInputs([...newInputs])
  }

  const submitHandler = (event) => {
    event.preventDefault()

    let errors = 0
    console.log("Inside")
    inputs.forEach((input) => {
      if (input.defaultValue === "") {
        errors++
        changeHelperText(
          // specify keys: event, validation, id, minLength, label, element
          {
            event,
            validation: input.validation,
            id: input.id,
            minLength: input.minLength,
            label: input.label,
            element: input.element,
          }
        )
      }
    })

    if (errors <= 1) {
      alert("You did!")

      var formData = new FormData()

      formData.append("Type", "Für " + props.name)
      formData.append("vorname", inputs[0].defaultValue)
      formData.append("nachname", inputs[1].defaultValue)
      formData.append("strasse", inputs[2].defaultValue)
      formData.append("PLZ", inputs[3].defaultValue)
      formData.append("Ort", inputs[4].defaultValue)
      formData.append("Telefon", inputs[5].defaultValue)
      formData.append("E-Mail", inputs[6].defaultValue)
      formData.append("Geburtsdatum", inputs[7].defaultValue)
      formData.append("Anzahl Personen im Haushalt", inputs[8].defaultValue)
      formData.append("Aktuelle Krankenkasse", inputs[9].defaultValue)
      formData.append("Nachricht", inputs[10].defaultValue)

      axios({
        method: "post",
        url: "https://getform.io/f/84e5f7b4-ac9c-41e8-b869-9c725d5df8f8",
        data: formData,
      })
        .then((r) => {
          console.log(r)
        })
        .catch((r) => {
          console.log(r)
        })

      inputs.forEach((input) => {
        input.defaultValue = ""
      })
    }
  }

  return (
    <div>
      <form>
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
              <Checkbox
                checked={true}
                name="Rabatte-für-Familien"
                size="small"
              />
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
          {inputs.map((el) => (
            <Input
              error={el.error}
              id={el.id}
              key={el.id}
              name={el.name}
              label={el.label}
              type={el.type}
              half={el.half}
              defaultValue={el.defaultValue}
              helperText={el.helperText}
              options={el.options}
              values={el.values}
              style={el.style}
              changed={(event) =>
                changeHelperText(
                  // specify keys: event, validation, id, minLength, label, element
                  {
                    event,
                    validation: el.validation,
                    id: el.id,
                    minLength: el.minLength,
                    label: el.label,
                    element: el.element,
                  }
                )
              }
            />
          ))}

          <Button
            type="red"
            clicked={(event) => submitHandler(event)}
            style={{ width: "310px", marginRight: "0px", float: "right" }}
          >
            OFFERTE ANFORDERN
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Inputs
