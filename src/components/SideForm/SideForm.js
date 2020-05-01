import React, { useState } from "react"
import { connect } from "react-redux"

import Text from "../../elements/Text/Text"
import SideFormInputs from "./SideFormInputs/SideFormInputs"
import * as content from "../../content/elements/sideform"
import Spinner from "../../elements/Spinner/Spinner"
import Message from "../../elements/Message/Message"

import classes from "./SideForm.module.css"

const SideForm = (props) => {
  const [show, setShow] = useState(true)
  const [spinner, setSpinner] = useState(false)
  const [msg, setMsg] = useState(false)

  let lang =
    props.lang === "en"
      ? content.en
      : props.lang === "fr"
      ? content.fr
      : props.lang === "it"
      ? content.it
      : content.de

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
    <div className={classes.SideForm}>
      <Text type="sideformSubtitle">{lang.title}</Text>
      <Text type="paragraph">{lang.description}</Text>

      <div className={classes.Inputs}>
        <div>
          <SideFormInputs
            lang={props.lang}
            btnText={lang.button}
            show={show}
            afterSubmitHandler={afterSubmitHandler}
            spinnerHandler={spinnerHandler}
            msgHandler={msgHandler}
          />
          {show ? <Text type="smallParagraph">{lang.smallText}</Text> : null}
        </div>
        <Message show={msg} lang={props.lang} msgHandler={msgHandler} />
        <Spinner show={spinner} />
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  }
}

export default connect(mapStateToProps)(SideForm)
