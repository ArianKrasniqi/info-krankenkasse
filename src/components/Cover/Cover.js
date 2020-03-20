import React from "react"

import Buttons from "./Buttons/Buttons"
import classes from "./Cover.module.css"

const cover = () => (
  <div className={classes.Cover}>
    <img
      src="https://images.unsplash.com/photo-1556909114-16a2409962b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
      alt=""
    />
    <Buttons />
  </div>
)

export default cover
