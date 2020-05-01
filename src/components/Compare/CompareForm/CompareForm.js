import React, { useState, useEffect } from "react"

import Text from "../../../elements/Text/Text"
import CompareInputs from "./CompareInputs/CompareInputs"
import Stepper from "../../Stepper/Stepper"
import Message from "../../../elements/Message/Message"
import Spinner from "../../../elements/Spinner/Spinner"

import classes from "./CompareForm.module.css"

const CompareForm = (props) => {
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

  useEffect(() => {
    if (!props.open) {
      setMsg(false)
      setShow(true)
    }
  }, [props.open])

  return (
    <div
      className={classes.CompareForm}
      style={props.open ? { display: "block" } : { display: "none" }}
    >
      {show ? (
        <div>
          <div className={classes.Steps}>
            <Stepper step={props.step} />
          </div>
          <Text type="formTitle">{props.content.cardTitle}</Text>
          <div className={classes.FormInputs}>
            <CompareInputs
              content={props.content}
              changeOpen={(value) => props.changeOpen(value)}
              afterSubmitHandler={afterSubmitHandler}
              spinnerHandler={spinnerHandler}
              msgHandler={msgHandler}
            />
          </div>
        </div>
      ) : null}
      <Message
        show={msg}
        lang={props.lang}
        msgHandler={msgHandler}
        btnShow={false}
      />
      <Spinner
        show={spinner}
        style={{ marginLeft: "45%", marginTop: "75px" }}
      />
    </div>
  )
}

export default CompareForm
