import React from "react"

import Text from "../../elements/Text/Text"
import Links from "./Links/Links"
import Link from "../../elements/Link/Link"
import * as content from "../../content/elements/contactinfo"

import classes from "./ContactInfo.module.css"

const cantonInfo = props => {
  let lang =
    props.lang === "en"
      ? content.en
      : props.lang === "fr"
      ? content.fr
      : props.lang === "it"
      ? content.it
      : content.de

  return (
    <div className={classes.ContactInfo}>
      <Links text={lang.buttons} />
      <Text type="sideformSubtitle">{lang.title}</Text>
      <Text type="paragraph">{lang.description}</Text>
      <Link to="/kontakt" type="bottomLink">
        {lang.link}
      </Link>
    </div>
  )
}

export default cantonInfo
