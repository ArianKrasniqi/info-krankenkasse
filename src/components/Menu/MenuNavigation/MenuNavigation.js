import React from "react"
import { Link } from "gatsby"

import classes from "./MenuNavigation.module.css"

const MenuNavigation = () => (
  <ul className={classes.Links}>
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

export default MenuNavigation
