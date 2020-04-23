import React from "react"

import classes from "./Price.module.css"

const Price = props => {
  const priceClasses = props.active
    ? [classes.Price, classes.Active].join(" ")
    : classes.Price
  return (
    <div
      role="button"
      tabIndex={0}
      className={priceClasses}
      onClick={props.clicked}
      onKeyDown={props.clicked}
    >
      {props.children} <br /> {props.content} <span> {props.price}CHF </span>
    </div>
  )
}

export default Price
