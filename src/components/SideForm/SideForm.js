import React from "react"

import Text from "../../elements/Text/Text"
import Button from "../../elements/Button/Button"
import SideFormInputs from "./SideFormInputs/SideFormInputs"

import classes from "./SideForm.module.css"

const sideForm = () => (
  <div className={classes.SideForm}>
    <Text type="sideformSubtitle">Rückruf anfordern</Text>
    <Text type="paragraph">
      Hinterlassen Sie einfach Ihre Angaben und wir rufen Sie zurück.
    </Text>

    <label for="male">Herr</label>
    <input type="radio" name="gendre" id="male" />
    <label for="female">Frau</label>
    <input type="radio" name="gendre" id="female" />

    <div className={classes.Inputs}>
      <SideFormInputs />
      <Button type="redFullWidth">Jetzt Prämie vergleichen</Button>
      <Text type="smallParagraph">
        Mit dem Abschicken des Formulars akzeptieren Sie die Nutzungsbedingungen
        und bestätigen diese gelesen zu haben.
      </Text>
    </div>
  </div>
)

export default sideForm
