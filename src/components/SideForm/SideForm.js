import React from "react"

import Text from "../../elements/Text/Text"
import Input from "../../elements/Input/Input"

import classes from "./SideForm.module.css"

const compare = () => (
  <div className={classes.SideForm}>
    <Text type="sideformSubtitle">Rückruf anfordern</Text>
    <Text type="paragraph">
      Hinterlassen Sie einfach Ihre Angaben und wir rufen Sie zurück.
    </Text>

    <label for="male">Herr</label>
    <input type="radio" name="" id="male" />
    <label for="female">Frau</label>
    <input type="radio" name="" id="female" />

    <div>
      <Input type="textInput" label="Vorname" />
      <Input type="textInput" label="Vorname" />
    </div>
  </div>
)

export default compare
