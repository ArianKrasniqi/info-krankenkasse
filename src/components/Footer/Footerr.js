import React from "react"
import { Link } from "gatsby"

import classes from "./footer.module.css"

const Footer = (props) => {
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
              <a
                className={classes.Link}
                href="/"
                onClick={(event) => props.clicked(event, "impressum")}
              >
                Impressum
              </a>
            </li>
            <li>
              <a
                className={classes.Link}
                href="/"
                onClick={(event) => props.clicked(event, "datenschutz")}
              >
                Datenschutz
              </a>
            </li>
            <li>
              <a
                className={classes.Link}
                href="/"
                onClick={(event) => props.clicked(event, "rechtliches")}
              >
                Haftungsausschluss und Rechtliches
              </a>
            </li>
          </ul>
        </nav>
        <p className={classes.Copyright}>
          Copyright © 2020 krankenkassenadmin.ch
        </p>
      </div>
    </footer>
  )
}

export default Footer
