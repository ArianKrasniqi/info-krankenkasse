import React from "react"

import Link from "../../elements/Link/Link"
import Text from "../../elements/Text/Text"
import Button from "../../elements/Button/Button"

import classes from "./Card.module.css"

const card = props => {
  let cardClass = classes.Card
  if (props.side === "right") {
    cardClass = [classes.Card, classes.Right].join(" ")
  }
  return (
    <div className={cardClass}>
      <img className={classes.Image} src={props.src} alt=" " />
      <div className={classes.Content}>
        <Link to={props.to} type="cardLink">
          {props.title}
        </Link>
        <Text type="cardParagraph">{props.children}</Text>
        <Button type="red">Weiterlesen</Button>
      </div>
    </div>
  )
}

export default card
