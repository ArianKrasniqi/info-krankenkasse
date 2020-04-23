import React from "react"

import classes from "./InfoRow.module.css"

const InfoRow = props => (
  <div className={classes.Row}>
    <div>
      {props.children}
      <h5 className={classes.Text}>{props.title}</h5>
    </div>
    <h5 className={classes.Light}>{props.description}</h5>
  </div>
)

export default InfoRow
