import React from "react"

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

    <div className={classes.CompareForm}>
      <div className={classes.Steps}></div>
      <Text type="formTitle">Krankenkassen Prämien 2020 vergleichen</Text>
      <div className={classes.FormInputs}>
        <select className={classes.LargeSelect} name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <input type="text" />
        <select className={classes.ShortSelect} name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select className={classes.ShortSelect} name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
    </div>
  </div>
)

export default compare
