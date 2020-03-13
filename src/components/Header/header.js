import React from "react"

import Navigation from "./Navigation/Navigation"
import Languages from "./Languages/Languages"

import classes from "./Header.module.css"

const header = () => {
  return (
    <header className={classes.Header}>
      <nav>
        <Navigation />
        <Languages />
      </nav>
    </header>
  )
}

export default header
