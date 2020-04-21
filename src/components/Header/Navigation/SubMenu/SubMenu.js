import React from "react"
import { Link } from "gatsby"

import classes from "./SubMenu.module.css"

const SubMenu2 = props => {
  return (
    <div
      className={classes.SubMenu}
      onMouseLeave={props.handleLeave}
      style={
        props.show
          ? { transform: "translateY(0px)", opacity: "1" }
          : { transform: "translateY(-100vh)", opacity: "0" }
      }
    >
      <div class={classes.Content}>
        <ul class={classes.Informationen}>
          <li>
            <Link to="/informationen/krankenkasse-kuendigen">
              Krankenkasse kündigen
            </Link>
          </li>
          <li>
            <Link to="/informationen/krankenkasse-vergleichen">
              Krankenkasse vergleichen
            </Link>
          </li>
          <li>
            <Link to="/informationen/krankenkasse-wechseln">
              Krankenkasse wechseln
            </Link>
          </li>
          <li>
            <Link to="/informationen/zusatzversicherungen">
              Zusatzversicherungen
            </Link>
          </li>
          <li>
            <Link to="/informationen/glossar">Glossar</Link>
          </li>
          <li>
            <Link to="/informationen/vorgeburtliche-anmeldung">
              Vorgeburtliche anmeldung
            </Link>
          </li>
        </ul>

        <ul class={classes.Contact}>
          <li>
            <Link to="/kontakt">Kontaktformular</Link>
          </li>
          <li>
            <Link to="/beratung-anfordern">Krankenkassen Beratung</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SubMenu2
