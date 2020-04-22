import React from "react"

import Link from "../../../elements/Link/Link"

import classes from "./Links.module.css"

const cantonInfo = props => (
  <div className={classes.Links}>
    <Link type="whiteLink" to="/praemienrechner">
      {props.text[0]}
    </Link>
    <Link type="whiteLink" to="/praemienrechner">
      {props.text[1]}
    </Link>
    <Link type="whiteLink" to="/praemienrechner">
      {props.text[2]}
    </Link>
  </div>
)

export default cantonInfo
