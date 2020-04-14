import React from "react"

import classes from "./Price.module.css"

const Price = props => {
  const priceClasses = props.active
    ? [classes.Price, classes.Active].join(" ")
    : classes.Price
  return (
    <div className={priceClasses}>
      {props.children} <br /> ab <span> {props.price}CHF </span>
    </div>
  )
}

export default Price
