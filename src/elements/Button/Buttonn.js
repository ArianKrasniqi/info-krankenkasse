import React from "react"

import classes from "./Buttonn.module.css"

const Button = (props) => {
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
        <button
          type={props.element}
          className={classes.Red}
          onClick={props.clicked}
          style={props.style}
        >
          {props.children}
        </button>
      )
      break
    case "redFullWidth":
      button = (
        <button
          type={props.element}
          className={[classes.Red, classes.RedFullWidth].join(" ")}
          onClick={props.clicked}
        >
          {props.children}
        </button>
      )
      break
    case "redMsg":
      button = (
        <button className={classes.Msg} onClick={props.clicked}>
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
