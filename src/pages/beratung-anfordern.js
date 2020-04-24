import React from "react"
import { connect } from "react-redux"

import Layout from "../components/Layout/Layoutt"
import Text from "../elements/Text/Text"
import ContactForm from "../components/ContactForm/ContactForm"
import * as content from "../content/beratung-anfordern"

const BeratungAnfordern = (props) => {
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
      <div>
        <Text type="title">{lang.title}</Text>
        <Text type="paragraph">{lang.description}</Text>

        <ContactForm type="contact" btnText="Senden" style={{ width: "70%" }} />

        <Text type="subtitle">{lang.subtitle}</Text>

        <Text type="paragraph">{lang.content[0]}</Text>
        <Text type="paragraph">{lang.content[1]}</Text>
        <Text type="paragraph">{lang.content[2]}</Text>

        <Text type="subtitle">{lang.subtitle2}</Text>

        <Text type="paragraph">{lang.content2[0]}</Text>
        <Text type="paragraph">{lang.content2[1]}</Text>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  }
}

export default connect(mapStateToProps)(BeratungAnfordern)
