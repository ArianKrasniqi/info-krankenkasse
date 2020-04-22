import React, { useState } from "react"
import { connect } from "react-redux"

import Navigation from "./Navigation/Navigation"
import Languages from "./Languages/Languages"
import SubMenu from "./Navigation/SubMenu/SubMenu"
import * as content from "../../content/elements/navigation"

import classes from "./Header.module.css"

const Header = props => {
  let lang =
    props.lang === "en"
      ? content.en
      : props.lang === "fr"
      ? content.fr
      : props.lang === "it"
      ? content.it
      : content.de
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
            content={lang}
          />
          <Languages />
        </nav>
      </header>
      <SubMenu
        show={showSubMenu}
        handleHover={handleHover}
        handleLeave={handleLeave}
        content={lang}
      />
    </div>
  )
}
const mapStateToProps = state => {
  return {
    lang: state.lang,
  }
}

export default connect(mapStateToProps)(Header)
