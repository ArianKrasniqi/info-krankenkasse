import React from "react"

import Inputs from "./Inputs/Inputs"
import Button from "../../elements/Button/Button"
import Text from "../../elements/Text/Text"

import classes from "./ContactForm.module.css"

const compare = () => (
  <div className={classes.Form}>
    <Inputs />
    <div className={classes.Bottom}>
      <Button type="red" style={{ width: "310px", marginRight: "0px" }}>
        OFFERTE ANFORDERN
      </Button>
      <Text type="smallParagraph" style={{ width: "310px", fontSize: "0.6em" }}>
        Mit dem Abschicken des Formulars akzeptieren Sie die Nutzungsbedingungen
        und bestätigen diese gelesen zu haben.
      </Text>
    </div>
  </div>
)

export default compare
