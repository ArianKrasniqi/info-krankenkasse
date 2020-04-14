import React, { useState } from "react"

import Input from "../../../../elements/Input/Input"
import formModel from "../../formModel"
import classes from "./CompareInputs.module.css"

import {
  lengthError,
  phoneError,
  emailError,
  dateError,
  selectError,
  checkPLZ,
} from "../../../SideForm/SideFormInputs/validity"

const CompareInputs = () => {
  const [inputs, setInputs] = useState(formModel)
  const [canton, setCanton] = useState("")

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

    const index = inputs.findIndex(input => {
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
          setCanton(result)
        } else {
          setCanton("")
          newInputs[index + 1].label = "Ort"
          newInputs[index + 1].defaultValue = ""
          newInputs[index].helperText = "Keine Ort"
          newInputs[index].error = true
        }
      } else {
        newInputs[index + 1].label = "Ort"
        newInputs[index + 1].defaultValue = ""
      }
    }

    setInputs([...newInputs])
  }

  const submitHandler = event => {
    event.preventDefault()

    let errors = 0

    inputs.map((input, index) => {
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

    if (errors === 0) {
      alert("You did!")
    }
  }

  return (
    <React.Fragment>
      <form className={classes.Form}>
        {inputs.map(el => (
          <Input
            error={el.error}
            id={el.id}
            key={el.id}
            name={el.name}
            label={el.label}
            type={el.type}
            defaultValue={el.defaultValue}
            helperText={el.helperText}
            options={el.options}
            style={{ width: "30%" }}
            changed={event =>
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
        <button>Next Step</button>
      </form>
    </React.Fragment>
  )
}

export default CompareInputs
