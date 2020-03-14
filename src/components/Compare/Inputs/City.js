import React from "react"

import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

const postalCode = () => (
  <FormControl>
    <InputLabel id="demo-simple-select-helper-label">Ort</InputLabel>
    <Select
      labelId="demo-simple-select-helper-label"
      id="demo-simple-select-helper"
      value={""}
      // onChange={handleChange}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
    </Select>
    <FormHelperText>Some important helper text</FormHelperText>
  </FormControl>
)

export default postalCode
