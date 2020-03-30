import React from "react"

import classes from "./Lists.module.css"
import List from "./List/List"

const Lists = props => {
  const keys = Object.keys(props.data)
  return (
    <div className={classes.Lists}>
      {keys.map((key, index) => {
        return <List key={key} letter={key} data={props.data[key]} />
      })}
    </div>
  )
}

export default Lists
