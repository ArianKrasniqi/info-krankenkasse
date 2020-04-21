import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { navigate } from "gatsby"

import classes from "./Languages.module.css"
import * as actionTypes from "../../../store/actions"

const Languages = props => {
  const changeLanguageHandler = (event, lang) => {
    event.preventDefault()
    const url = typeof window !== "undefined" ? window.location.href : ""
    let pieces = url.split("/")
    let prefixUrl = pieces[3]
    props.onChangeLanguage(lang)

    if (lang === "de") {
      if (prefixUrl === "fr" || prefixUrl === "it" || prefixUrl === "en") {
        pieces[3] = ""
      }
    } else if (lang !== "de") {
      if (prefixUrl !== "fr" && prefixUrl !== "it" && prefixUrl !== "en") {
        pieces[3] = `${lang}/` + pieces[3]
      } else if (
        prefixUrl === "fr" ||
        prefixUrl === "it" ||
        prefixUrl === "en"
      ) {
        pieces[3] = lang
      }
    }

    let newUrl = pieces.slice(3).join("/")

    let pathname =
      typeof window !== `undefined` ? window.location.pathname.split("/") : null
    if (pathname.length > 2) navigate(newUrl)
  }

  return (
    <ul className={classes.Languages}>
      <li className={props.lang === "de" ? classes.Active : ""}>
        <Link
          onClick={event => {
            changeLanguageHandler(event, "de")
          }}
        >
          DE
        </Link>
      </li>
      <li className={props.lang === "fr" ? classes.Active : ""}>
        <Link
          onClick={event => {
            changeLanguageHandler(event, "fr")
          }}
        >
          FR
        </Link>
      </li>
      <li className={props.lang === "it" ? classes.Active : ""}>
        <Link
          onClick={event => {
            changeLanguageHandler(event, "it")
          }}
        >
          IT
        </Link>
      </li>
      <li className={props.lang === "en" ? classes.Active : ""}>
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
