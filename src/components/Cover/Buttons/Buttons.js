import React from "react"

import Button from "../../../elements/Button/Button"
import classes from "./Buttons.module.css"

const buttons = () => (
  <div>
    <div className={classes.Buttons}>
      <Button type="cover">Prämien 2020 vergleichen</Button>
      <Button type="cover">Krankenkasse wechseln</Button>
      <Button type="cover">Krankenkasse kündigen</Button>
    </div>

    <div className={classes.MobileButtons}>
      <button>Prämien 2020 vergleichen</button>
      <button>Krankenkasse wechseln</button>
      <button>Krankenkasse kündigen</button>
    </div>
  </div>
)

export default buttons
