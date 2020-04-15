import React, { useState } from "react"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Menu from "../Menu/Menu"
import Modal from "../../elements/Modal/Modal"

import classes from "./Layout.module.css"

const Layout = props => {
  const [open, setOpen] = useState(false)

  return (
    <div className={classes.Layout}>
      <Modal>AA</Modal>
      <Menu open={open}></Menu>
      <Header
        open={open}
        menuClicked={() => {
          setOpen(!open)
        }}
      />
      <div className={classes.Inner}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
