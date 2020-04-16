import React from "react"
import { Link } from "gatsby"

import classes from "./Link.module.css"

const link = props => {
  let link = ""
  switch (props.type) {
    case "whiteLink":
      link = (
        <Link to={props.to} className={classes.WhiteLink}>
          {props.children}
        </Link>
      )
      break
    case "redLink":
      link = (
        <Link to={props.to} className={classes.RedLink}>
          {props.children}
        </Link>
      )
      break
    case "bottomLink":
      link = (
        <Link to={props.to} className={classes.BottomLink}>
          {props.children}
        </Link>
      )
      break
    case "cardLink":
      link = (
        <Link to={props.to} className={classes.CardLink}>
          {props.children}
        </Link>
      )
      break

    default:
      link = <Link to={props.to}>{props.children}</Link>
  }

  return link
}

export default link
