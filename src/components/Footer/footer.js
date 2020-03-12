import React from "react"
import { Link } from "gatsby"

import classes from "./footer.module.css"

const footer = () => {
  return (
    <footer className={classes.Footer}>
      <div>
        <nav>
          <ul>
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

          <ul>
            <li>
              <a className={classes.Link}>Impressum</a>
            </li>
            <li>
              <a className={classes.Link}>Datenschutz</a>
            </li>
            <li>
              <a className={classes.Link}>Haftungsausschluss und Rechtliches</a>
            </li>
          </ul>
        </nav>
        <p class={classes.Copyright}>Copyright © 2020 krankenkassenadmin.ch</p>
      </div>
    </footer>
  )
}

export default footer
