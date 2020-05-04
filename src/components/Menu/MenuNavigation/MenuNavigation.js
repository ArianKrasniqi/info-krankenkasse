import React from "react"
import { Link } from "gatsby"

import classes from "./MenuNavigation.module.css"

const MenuNavigation = () => {
  const pathname =
    typeof window !== `undefined` ? window.location.pathname : null
  return (
    <ul className={classes.Links}>
      <li>
        <Link
          to="/"
          className={classes.Link}
          style={pathname === "/" ? { fontWeight: "500" } : null}
        >
          Startseite
        </Link>
      </li>
      <li>
        <Link
          to="/informationen"
          className={classes.Link}
          style={pathname === "/informationen" ? { fontWeight: "500" } : null}
        >
          Informationen
        </Link>
      </li>
      <li>
        <Link
          to="/krankenkasse"
          className={classes.Link}
          style={pathname === "/krankenkasse" ? { fontWeight: "500" } : null}
        >
          Krankenkassen
        </Link>
      </li>
      <li>
        <Link
          to="/praemienrechner"
          className={classes.Link}
          style={pathname === "/praemienrechner" ? { fontWeight: "500" } : null}
        >
          Prämienrechner
        </Link>
      </li>
      <li>
        <Link
          to="/kontakt"
          className={classes.Link}
          style={pathname === "/kontakt" ? { fontWeight: "500" } : null}
        >
          Kontakt
        </Link>
      </li>
    </ul>
  )
}

export default MenuNavigation
