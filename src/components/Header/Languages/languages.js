import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

import classes from "./Languages.module.css"
import * as actionTypes from "../../../store/actions"

{
  /* <button onClick={() => props.onChangeLanguage("de")}>Change to De</button> */
}

const Languages = props => {
  const changeLanguageHandler = (event, lang) => {
    event.preventDefault()
    props.onChangeLanguage(lang)
  }

  return (
    <ul className={classes.Languages}>
      <li>{props.lang}</li>
      <li>
        <Link
          onClick={event => {
            changeLanguageHandler(event, "de")
          }}
        >
          DE
        </Link>
      </li>
      <li>
        <Link
          onClick={event => {
            changeLanguageHandler(event, "fr")
          }}
        >
          FR
        </Link>
      </li>
      <li>
        <Link
          onClick={event => {
            changeLanguageHandler(event, "it")
          }}
        >
          IT
        </Link>
      </li>
      <li>
        <Link
          onClick={event => {
            changeLanguageHandler(event, "en")
          }}
        >
          EN
        </Link>
      </li>
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    lang: state.lang,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeLanguage: lang =>
      dispatch({ type: actionTypes.CHANGE_LANG, langPrefix: lang }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Languages)
