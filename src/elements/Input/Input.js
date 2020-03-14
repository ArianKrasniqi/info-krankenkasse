import React from "react"

import TextField from "@material-ui/core/TextField"

import classes from "./Input.module.css"

const input = props => {
  let input = ""
  switch (props.type) {
    case "textInput":
      input = (
        <TextField
          className={classes.inputText}
          id="standard-helperText"
          label={props.label}
          defaultValue=""
          helperText={props.helperText}
        />
      )
      break

    default:
      input = (
        <TextField
          id="standard-helperText"
          label={props.label}
          defaultValue=""
          helperText={props.helperText}
        />
      )
  }

  return input
}

export default input
