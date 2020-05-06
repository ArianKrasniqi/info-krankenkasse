import React from "react"

import classes from "./RightCard.module.css"

import Text from "../Text/Text"
import Button from "../Button/Buttonn"

const RightCard = (props) => (
  <div className={classes.Card}>
    {/* <h4>{props.title}</h4> */}
    <Text
      type="compareSmallSubtitle"
      style={{ fontSize: "20px", margin: "6px" }}
    >
      {props.title}
    </Text>
    <Text type="paragraph" style={{ fontSize: "15px" }}>
      {props.children}
    </Text>
    <Button
      type="redFullWidth"
      style={{
        fontSize: "16px",
        width: "90%",
      }}
    >
      {props.buttonText}
    </Button>
  </div>
)

export default RightCard
