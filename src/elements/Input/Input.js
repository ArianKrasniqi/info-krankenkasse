import React from "react"

import TextField from "@material-ui/core/TextField"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

import classes from "./Input.module.css"

const input = props => {
  let input = ""
  let options = ""
  switch (props.type) {
    case "textInput":
      input = (
        <TextField
          className={classes.inputText}
          id={props.id}
          label={props.label}
          defaultValue=""
          helperText={props.helperText}
        />
      )
      break
    case "inputFullWidth":
      if (props.options) {
        options = props.options.map(option => {
          return <MenuItem value={option}> {option}</MenuItem>
        })
      }

      input = (
        <FormControl style={{ width: "100%" }}>
          <InputLabel id="demo-simple-select-helper-label">
            {props.label}
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id={props.id}
            value={""}
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {options}
          </Select>
          <FormHelperText>{props.helperText}</FormHelperText>
        </FormControl>
      )
      break

    case "selectInput":
      if (props.options) {
        options = props.options.map(option => {
          return <MenuItem value={option}> {option}</MenuItem>
        })
      }

      input = (
        <FormControl>
          <InputLabel id="demo-simple-select-helper-label">
            {props.label}
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id={props.id}
            value={""}
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {options}
          </Select>
          <FormHelperText>{props.helperText}</FormHelperText>
        </FormControl>
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
