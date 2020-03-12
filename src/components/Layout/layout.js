import React from "react"

import Header from "../Header/header"
import Footer from "../Footer/footer"

import classes from "./layout.module.css"

const layout = ({ children }) => {
  return (
    <div className={classes.Layout}>
      <Header />
      <div className={classes.Inner}>{children}</div>
      <Footer />
    </div>
  )
}

export default layout
