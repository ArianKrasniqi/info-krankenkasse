import React from "react"

import Navigation from "./Navigation/navigation"
import Languages from "./Languages/languages"

import classes from "./header.module.css"

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
