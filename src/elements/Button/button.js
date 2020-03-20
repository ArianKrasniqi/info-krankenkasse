import React from "react"

import classes from "./button.module.css"

const button = props => {
  let button = ""
  switch (props.type) {
    case "cover":
      button = <button className={classes.Button}>{props.children}</button>
      break
    case "white":
      button = <button className={classes.White}>{props.children}</button>
      break
    case "red":
      button = <button className={classes.Red}>{props.children}</button>
      break
    case "redFullWidth":
      button = (
        <button className={[classes.Red, classes.RedFullWidth].join(" ")}>
          {props.children}
        </button>
      )
      break

    default:
      button = <button>{props.children}</button>
  }

  return button
}

export default button
