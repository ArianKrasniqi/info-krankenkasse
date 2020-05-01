import React from "react"

import classes from "./Spinner.module.css"

const Spinner = (props) => {
  return props.show ? (
    <div className={classes.Loading} style={props.style}></div>
  ) : null
}
export default Spinner
