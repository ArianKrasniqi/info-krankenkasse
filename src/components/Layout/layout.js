import React, { useState } from "react"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Menu from "../Menu/Menu"
import Modal from "../../elements/Modal/Modal"
import Text from "../../elements/Text/Text"
import * as modalContent from "../../content/modals/modals"

import classes from "./Layout.module.css"

//Uppercase
const Layout = props => {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  const [modal, setModal] = useState("")

  const closeModalHandler = () => {
    setShow(false)
  }

  const openModalHandler = (event, type) => {
    event.preventDefault()
    setModal(type)
    setShow(true)
  }

  return (
    <div className={classes.Layout}>
      <Modal show={show} clicked={closeModalHandler}>
        {modalContent[modal] !== undefined
          ? modalContent[modal].map(content => {
              if (Object.keys(content)[0] === "title") {
                return <Text type="modalTitle">{content.title}</Text>
              } else if (Object.keys(content)[0] === "description") {
                return (
                  <Text type="modalDescription">{content.description}</Text>
                )
              } else {
                return null
              }
            })
          : null}
      </Modal>
      <Menu open={open}></Menu>
      <Header
        open={open}
        menuClicked={() => {
          setOpen(!open)
        }}
      />
      <div className={classes.Inner}>{props.children}</div>
      <Footer clicked={(event, type) => openModalHandler(event, type)} />
    </div>
  )
}

export default Layout
