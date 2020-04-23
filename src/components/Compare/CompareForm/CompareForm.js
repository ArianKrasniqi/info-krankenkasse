import React from "react"

import Text from "../../../elements/Text/Text"
import CompareInputs from "./CompareInputs/CompareInputs"

import classes from "./CompareForm.module.css"

const CompareForm = props => (
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
    </div>
  </div>
)

export default CompareForm
