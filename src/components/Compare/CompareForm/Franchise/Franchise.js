import React from "react"

import classes from "./Franchise.module.css"

const Franchise = props => {
  const franchiseClasses = props.active
    ? [classes.Franchise, classes.Active].join(" ")
    : classes.Franchise
  return (
    <div
      role="button"
      tabIndex={0}
      className={franchiseClasses}
      id={props.id}
      key={props.id}
      onClick={props.clicked}
      onKeyDown={props.clicked}
    >
      {props.children}
    </div>
  )
}

export default Franchise
