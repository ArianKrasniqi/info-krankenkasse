import React from "react"

import classes from "./MenuIcon.module.css"

const menuIcon = props => {
  return (
    <div
      className={
        props.open
          ? [classes.MenuIcon, classes.Open].join(" ")
          : classes.MenuIcon
      }
      role="button"
      tabIndex="0"
      onClick={props.menuClicked}
    >
      <div className={classes.HamMenu}>
        <div className={classes.Bar}></div>
      </div>
    </div>
  )
}

export default menuIcon