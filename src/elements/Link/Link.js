import React from "react"
import { Link } from "gatsby"

import classes from "./Link.module.css"

const LinkComp = (props) => {
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
        <Link to={props.to} className={[classes.RedLink, "RedBack"].join(" ")}>
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
    case "coverLink":
      link = (
        <Link to={props.to} className={classes.CoverLink}>
          {props.children}
        </Link>
      )
      break

    default:
      link = <Link to={props.to}>{props.children}</Link>
  }

  return link
}

export default LinkComp
