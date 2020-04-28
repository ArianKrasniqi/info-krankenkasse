import React from "react"

import classes from "./Text.module.css"

const Text = (props) => {
  let text = ""
  switch (props.type) {
    case "title":
      text = (
        <h1 className={classes.Title} style={props.style}>
          {props.children}
        </h1>
      )
      break
    case "subtitle":
      text = <p className={classes.Subtitle}>{props.children}</p>
      break
    case "smallSubtitle":
      text = (
        <p className={[classes.Subtitle, classes.SmallSubtitle].join(" ")}>
          {props.children}
        </p>
      )
      break
    case "paragraph":
      text = <p className={classes.Paragraph}>{props.children}</p>
      break
    case "cardParagraph":
      let children = props.children
      if (children.length >= 280) {
        children = children.slice(0, 270)
        children = children + "..."
      }
      text = <p className={classes.CardParagraph}>{children}</p>
      break
    case "smallParagraph":
      text = (
        <p className={classes.SmallParagraph} style={props.style}>
          {props.children}
        </p>
      )
      break
    case "listItem":
      text = (
        <li className={[classes.Paragraph, classes.ListItem].join(" ")}>
          {props.children}
        </li>
      )
      break
    case "compareSubtitle":
      text = <p className={classes.CompareSubtitle}>{props.children}</p>
      break
    case "compareSmallSubtitle":
      text = (
        <p className={classes.CompareSmallSubtitle} style={props.style}>
          {props.children}
        </p>
      )
      break
    case "formTitle":
      text = (
        <p className={[classes.formTitle, classes.Subtitle].join(" ")}>
          {props.children}
        </p>
      )
      break
    case "sideformSubtitle":
      text = (
        <p
          className={[classes.CompareSubtitle, classes.SideformSubtitle].join(
            " "
          )}
        >
          {props.children}
        </p>
      )
      break
    case "modalTitle":
      text = <p className={classes.ModalTitle}>{props.children}</p>
      break
    case "modalDescription":
      text = <p className={classes.ModalDescription}>{props.children}</p>
      break
    case "greenPrice":
      text = <p className={classes.GreenPrice}>{props.children}</p>
      break

    default:
      text = <p className={classes.Paragraph}>{props.children}</p>
  }

  return text
}

export default Text
