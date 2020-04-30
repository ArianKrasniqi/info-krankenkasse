import React, { useState } from "react"
import axios from "axios"

import Button from "../../../elements/Button/Buttonn"
import formModel from "../formModel"
import Input from "../../../elements/Input/Input"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"

import {
  lengthError,
  phoneError,
  emailError,
  dateError,
  selectError,
} from "./validity"

const SideFormInputs = (props) => {
  const [inputs, setInputs] = useState(formModel)
  const [value, setValue] = React.useState("female")

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
    setInputs([...newInputs])
  }

  const submitHandler = (event) => {
    event.preventDefault()

    let errors = 0

    inputs.forEach((input, index) => {
      if (input.defaultValue === "") {
        errors++
        changeHelperText(
          // specify keys: event, validation, id, minLength, label, element
          {
            event,
            validation: input.validation,
            id: input.id,
            minLength: input.minLength,
            label: input.label[props.lang],
            element: input.element,
          }
        )
      }
    })

    if (errors === 0) {
      alert("You did!")

      var formData = new FormData()

      formData.append("Type", "SideForm")
      formData.append("Geschlecht", value)
      formData.append("Vorname", inputs[0].defaultValue)
      formData.append("Nachname", inputs[1].defaultValue)
      formData.append("Strasse", inputs[2].defaultValue)
      formData.append("PLZ", inputs[3].defaultValue)
      formData.append("Ort", inputs[4].defaultValue)
      formData.append("Telefon", inputs[5].defaultValue)
      formData.append("E-Mail", inputs[6].defaultValue)
      formData.append("Geburtsdatum", inputs[7].defaultValue)
      formData.append("Anzahl Personen im Haushalt", inputs[8].defaultValue)
      formData.append("Aktuelle Krankenkasse", inputs[9].defaultValue)

      // SideForm Url
      axios({
        method: "post",
        url: "https://getform.io/f/bd2103e6-ff4d-4b2e-a17b-433c230d8f41",
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

  const checkHandler = (event) => {
    setValue(event.target.value)
  }

  return (
    <form id="sideform" name="sideform" data-netlify="true" method="POST">
      <RadioGroup
        aria-label="gender"
        name="gender"
        value={value}
        onChange={checkHandler}
        style={{ display: "flex", flexDirection: "row" }}
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
          defaultValue={el.defaultValue}
          helperText={el.helperText}
          options={el.options}
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
              }
            )
          }
        />
      ))}
      <Button
        element="submit"
        type="redFullWidth"
        clicked={(event) => submitHandler(event)}
      >
        {props.btnText}
      </Button>
    </form>
  )
}

export default SideFormInputs
