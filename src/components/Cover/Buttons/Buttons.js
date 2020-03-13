import React from "react"

import Button from "../../../elements/Button/Button"
import classes from "./Buttons.module.css"

const buttons = () => (
  <div className={classes.Buttons}>
    <Button type="cover">Prämien 2020 vergleichen</Button>
    <Button type="cover">Krankenkasse wechseln</Button>
    <Button type="cover">Krankenkasse kündigen</Button>
  </div>
)

export default buttons
