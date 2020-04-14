import React, { useState } from "react"

import Input from "../../../../elements/Input/Input"
import formModel from "../../formModel"
import formModel2 from "../../formModel2"
import Price from "../Price/Price"
import Franchise from "../Franchise/Franchise"
import classes from "./CompareInputs.module.css"
import Text from "../../../../elements/Text/Text"
import pricesData from "../../../../assets/prices"

import {
  lengthError,
  phoneError,
  emailError,
  dateError,
  selectError,
  checkPLZ,
} from "../../../SideForm/SideFormInputs/validity"

const CompareInputs = props => {
  const [inputs, setInputs] = useState(formModel)
  const [canton, setCanton] = useState("")
  const [step, setStep] = useState(1)
  const [prices, setPrices] = useState({})
  const [currentFranchises, setFranchises] = useState([])

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
          newInputs[index + 1].error = false
          newInputs[index + 1].helperText = " "
          setCanton(result)
        } else {
          setCanton("")
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

  const submitHandler = (event, age) => {
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

    let cantonPrices = ""
    let franchises = []
    if (errors === 0) {
      console.log(age)
      console.log(canton)
      cantonPrices = pricesData[canton.state_code][age]
      franchises = cantonPrices["Standard"]
      franchises = Object.keys(franchises)
      setFranchises(franchises)
      console.log(franchises)
      setPrices(cantonPrices)
      setInputs(formModel2)
      setStep(2)
    }
  }

  const PricesClasses =
    step === 1 ? [classes.Prices, classes.Hide].join(" ") : classes.Prices
  const FranchiseClasses =
    step === 1
      ? [classes.Franchises, classes.Hide].join(" ")
      : classes.Franchises

  return (
    <React.Fragment>
      <form className={classes.Form}>
        <div className={PricesClasses}>
          <Price price="270.00" active>
            Hausarzt
          </Price>
          <Price price="270.00">Telmed</Price>
          <Price price="270.00">HMO</Price>
          <Price price="270.00">Standard</Price>
        </div>
        <Text type="compareSmallSubtitle">Franchise</Text>
        <div className={FranchiseClasses}>
          {currentFranchises.map((franchise, index) => {
            console.log(franchise)
            return (
              <Franchise
                key={`${franchise}-${index}`}
                active={index === 4 ? true : false}
              >
                {franchise}
              </Franchise>
            )
          })}
          {/*           
          <Franchise>500</Franchise>
          <Franchise>1000</Franchise>
          <Franchise active>1500</Franchise>
          <Franchise>2000</Franchise>
          <Franchise>2500</Franchise> */}
        </div>
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
            values={el.values}
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
        <button
          onClick={event =>
            submitHandler(event, inputs[inputs.length - 1].defaultValue)
          }
        >
          Next Step
        </button>
      </form>
    </React.Fragment>
  )
}

export default CompareInputs
