import React from "react"

import classes from "./Modal.module.css"
import Backdrop from "../Backdrop/Backdrop"
import CloseRoundedIcon from "@material-ui/icons/CloseRounded"

const Modal = props => (
  <React.Fragment>
    <Backdrop show={props.show} clicked={props.clicked} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      <div className={classes.Close} onClick={props.clicked}>
        <CloseRoundedIcon style={{ fontSize: 30 }} />
      </div>
      {props.children}
    </div>
  </React.Fragment>
)
export default Modal
