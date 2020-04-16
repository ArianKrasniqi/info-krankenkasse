import React, { useState } from "react"
import { connect } from "react-redux"

import Text from "../../elements/Text/Text"
import Button from "../../elements/Button/Button"
import CompareForm from "./CompareForm/CompareForm"
import * as actionTypes from "../../store/actions"

import classes from "./Compare.module.css"

const Compare = props => {
  const [open, setOpen] = useState(false)

  const openHandler = () => {
    setOpen(!open)
    props.onChangeStep(1)
  }

  const changeOpen = value => {
    console.log("[changeOpen]...")
    console.log(value)
  }
  return (
    <div className={classes.Compare}>
      <div className={classes.Upper}>
        <Text type="compareSubtitle">Krankenkassenvergleich 2020</Text>
        <Button type="white" clicked={openHandler}>
          Jetzt vergleichen
        </Button>
        <Text type="paragraph">
          Möchten Sie Prämien einsparen? Hier finden Sie alle Prämien für den
          Krankenkassen Wechsel
        </Text>
      </div>
      <CompareForm open={open} changeOpen={value => setOpen(value)} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    step: state.step,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeStep: step =>
      dispatch({ type: actionTypes.CHANGE_STEP, step: step }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Compare)
