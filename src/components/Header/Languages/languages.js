import React from "react"

import classes from "./Languages.module.css"

const languages = () => {
  return (
    <ul className={classes.Languages}>
      <li>
        <a href="/">DE</a>
      </li>
      <li>
        <a href="/">FR</a>
      </li>
      <li>
        <a href="/">IT</a>
      </li>
      <li>
        <a href="/">EN</a>
      </li>
    </ul>
  )
}

export default languages
