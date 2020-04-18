import React from "react"

import PregnancyInputs from "./PregnancyInputs/Inputs"
import ContactInputs from "./ContactInputs/Inputs"
import Button from "../../elements/Button/Button"
import Text from "../../elements/Text/Text"

import classes from "./ContactForm.module.css"

const contactForm = props => (
  <div
    className={
      props.type === "contact"
        ? [classes.Form, classes.Full].join(" ")
        : classes.Form
    }
    style={props.style}
  >
    {props.type === "contact" ? (
      <ContactInputs btnText={props.btnText} />
    ) : (
      <PregnancyInputs btnText={props.btnText} />
    )}
    <div className={classes.Bottom}>
      {/* <Button type="red" style={{ width: "310px", marginRight: "0px" }}>
        {props.btnText ? props.btnText : "OFFERTE ANFORDERN"}
      </Button> */}
      <Text type="smallParagraph" style={{ width: "310px", fontSize: "0.6em" }}>
        Mit dem Abschicken des Formulars akzeptieren Sie die Nutzungsbedingungen
        und bestätigen diese gelesen zu haben.
      </Text>
    </div>
  </div>
)

export default contactForm
