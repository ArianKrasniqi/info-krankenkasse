import React from "react"

import Button from "../../../elements/Button/Button"
import Link from "../../../elements/Link/Link"
import classes from "./Buttons.module.css"

const buttons = () => (
  <div>
    <div className={classes.Buttons}>
      <Link to="/praemienrechner" type="coverLink">
        Prämien 2020 vergleichen
      </Link>
      <Link to="/informationen/krankenkasse-wechseln" type="coverLink">
        Krankenkasse wechseln
      </Link>
      <Link to="/informationen/krankenkasse-kuendigen" type="coverLink">
        Krankenkasse kündigen
      </Link>
    </div>

    <div className={classes.MobileButtons}>
      <Link to="/praemienrechner" type="coverLink">
        Prämien 2020 vergleichen
      </Link>
      <Link to="/informationen/krankenkasse-wechseln" type="coverLink">
        Krankenkasse wechseln
      </Link>
      <Link to="/informationen/krankenkasse-kuendigen" type="coverLink">
        Krankenkasse kündigen
      </Link>
    </div>
  </div>
)

export default buttons
