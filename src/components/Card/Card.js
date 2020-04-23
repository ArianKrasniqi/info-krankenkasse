import React from "react"

import Link from "../../elements/Link/Link"
import Text from "../../elements/Text/Text"
import CancelImg from "../../assets/cancel.jpg"
import CompareImg from "../../assets/compare.jpg"
import ChangeImg from "../../assets/change.jpg"
import InsurancesImg from "../../assets/insurances.jpg"
import GlossaryImg from "../../assets/glossary.jpg"
import PregnancyImg from "../../assets/pregnancy.jpg"

import classes from "./Card.module.css"

const Card = props => {
  let image = CancelImg
  if (props.image === "Compare") {
    image = CompareImg
  } else if (props.image === "Change") {
    image = ChangeImg
  } else if (props.image === "Insurances") {
    image = InsurancesImg
  } else if (props.image === "Glossary") {
    image = GlossaryImg
  } else if (props.image === "Pregnancy") {
    image = PregnancyImg
  }

  let cardClass = classes.Card
  if (props.side === "right") {
    cardClass = [classes.Card, classes.Right].join(" ")
  }
  return (
    <div className={cardClass} key={props.title} style={props.style}>
      <img className={classes.Image} src={image} alt=" " />
      <div className={classes.Content}>
        <Link to={props.to} type="cardLink">
          {props.title}
        </Link>
        <Text type="cardParagraph">{props.children}</Text>
        <Link to={props.to} type="redLink">
          {props.btnText}
        </Link>
      </div>
    </div>
  )
}

export default Card
