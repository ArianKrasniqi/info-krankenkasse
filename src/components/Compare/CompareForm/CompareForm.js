import React from "react"

import Text from "../../../elements/Text/Text"
import Button from "../../../elements/Button/Button"
import CompareInputs from "./CompareInputs/CompareInputs"

import classes from "./CompareForm.module.css"

const compareForm = props => (
  <div
    className={classes.CompareForm}
    style={props.open ? { display: "block" } : { display: "none" }}
  >
    <div className={classes.Steps}></div>
    <Text type="formTitle">{props.content.cardTitle}</Text>
    <div className={classes.FormInputs}>
      <CompareInputs
        content={props.content}
        changeOpen={value => props.changeOpen(value)}
      />
      {/* <Button type="red"> Jetzt Prämie vergleichen </Button> */}
    </div>
  </div>
)

export default compareForm
