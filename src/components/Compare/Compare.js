import React, { useState } from "react"
import { connect } from "react-redux"

import Text from "../../elements/Text/Text"
import Button from "../../elements/Button/Buttonn"
import CompareForm from "./CompareForm/CompareForm"
import * as actionTypes from "../../store/actions"
import * as content from "../../content/elements/compare"

import classes from "./Compare.module.css"

const Compare = (props) => {
  const [open, setOpen] = useState(false)

  const openHandler = () => {
    setOpen(!open)
    props.onChangeStep(1)
  }

  let lang =
    props.lang === "en"
      ? content.en
      : props.lang === "fr"
      ? content.fr
      : props.lang === "it"
      ? content.it
      : content.de

  return (
    <div className={classes.Compare}>
      <div className={classes.Upper}>
        <Text type="compareSubtitle">{lang.title}</Text>
        <Button type="white" clicked={openHandler}>
          {lang.button}
        </Button>
        <Text type="paragraph">{lang.description}</Text>
      </div>
      <CompareForm
        step={props.step}
        lang={props.lang}
        content={lang}
        open={open}
        changeOpen={(value) => setOpen(value)}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
    step: state.step,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeStep: (step) =>
      dispatch({ type: actionTypes.CHANGE_STEP, step: step }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Compare)
