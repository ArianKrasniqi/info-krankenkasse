import React from "react"
import { Link } from "gatsby"

import classes from "./NavigationItems.module.css"

const NavigationItems = props => {
  const pathname = window.location.pathname
  return (
    <ul className={classes.Nav}>
      <li>
        <Link
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
