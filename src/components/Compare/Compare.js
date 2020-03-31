import React from "react"

import Text from "../../elements/Text/Text"
import Button from "../../elements/Button/Button"
import CompareForm from "./CompareForm/CompareForm"

import classes from "./Compare.module.css"

const compare = () => (
  <div className={classes.Compare}>
    <div>
      <Text type="compareSubtitle">Krankenkassenvergleich 2020</Text>
      <Button type="white">Jetzt vergleichen</Button>
      <Text type="paragraph">
        Möchten Sie Prämien einsparen? Hier finden Sie alle Prämien für den
        Krankenkassen Wechsel
      </Text>
    </div>
    <CompareForm />
  </div>
)

export default compare
