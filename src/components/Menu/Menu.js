import React from "react"

import classes from "./Menu.module.css"
import MenuNavigation from "./MenuNavigation/MenuNavigation"

const Menu = props => {
  return (
    <div
      className={
        props.open
          ? [classes.Menu, classes.Open].join(" ")
          : [classes.Menu, classes.Close].join(" ")
      }
    >
      <MenuNavigation />
    </div>
  )
}

export default Menu
