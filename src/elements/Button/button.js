import React from "react"

import classes from "./button.module.css"

const button = props => {
  let button = ""
  switch (props.type) {
    case "cover":
      button = <button className={classes.Button}>{props.title}</button>
      break

    default:
      button = <button className={classes.Button}>{props.title}</button>
  }

  return button
}

export default button
