import React, { useState } from "react"

import {
  lengthError,
  phoneError,
  emailError,
  dateError,
  selectError,
} from "./validity"

// function useValidator(registrationModel) {
// const [inputs, setInputs] = useState(registrationModel)

const useValidator = (data, registrationModel) => {
  const { event, validation, id, minLength, label, element } = data

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

  newInputs[index].helperText = error
  // setInputs([...newInputs])
  return newInputs
}
