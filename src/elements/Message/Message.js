import React from "react"

import Button from "../Button/Buttonn"
import Text from "../Text/Text"
import classes from "./Message.module.css"
import * as content from "../../content/elements/message"

const Message = (props) => {
  let lang =
    props.lang === "en"
      ? content.en
      : props.lang === "fr"
      ? content.fr
      : props.lang === "it"
      ? content.it
      : content.de

  let button = (
    <Button type="redMsg" clicked={() => props.msgHandler(false)}>
      {lang.button}
    </Button>
  )

  if (!props.btnShow) {
    button = null
  }

  return props.show ? (
    <div className={classes.Message}>
      <Text type="paragraph">{lang.title}</Text>
      <Text type="title">{lang.bigTitle}</Text>
      <Text type="smallParagraph">{lang.text}</Text>
      {button}
    </div>
  ) : null
}
export default Message
