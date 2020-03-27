import React from "react"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import classes from "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={classes.Layout}>
      <Header />
      <div className={classes.Inner}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
