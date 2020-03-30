import React from "react"

import classes from "./RightCards.module.css"

const rightCards = props => (
  <div className={classes.Container}>{props.children}</div>
)

export default rightCards
