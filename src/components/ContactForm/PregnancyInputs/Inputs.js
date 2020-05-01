import React, { useState } from "react"
import axios from "axios"

import Input from "../../../elements/Input/Input"
import Button from "../../../elements/Button/Buttonn"
import formModel from "./formModel"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"

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
  const [value, setValue] = React.useState("female")

  const changeHelperText = ({
    validation,
    event,
    id,
    minLength,
    label,
    element,
    name,
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

    if (name === "plz") {
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
      props.afterSubmitHandler()
      props.spinnerHandler(true)

      var formData = new FormData()

      formData.append("Type", "Vorgeburtliche anmeldung")
      formData.append("Geschlecht", value)
      formData.append("Vorname", inputs[0].defaultValue)
      formData.append("Nachname", inputs[1].defaultValue)
      formData.append("Strasse", inputs[2].defaultValue)
      formData.append("PLZ", inputs[3].defaultValue)
      formData.append("Ort", inputs[4].defaultValue)
      formData.append("Telefon", inputs[5].defaultValue)
      formData.append("E-Mail", inputs[6].defaultValue)
      formData.append("Geburtsdatum", "Geburtstermin" + inputs[7].defaultValue)
      formData.append("Anzahl Personen im Haushalt", inputs[8].defaultValue)
      formData.append("Aktuelle Krankenkasse", "")
      formData.append("Nachricht", inputs[10].defaultValue)

      // ContactFormURL
      axios({
        method: "post",
        url: "https://getform.io/f/16d014b0-7892-4850-a172-c60e7400627e",
        data: formData,
      })
        .then((r) => {
          console.log(r)
          props.spinnerHandler(false)
          props.msgHandler(true)
        })
        .catch((r) => {
          console.log(r)
        })

      inputs.forEach((input) => {
        input.defaultValue = ""
      })
    }
  }

  const checkHandler = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className={classes.Inputs}>
      <RadioGroup
        aria-label="gender"
        name="gender"
        value={value}
        onChange={checkHandler}
        style={{ display: "flex", flexDirection: "row", width: "100%" }}
      >
        <FormControlLabel
          value="male"
          control={<Radio size="small" color="default" />}
          label="Herr"
        />
        <FormControlLabel
          value="female"
          control={<Radio size="small" color="default" />}
          label="Frau"
        />
      </RadioGroup>
      {inputs.map((el) => (
        <Input
          error={el.error}
          id={el.id}
          key={el.id}
          name={el.name}
          label={el.label[props.lang] ? el.label[props.lang] : el.label}
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
                label: el.label[props.lang],
                element: el.element,
                name: el.name,
              }
            )
          }
        />
      ))}

      <Button
        type="red"
        element="submit"
        clicked={(event) => submitHandler(event)}
        style={{ width: "310px", marginRight: "0px" }}
      >
        {props.btnText ? props.btnText : "OFFERTE ANFORDERN"}
      </Button>
    </div>
  )
}

export default Inputs
