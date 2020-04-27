import React, { useState } from "react"

import Button from "../../../elements/Button/Buttonn"
import formModel from "../formModel"
import Input from "../../../elements/Input/Input"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

import {
  lengthError,
  phoneError,
  emailError,
  dateError,
  selectError,
} from "./validity"

const SideFormInputs = (props) => {
  const [inputs, setInputs] = useState(formModel)

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
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: {
          "form-name": "sideform",
          vorname: inputs[0].defaultValue,
        },
      })
        .then(() => alert("Success!"))
        .catch((error) => alert(error))
    }
  }

  return (
    <form name="sideform" netlify>
      <FormControlLabel
        control={<Checkbox checked={true} name="Male" size="small" />}
        label="Herr"
      />
      <FormControlLabel
        control={<Checkbox checked={true} name="Female" size="small" />}
        label="Frau"
      />

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
