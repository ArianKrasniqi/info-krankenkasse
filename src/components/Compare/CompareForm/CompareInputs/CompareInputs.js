import React, { useState } from "react"
import { connect } from "react-redux"

import Input from "../../../../elements/Input/Input"
import formModel from "../../formModel"
import formModel2 from "../../formModel2"
import Price from "../Price/Price"
import Franchise from "../Franchise/Franchise"
import classes from "./CompareInputs.module.css"
import Text from "../../../../elements/Text/Text"
import pricesData from "../../../../assets/prices"
import * as actionTypes from "../../../../store/actions"

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
  const [prices, setPrices] = useState({})
  const [currentFranchises, setFranchises] = useState([])
  const [activeFranchise, setActiveFranchise] = useState("500")
  const [activePriceGroup, setActivePriceGroup] = useState("Hausarzt")
  const [activePrice, setActivePrice] = useState(null)
  const [maxPrices, setMaxPrices] = useState(null)

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
    let pricesGroups = []

    if (errors === 0) {
      // console.log(canton)

      cantonPrices = pricesData[canton.state_code][age]
      console.log(cantonPrices)
      setMaxPrices(cantonPrices["maxPrice"])

      franchises = cantonPrices["Standard"]
      franchises = Object.keys(franchises)

      pricesGroups = Object.keys(cantonPrices)

      setFranchises(franchises)
      setPrices(cantonPrices)

      setInputs(formModel2)
      props.onChangeStep(2)
    }
  }

  const PricesClasses =
    props.step === 1 ? [classes.Prices, classes.Hide].join(" ") : classes.Prices
  const FranchiseClasses =
    props.step === 1
      ? [classes.Franchises, classes.Hide].join(" ")
      : classes.Franchises
  const potencialClasses =
    props.step === 1
      ? [classes.Potencial, classes.Hide].join(" ")
      : classes.Potencial

  const franchiseHandler = franchise => {
    setActiveFranchise(franchise)
  }
  const priceGroupHandler = priceGroup => {
    setActivePriceGroup(priceGroup)
  }

  return (
    <React.Fragment>
      <form className={classes.Form}>
        <div className={PricesClasses}>
          {Object.keys(prices).map(price => {
            console.log(price)
            let actPrice = 0
            if (price === activePriceGroup) {
              actPrice = prices[price][activeFranchise]
            }
            if (price === "maxPrice") return null
            return (
              <Price
                price={prices[price][activeFranchise]}
                key={price}
                active={price === activePriceGroup}
                clicked={() => {
                  priceGroupHandler(price)
                }}
              >
                {price}
              </Price>
            )
          })}
        </div>
        <Text
          type="compareSmallSubtitle"
          style={props.step === 1 ? { display: "none" } : { display: "block" }}
        >
          Franchise
        </Text>
        <div className={FranchiseClasses}>
          {currentFranchises.map((franchise, index) => {
            return (
              <Franchise
                key={franchise}
                id={franchise}
                active={franchise === activeFranchise ? true : false}
                clicked={() => franchiseHandler(franchise)}
              >
                {franchise}
              </Franchise>
            )
          })}
        </div>
        <div className={potencialClasses}>
          <Text type="compareSmallSubtitle">Sparpotenzial</Text>
          <Text type="greenPrice">
            <span>
              {maxPrices !== null && activePriceGroup !== null
                ? (
                    (maxPrices[activeFranchise] -
                      prices[activePriceGroup][activeFranchise]) *
                    12
                  ).toFixed(2)
                : ""}{" "}
              CHF
            </span>
            / Jahre
          </Text>
          <Text type="compareSmallSubtitle">
            Jetzt detailliertes Angebot anfordern
          </Text>
          <Text
            type="smallParagraph"
            style={{ fontSize: "13px", textAlign: "center" }}
          >
            Sie erhalten eine unverbindliche und kostenlose detaillierte Offerte
            mit den Prämien 2020
          </Text>
        </div>
        {inputs.map(el => (
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

const mapStateToProps = state => {
  return {
    step: state.step,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeStep: step =>
      dispatch({ type: actionTypes.CHANGE_STEP, step: step }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompareInputs)
