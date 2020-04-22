import React from "react"
import { connect } from "react-redux"

import Text from "../../elements/Text/Text"
import Button from "../../elements/Button/Button"
import SideFormInputs from "./SideFormInputs/SideFormInputs"
import * as content from "../../content/elements/sideform"

import classes from "./SideForm.module.css"

const SideForm = props => {
  let lang =
    props.lang === "en"
      ? content.en
      : props.lang === "fr"
      ? content.fr
      : props.lang === "it"
      ? content.it
      : content.de

  return (
    <div className={classes.SideForm}>
      <Text type="sideformSubtitle">{lang.title}</Text>
      <Text type="paragraph">{lang.description}</Text>

      <div className={classes.Inputs}>
        <SideFormInputs lang={props.lang} btnText={lang.button} />
        {/* <Button type="redFullWidth">{lang.button}</Button> */}
        <Text type="smallParagraph">{lang.smallText}</Text>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    lang: state.lang,
  }
}

export default connect(mapStateToProps)(SideForm)
