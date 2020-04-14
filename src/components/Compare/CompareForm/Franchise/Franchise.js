import React from "react"

import classes from "./Franchise.module.css"

const Franchise = props => {
  const franchiseClasses = props.active
    ? [classes.Franchise, classes.Active].join(" ")
    : classes.Franchise
  return (
    <div className={franchiseClasses} id={props.key} key={props.key}>
      {props.children}
    </div>
  )
}

export default Franchise
