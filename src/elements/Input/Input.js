import React from "react"

import TextField from "@material-ui/core/TextField"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers"

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
          defaultValue={props.defaultValue}
          helperText={props.helperText}
          onChange={event => props.changed(event)}
          onClick={event => props.changed(event)}
        />
      )
      break
    case "textInputHalf":
      input = (
        <TextField
          className={[classes.inputText, classes.Half].join(" ")}
          id={props.id}
          key={props.id}
          label={props.label}
          defaultValue=""
          helperText={props.helperText}
        />
      )
      break
    case "textInputQuarter":
      input = (
        <TextField
          className={[classes.inputText, classes.Quarter].join(" ")}
          id={props.id}
          key={props.id}
          label={props.label}
          defaultValue=""
          helperText={props.helperText}
        />
      )
      break
    case "numberInput":
      input = (
        <TextField
          type="number"
          className={classes.inputText}
          id={props.id}
          label={props.label}
          defaultValue={props.defaultValue}
          helperText={props.helperText}
          onChange={event => props.changed(event)}
          onClick={event => props.changed(event)}
        />
      )
      break

    case "selectInput":
      if (props.options) {
        options = props.options.map((option, index) => {
          return (
            <MenuItem
              id={`${index}-${option}`}
              key={`${index}-${option}`}
              value={option}
            >
              {option}
            </MenuItem>
          )
        })
      }

      input = (
        <FormControl className={classes.SelectInput} style={props.style}>
          <InputLabel id="demo-simple-select-helper-label">
            {props.label}
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id={props.id}
            key={props.id}
            value={""}
            // onChange={handleChange}
          >
            <MenuItem id="none" key="none" value="">
              <em>None</em>
            </MenuItem>
            {options}
          </Select>
          <FormHelperText>{props.helperText}</FormHelperText>
        </FormControl>
      )
      break
    case "inputFullWidth":
      if (props.options) {
        options = props.options.map((option, index) => {
          return (
            <MenuItem
              value={option}
              id={`${index}-${option}`}
              key={`${index}-${option}`}
            >
              {option}
            </MenuItem>
          )
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
            key={props.id}
            value={""}
            // onChange={handleChange}
          >
            <MenuItem id="none" key="none" value="">
              <em>None</em>
            </MenuItem>
            {options}
          </Select>
          <FormHelperText>{props.helperText}</FormHelperText>
        </FormControl>
      )
      break

    case "textarea":
      input = (
        <TextField
          style={props.style}
          id={props.id}
          key={props.id}
          label={props.label}
          defaultValue=""
          helperText={props.helperText}
          multiline
          rows="4"
        />
      )
      break

    case "datePicker":
      return (
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          // value={selectedDate}
          // onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      )
      break

    default:
      input = (
        <TextField
          id={props.id}
          key={props.id}
          label={props.label}
          defaultValue=""
          helperText={props.helperText}
        />
      )
  }

  return input
}

export default input
