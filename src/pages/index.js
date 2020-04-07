import React from "react"
import { connect } from "react-redux"

import Layout from "../components/Layout/Layout"
import Cover from "../components/Cover/Cover"
import Text from "../elements/Text/Text"
import Compare from "../components/Compare/Compare"
import SideForm from "../components/SideForm/SideForm"
import ContactInfo from "../components/ContactInfo/ContactInfo"
import * as content from "../content/index"

import * as actionTypes from "../store/actions"

const Index = props => {
  let lang =
    props.lang === "en"
      ? content.en
      : props.lang === "fr"
      ? content.fr
      : props.lang === "it"
      ? content.it
      : content.de
  return (
    <Layout>
      <Cover></Cover>

      <Text type="title">{lang.title}</Text>
      <button onClick={() => props.onChangeLanguage("de")}>Change to De</button>
      <button onClick={() => props.onChangeLanguage("en")}>Change to En</button>
      <button onClick={() => props.onChangeLanguage("fr")}>Change to Fr</button>
      <button onClick={() => props.onChangeLanguage("it")}>Change to It</button>
      <Text type="paragraph">{lang.description[0]}</Text>
      <Text type="paragraph">{lang.description[1]}</Text>

      <Compare />

      <div className="SideFormAndContent">
        <SideForm />

        <Text type="subtitle">
          {lang.subtitle}
        </Text>
        <Text type="paragraph">
          {lang.content[0]}
        </Text>
        <Text type="paragraph">
          {lang.content[1]}
        </Text>
        <Text type="subtitle">
        {lang.subtitle2}
        </Text>
        <Text type="paragraph">
        {lang.content2[0]}
        </Text>
        <Text type="paragraph">
        {lang.content2[1]}
        </Text>
        <Text type="subtitle">
        {lang.subtitle3}
        </Text>
        <Text type="paragraph">
        {lang.content3[0]}
        </Text>
        <Text type="paragraph">
        {lang.content3[1]}
        </Text>
      </div>
      <Text type="subtitle">{lang.subtitle4}</Text>
      <Text type="paragraph">
        {lang.content4}
      </Text>

      <ContactInfo />
    </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(Index)
