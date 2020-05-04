import React from "react"
import { Link } from "gatsby"

import classes from "./SubMenu.module.css"

const SubMenu = (props) => {
  return (
    <div
      className={classes.SubMenu}
      onMouseLeave={props.handleLeave}
      role="button"
      tabIndex={0}
      style={
        props.show
          ? { transform: "translateY(0px)", opacity: "1" }
          : { transform: "translateY(-100vh)", opacity: "0" }
      }
    >
      <div className={classes.Content}>
        <ul className={classes.Informationen}>
          <li>
            <Link to="/informationen/krankenkasse-kuendigen">
              {props.content.subpages[0]}
            </Link>
          </li>
          <li>
            <Link to="/informationen/krankenkasse-vergleichen">
              {props.content.subpages[1]}
            </Link>
          </li>
          <li>
            <Link to="/informationen/krankenkasse-wechseln">
              {props.content.subpages[2]}
            </Link>
          </li>
          <li>
            <Link to="/informationen/zusatzversicherungen">
              {props.content.subpages[3]}
            </Link>
          </li>
          <li>
            <Link to="/informationen/glossar">{props.content.subpages[4]}</Link>
          </li>
          <li>
            <Link to="/informationen/vorgeburtliche-anmeldung">
              {props.content.subpages[5]}
            </Link>
          </li>
        </ul>

        <ul className={classes.Contact}>
          <li>
            <Link to="/kontakt">{props.content.subpages[6]}</Link>
          </li>
          <li>
            <Link to="/beratung-anfordern">{props.content.subpages[7]}</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SubMenu
