import React from "react"

import classes from "./RightCards.module.css"

const rightCards = props => (
  <div className={classes.Container}>
    <div style={{ position: "fixed" }}>{props.children}</div>
  </div>
)

export default rightCards
