import React from "react"

import Button from "../../../elements/Button/button"
import classes from "./Buttons.module.css"

const buttons = () => (
  <div className={classes.Buttons}>
    <Button type="cover" title="Prämien 2020 vergleichen" />
    <Button type="cover" title="Krankenkasse wechseln" />
    <Button type="cover" title="Krankenkasse kündigen" />
  </div>
)

export default buttons
