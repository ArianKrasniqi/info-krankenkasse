import React, { useState } from "react"

import Navigation from "./Navigation/Navigation"
import Languages from "./Languages/Languages"
import SubMenu from "./Navigation/SubMenu/SubMenu"

import classes from "./Header.module.css"

const Header = props => {
  const [showSubMenu, setShowSubMenu] = useState(false)

  const handleHover = () => {
    setShowSubMenu(true)
  }

  const handleLeave = () => {
    setShowSubMenu(false)
  }

  return (
    <div>
      <header className={classes.Header}>
        <nav>
          <Navigation
            open={props.open}
            menuClicked={props.menuClicked}
            handleHover={handleHover}
            handleLeave={handleLeave}
          />
          <Languages />
        </nav>
      </header>
      <SubMenu
        show={showSubMenu}
        handleHover={handleHover}
        handleLeave={handleLeave}
      />
    </div>
  )
}

export default Header
