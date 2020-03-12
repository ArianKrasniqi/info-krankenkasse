import React from "react"

import classes from "./languages.module.css"

const languages = () => {
  return (
    <ul className={classes.Languages}>
      <li>
        <a active>DE</a>
      </li>
      <li>
        <a>FR</a>
      </li>
      <li>
        <a>IT</a>
      </li>
      <li>
        <a>EN</a>
      </li>
    </ul>
  )
}

export default languages
