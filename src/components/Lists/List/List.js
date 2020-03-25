import React from "react"
import { Link } from "gatsby"

import classes from "./List.module.css"

export default props => (
  <div className={classes.List}>
    <p className={classes.Letter}>{props.letter}</p>
    <ul>
      {props.data.map(data => {
        const link = data.toLowerCase().replace(" ", "-")
        return (
          <li>
            <Link to={`/${link}`}>{data}</Link>
          </li>
        )
      })}
    </ul>
  </div>
)
