import React from "react"

import MenuIcon from "../../Menu/MenuIcon/MenuIcon"
import NavigationItems from "./NavigationItems/NavigationItems"

const navigation = props => {
  return (
    <div>
      <MenuIcon open={props.open} menuClicked={props.menuClicked} />
      <NavigationItems />
    </div>
  )
}

export default navigation
