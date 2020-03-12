import React from "react"

import Buttons from "./Buttons/Buttons"
import classes from "./Cover.module.css"

const cover = () => (
  <div className={classes.Cover}>
    <img
      src="https://krankenkassenadmin.ch/assets/img/banner_startseite.jpg"
      alt=""
    />
    <Buttons />
  </div>
)

export default cover
