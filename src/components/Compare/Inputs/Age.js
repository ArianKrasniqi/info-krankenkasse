import React from "react"

import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import TextField from "@material-ui/core/TextField"

const age = () => (
  <FormControl>
    <InputLabel id="demo-simple-select-helper-label">Altersgruppe</InputLabel>
    <Select
      labelId="demo-simple-select-helper-label"
      id="demo-simple-select-helper"
      value={""}
      // onChange={handleChange}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={"0-18 Jahre"}>0-18 Jahre</MenuItem>
      <MenuItem value={"19-25 Jahre"}>19-25 Jahre</MenuItem>
      <MenuItem value={"ab 25 Jahre"}>ab 25 Jahre</MenuItem>
    </Select>
    <FormHelperText>Some important helper text</FormHelperText>
  </FormControl>
)

export default age
