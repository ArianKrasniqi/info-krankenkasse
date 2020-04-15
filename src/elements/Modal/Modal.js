import React from "react"

import classes from "./Modal.module.css"
import Backdrop from "../Backdrop/Backdrop"

const Modal = props => (
  <React.Fragment>
    <Backdrop show={true} />
    <div className={classes.Modal}></div>
  </React.Fragment>
)
export default Modal
