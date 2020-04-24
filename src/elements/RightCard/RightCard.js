import React from "react"

import classes from "./RightCard.module.css"

import Text from "../Text/Text"
import Button from "../Button/Buttonn"

const RightCard = props => (
  <div className={classes.Card}>
    <h4>{props.title}</h4>
    <Text type="paragraph">{props.children}</Text>
    <Button type="redFullWidth">{props.buttonText}</Button>
  </div>
)

export default RightCard
