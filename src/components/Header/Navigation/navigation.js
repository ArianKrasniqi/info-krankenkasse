import React from "react"
import { Link } from "gatsby"

import classes from "./Navigation.module.css"

const header = () => {
  return (
    <ul className={classes.Nav}>
      <li>
        <Link to="/" className={classes.Link}>
          Startseite
        </Link>
      </li>
      <li>
        <Link to="/informationen" className={classes.Link}>
          Informationen
        </Link>
      </li>
      <li>
        <Link to="/krankenkasse-schweiz" className={classes.Link}>
          Krankenkassen
        </Link>
      </li>
      <li>
        <Link to="/praemienrechner" className={classes.Link}>
          Prämienrechner
        </Link>
      </li>
      <li>
        <Link to="/kontakt" className={classes.Link}>
          Kontakt
        </Link>
      </li>
    </ul>
  )
}

export default header
