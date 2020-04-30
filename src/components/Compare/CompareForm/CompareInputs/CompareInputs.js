import React, { useState } from "react"
import axios from "axios"
import { connect } from "react-redux"

import Button from "../../../../elements/Button/Buttonn"
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

const CompareInputs = (props) => {
  const [inputs, setInputs] = useState(formModel)
  const [canton, setCanton] = useState("")
  const [prices, setPrices] = useState({})
  const [currentFranchises, setFranchises] = useState([])
  const [activeFranchise, setActiveFranchise] = useState("500")
  const [activePriceGroup, setActivePriceGroup] = useState("Hausarzt")
  const [maxPrices, setMaxPrices] = useState(null)
  const [krankenkasse, setKrankenkasse] = useState("")

  if (props.step === 1 && inputs !== formModel) {
    setInputs(formModel)
  } else if (props.step === 2 && inputs !== formModel2) {
    setInputs(formModel2)
  }

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
    console.log(newInputs)
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
            label: input.label,
            element: input.element,
          }
        )
      }
    })

    let cantonPrices = ""
    let franchises = []

    if (errors === 0 && props.step === 1) {
      // console.log(canton)

      cantonPrices = pricesData[canton.state_code][age]
      console.log(cantonPrices)
      setMaxPrices(cantonPrices["maxPrice"])

      franchises = cantonPrices["Standard"]
      franchises = Object.keys(franchises)

      setFranchises(franchises)
      setPrices(cantonPrices)
      setInputs(formModel2)
      setKrankenkasse(inputs[0].defaultValue)

      props.onChangeStep(2)
    } else if (errors === 0 && props.step === 2) {
      let sparpotential =
        maxPrices !== null && activePriceGroup !== null
          ? (
              (maxPrices[activeFranchise] -
                prices[activePriceGroup][activeFranchise]) *
              12
            ).toFixed(2)
          : ""

      let formData = new FormData()

      formData.append("Type", "Compare")
      // formData.append("Geschlecht", value)

      formData.append("Krankenkasse", activePriceGroup)
      formData.append(
        "Krankenkasse Premie",
        prices[activePriceGroup][activeFranchise]
      )
      formData.append("Franchise", activeFranchise)
      formData.append("Sparpotential", sparpotential)

      formData.append("Vorname", inputs[0].defaultValue)
      formData.append("Nachname", inputs[1].defaultValue)
      formData.append("Strasse", inputs[2].defaultValue)
      formData.append("PLZ", canton.zipcode)
      formData.append("Ort", canton.place)
      formData.append("Telefon", inputs[3].defaultValue)
      formData.append("E-Mail", inputs[4].defaultValue)
      formData.append("Geburtsdatum", inputs[5].defaultValue)
      formData.append("Anzahl Personen im Haushalt", inputs[6].defaultValue)
      formData.append("Aktuelle Krankenkasse", krankenkasse)

      // SideForm Url
      axios({
        method: "post",
        url: "https://getform.io/f/4b978560-bef5-4494-a35a-d3bdc51ddc61",
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

      props.changeOpen(false)
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

  const franchiseHandler = (franchise) => {
    setActiveFranchise(franchise)
  }
  const priceGroupHandler = (priceGroup) => {
    setActivePriceGroup(priceGroup)
  }

  return (
    <React.Fragment>
      <form className={classes.Form}>
        <div className={PricesClasses}>
          {Object.keys(prices).map((price) => {
            let text = ""
            if (price === "Hausarzt") {
              text = props.content.hausarzt
            } else if (price === "Telmed") {
              text = props.content.telmed
            } else if (price === "HMO") {
              text = props.content.hmo
            } else if (price === "Standard") {
              text = props.content.standard
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
                content={props.content.from}
              >
                {text}
              </Price>
            )
          })}
        </div>
        <Text
          type="compareSmallSubtitle"
          style={props.step === 1 ? { display: "none" } : { display: "block" }}
        >
          {props.content.franchise}
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
          <Text type="compareSmallSubtitle">{props.content.potencial}</Text>
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
            / {props.content.year}
          </Text>
          <Text type="compareSmallSubtitle">{props.content.quote}</Text>
          <Text
            type="smallParagraph"
            style={{ fontSize: "13px", textAlign: "center" }}
          >
            {props.content.smallDescription}
          </Text>
        </div>
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
            options={
              el.name === "ageGroup" ? el.options[props.lang] : el.options
            }
            values={el.values}
            style={{ width: "30%" }}
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
          clicked={(event) =>
            submitHandler(event, inputs[inputs.length - 1].defaultValue)
          }
          type="red"
        >
          {props.content.cardButton}
        </Button>
      </form>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
    step: state.step,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeStep: (step) =>
      dispatch({ type: actionTypes.CHANGE_STEP, step: step }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompareInputs)
