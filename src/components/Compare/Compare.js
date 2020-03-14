import React from "react"

import Insurance from "./Inputs/Insurance"
import PostalCode from "./Inputs/PostalCode"
import City from "./Inputs/City"
import Age from "./Inputs/Age"

import Text from "../../elements/Text/Text"
import Button from "../../elements/Button/Button"

import classes from "./Compare.module.css"

const compare = () => (
  <div className={classes.Compare}>
    <Text type="compareSubtitle">Krankenkassenvergleich 2020</Text>
    <Button type="compare">Jetzt vergleichen</Button>
    <Text type="paragraph">
      Möchten Sie Prämien einsparen? Hier finden Sie alle Prämien für den
      Krankenkassen Wechsel
    </Text>

    <div className={classes.CompareForm} style={{ display: "block" }}>
      <div className={classes.Steps}></div>
      <Text type="formTitle">Krankenkassen Prämien 2020 vergleichen</Text>
      <div className={classes.FormInputs}>
        <Insurance />
        <PostalCode />
        <City />
        <Age />
        <Button type="compareSubmit"> Jetzt Prämie vergleichen </Button>
      </div>
    </div>
  </div>
)

export default compare
