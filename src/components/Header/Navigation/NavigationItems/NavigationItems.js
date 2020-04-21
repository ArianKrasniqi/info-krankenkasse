import React, { useState } from "react"
import { Link } from "gatsby"

import classes from "./NavigationItems.module.css"

const NavigationItems = props => {
  const pathname =
    typeof window !== `undefined` ? window.location.pathname : null

  return (
    <ul className={classes.Nav}>
      <li>
        <Link
          onMouseLeave={props.handleLeave}
          to="/"
          className={
            pathname === "/"
              ? [classes.Link, classes.Active].join(" ")
              : classes.Link
          }
        >
          Startseite
        </Link>
      </li>
      <li>
        <Link
          onMouseEnter={props.handleHover}
          to="/informationen"
          className={
            pathname === "/informationen"
              ? [classes.Link, classes.Active].join(" ")
              : classes.Link
          }
        >
          Informationen
        </Link>
      </li>
      <li>
        <Link
          onMouseLeave={props.handleLeave}
          to="/krankenkasse"
          className={
            pathname === "/krankenkasse"
              ? [classes.Link, classes.Active].join(" ")
              : classes.Link
          }
        >
          Krankenkassen
        </Link>
      </li>
      <li>
        <Link
          onMouseLeave={props.handleLeave}
          to="/praemienrechner"
          className={
            pathname === "/praemienrechner"
              ? [classes.Link, classes.Active].join(" ")
              : classes.Link
          }
        >
          Prämienrechner
        </Link>
      </li>
      <li>
        <Link
          onMouseEnter={props.handleHover}
          to="/kontakt"
          className={
            pathname === "/kontakt"
              ? [classes.Link, classes.Active].join(" ")
              : classes.Link
          }
        >
          Kontakt
        </Link>
      </li>
    </ul>
  )
}

export default NavigationItems
