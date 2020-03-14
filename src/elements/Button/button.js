import React from "react"

import classes from "./button.module.css"

const button = props => {
  let button = ""
  switch (props.type) {
    case "cover":
      button = <button className={classes.Button}>{props.children}</button>
      break
    case "compare":
      button = <button className={classes.Compare}>{props.children}</button>
      break
    case "compareSubmit":
      button = (
        <button className={classes.CompareSubmit}>{props.children}</button>
      )
      break

    default:
      button = <button>{props.children}</button>
  }

  return button
}

export default button
