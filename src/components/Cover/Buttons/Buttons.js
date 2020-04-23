import React from "react"

import Link from "../../../elements/Link/Link"
import classes from "./Buttons.module.css"

const Buttons = props => (
  <div>
    <div className={classes.Buttons}>
      <Link to="/praemienrechner" type="coverLink">
        {props.texts[0]}
      </Link>
      <Link to="/informationen/krankenkasse-wechseln" type="coverLink">
        {props.texts[1]}
      </Link>
      <Link to="/informationen/krankenkasse-kuendigen" type="coverLink">
        {props.texts[2]}
      </Link>
    </div>

    <div className={classes.MobileButtons}>
      <Link to="/praemienrechner" type="coverLink">
        {props.texts[0]}
      </Link>
      <Link to="/informationen/krankenkasse-wechseln" type="coverLink">
        {props.texts[1]}
      </Link>
      <Link to="/informationen/krankenkasse-kuendigen" type="coverLink">
        {props.texts[2]}
      </Link>
    </div>
  </div>
)

export default Buttons
