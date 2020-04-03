import React, { useState } from "react"

import registrationModel from "../formModel"
import Input from "../../../elements/Input/Input"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

import { lengthError, phoneError, emailError } from "./validity"

const SideFormInputs = () => {
  const [inputs, setInputs] = useState(registrationModel)

  const changeHelperText = (validation, event, id, minLength, label) => {
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
        : " "

    newInputs[index].helperText = error
    setInputs([...newInputs])
  }

  return (
    <form>
      <FormControlLabel
        control={<Checkbox checked={true} name="Male" size="small" />}
        label="Herr"
      />
      <FormControlLabel
        control={<Checkbox checked={true} name="Female" size="small" />}
        label="Frau"
      />

      {registrationModel.map(el => (
        <Input
          id={el.id}
          key={el.id}
          name={el.name}
          label={el.label}
          type={el.type}
          defaultValue={el.defaultValue}
          helperText={el.helperText}
          changed={event =>
            changeHelperText(
              el.validation,
              event,
              el.id,
              el.minLength,
              el.label
            )
          }
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  )
}

export default SideFormInputs
