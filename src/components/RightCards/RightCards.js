import React from "react"

import classes from "./RightCards.module.css"

const RightCards = props => (
  <div className={classes.Container}>{props.children}</div>
)

export default RightCards
