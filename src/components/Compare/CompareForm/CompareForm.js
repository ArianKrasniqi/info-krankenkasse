import React from "react"

import Text from "../../../elements/Text/Text"
import Button from "../../../elements/Button/Button"
import CompareInputs from "./CompareInputs/CompareInputs"

import classes from "./CompareForm.module.css"

const compareForm = () => (
  <div className={classes.CompareForm} style={{ display: "block" }}>
    <div className={classes.Steps}></div>
    <Text type="formTitle">Krankenkassen Prämien 2020 vergleichen</Text>
    <div className={classes.FormInputs}>
      <CompareInputs />
      {/* <Button type="red"> Jetzt Prämie vergleichen </Button> */}
    </div>
  </div>
)

export default compareForm
