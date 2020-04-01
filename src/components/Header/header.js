import React from "react"

import Navigation from "./Navigation/Navigation"
import Languages from "./Languages/Languages"

import classes from "./Header.module.css"

const header = props => {
  return (
    <header className={classes.Header}>
      <nav>
        <Navigation open={props.open} menuClicked={props.menuClicked} />
        <Languages />
      </nav>
    </header>
  )
}

export default header
