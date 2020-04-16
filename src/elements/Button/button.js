import React from "react"

import classes from "./Button.module.css"

const Button = props => {
  let button = ""
  switch (props.type) {
    case "cover":
      button = <button className={classes.Button}>{props.children}</button>
      break
    case "white":
      button = (
        <button className={classes.White} onClick={props.clicked}>
          {props.children}
        </button>
      )
      break
    case "red":
      button = (
        <button className={classes.Red} style={props.style}>
          {props.children}
        </button>
      )
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

export default Button
