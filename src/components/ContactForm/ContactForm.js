import React from "react"
import { connect } from "react-redux"

import PregnancyInputs from "./PregnancyInputs/Inputs"
import ContactInputs from "./ContactInputs/Inputs"
import Text from "../../elements/Text/Text"
import * as content from "../../content/elements/contactforms"

import classes from "./ContactForm.module.css"

const ContactForm = (props) => {
  let lang =
    props.lang === "en"
      ? content.en
      : props.lang === "fr"
      ? content.fr
      : props.lang === "it"
      ? content.it
      : content.de
  return props.show ? (
    <div
      className={
        props.type === "contact"
          ? [classes.Form, classes.Full].join(" ")
          : classes.Form
      }
      style={props.style}
    >
      {props.type === "contact" ? (
        <ContactInputs
          btnText={lang.contactBtn}
          lang={props.lang}
          afterSubmitHandler={props.afterSubmitHandler}
          spinnerHandler={props.spinnerHandler}
          msgHandler={props.msgHandler}
        />
      ) : (
        <PregnancyInputs
          btnText={lang.preContactBtn}
          lang={props.lang}
          afterSubmitHandler={props.afterSubmitHandler}
          spinnerHandler={props.spinnerHandler}
          msgHandler={props.msgHandler}
        />
      )}
      <div className={classes.Bottom}>
        <Text
          type="smallParagraph"
          style={{ width: "310px", fontSize: "0.6em" }}
        >
          {lang.smallText}
        </Text>
      </div>
    </div>
  ) : null
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  }
}

export default connect(mapStateToProps)(ContactForm)
