import React from "react"
import { connect } from "react-redux"

import Layout from "../components/Layout/Layoutt"
import Cover from "../components/Cover/Cover"
import Text from "../elements/Text/Text"
import Compare from "../components/Compare/Compare"
import SideForm from "../components/SideForm/SideForm"
import ContactInfo from "../components/ContactInfo/ContactInfo"
import * as content from "../content/index"

import * as actionTypes from "../store/actions"

const Index = (props) => {
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
      <Cover texts={lang.coverButton}></Cover>

      <Text type="title">{lang.title}</Text>
      <Text type="paragraph">{lang.description[0]}</Text>
      <Text type="paragraph">{lang.description[1]}</Text>

      <Compare />

      <div className="SideFormAndContent">
        <SideForm />

        {lang.others.map((content) => {
          if (Object.keys(content)[0] === "subtitle") {
            return <Text type="subtitle">{content.subtitle}</Text>
          } else if (Object.keys(content)[0] === "content") {
            return <Text type="paragraph">{content.content}</Text>
          } else if (Object.keys(content)[0] === "smallsubtitle") {
            return <Text type="smallSubtitle">{content.smallsubtitle}</Text>
          } else {
            return null
          }
        })}
      </div>

      <ContactInfo lang={props.lang} />
    </Layout>
  )
}
const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeLanguage: (lang) =>
      dispatch({ type: actionTypes.CHANGE_LANG, langPrefix: lang }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
