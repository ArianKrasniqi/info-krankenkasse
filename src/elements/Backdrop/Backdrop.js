import React from "react"

import classes from "./Backdrop.module.css"

const Backdrop = props =>
  props.show ? (
    <div
      className={classes.Backdrop}
      role="button"
      tabIndex={0}
      onClick={props.clicked}
      onKeyDown={props.clicked}
    ></div>
  ) : null

export default Backdrop
