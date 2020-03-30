import React from "react"
import { Link } from "gatsby"

import classes from "./List.module.css"

export default props => (
  <div className={classes.List}>
    <p className={classes.Letter}>{props.letter}</p>
    <ul>
      {props.data.map((data, index) => {
        const link = data
          .toLowerCase()
          .replace(" ", "-")
          .replace("ü", "ue")
          .replace("ä", "ae")
          .replace("(", "")
          .replace(")", "")
        return (
          <li key={`${data}-${index}`}>
            <Link to={`/${link}`}>{data}</Link>
          </li>
        )
      })}
    </ul>
  </div>
)
