import React from "react"

import classes from "./MenuIcon.module.css"

const MenuIcon = props => {
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
      onKeyDown={props.menuClicked}
    >
      <div className={classes.HamMenu}>
        <div className={classes.Bar}></div>
      </div>
    </div>
  )
}

export default MenuIcon
