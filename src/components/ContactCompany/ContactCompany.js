import React, { useState } from "react"

import InformationCard from "./InformationCard/InformationCard"
import Inputs from "./Inputs/Inputs"
import Text from "../../elements/Text/Text"
import Message from "../../elements/Message/Message"
import Spinner from "../../elements/Spinner/Spinner"

import classes from "./ContactCompany.module.css"

const ContactCompany = (props) => {
  const [show, setShow] = useState(true)
  const [spinner, setSpinner] = useState(false)
  const [msg, setMsg] = useState(false)

  const afterSubmitHandler = () => {
    setShow(false)
  }
  const spinnerHandler = (value) => {
    setSpinner(value)
  }
  const msgHandler = (value) => {
    setMsg(value)
    if (!value) {
      setShow(true)
    }
  }

  return (
    <div className={classes.Container}>
      <div className={classes.Form}>
        {show ? (
          <h3 style={{ color: `${props.color}` }}>
            Jetzt Information und Offerte für die passende Krankenversicherung
            bestellen:
          </h3>
        ) : null}
        {show ? (
          <Text type="paragraph" style={{ color: `${props.color}` }}>
            Was ist Ihnen wichtig?
          </Text>
        ) : null}
        <div className={classes.FormContainer}>
          {show ? (
            <Inputs
              name={props.name}
              color={props.color}
              show={show}
              show={show}
              afterSubmitHandler={afterSubmitHandler}
              spinnerHandler={spinnerHandler}
              msgHandler={msgHandler}
            />
          ) : null}
          <Message show={msg} lang={props.lang} msgHandler={msgHandler} />
          <Spinner show={spinner} />
        </div>
        <div className={classes.Bottom}>
          {show ? (
            <Text
              type="smallParagraph"
              style={{ width: "310px", fontSize: "0.6em" }}
            >
              Mit dem Abschicken des Formulars akzeptieren Sie die
              Nutzungsbedingungen und bestätigen diese gelesen zu haben.
            </Text>
          ) : null}
        </div>
      </div>
      <InformationCard
        name={props.name}
        shortname={props.shortname}
        location={props.location}
        insured={props.insured}
        color={props.color}
        refundPeriod={props.refundPeriod}
        solvencyRate={props.solvencyRate}
        administrativeExpenses={props.administrativeExpenses}
      />
    </div>
  )
}

export default ContactCompany
