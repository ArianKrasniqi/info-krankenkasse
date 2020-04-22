import React from "react"

import MenuIcon from "../../Menu/MenuIcon/MenuIcon"
import NavigationItems from "./NavigationItems/NavigationItems"

const navigation = props => {
  return (
    <div>
      <MenuIcon open={props.open} menuClicked={props.menuClicked} />
      <NavigationItems
        handleHover={props.handleHover}
        handleLeave={props.handleLeave}
        content={props.content}
      />
    </div>
  )
}

export default navigation
