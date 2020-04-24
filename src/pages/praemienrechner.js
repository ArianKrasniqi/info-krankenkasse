import React from "react"
import { connect } from "react-redux"

import Layout from "../components/Layout/Layoutt"
import Text from "../elements/Text/Text"
import Compare from "../components/Compare/Compare"
import * as content from "../content/praemienrechner"

const Praemienrechner = (props) => {
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
      <Text type="title">{lang.title}</Text>
      <Text type="paragraph">{lang.description}</Text>
      <Compare />
      <Text type="paragraph">{lang.content[0]}</Text>
      <Text type="paragraph">{lang.content[1]}</Text>
      <Text type="paragraph">{lang.content[2]}</Text>

      <ul>
        {lang.content[3].map((text, index) => (
          <Text key={`${text.slice(0, 5)}-${index}`} type="listItem">
            {text}
          </Text>
        ))}
      </ul>

      <Text type="paragraph">{lang.content[4]}</Text>
      <Text type="paragraph">{lang.content[5]}</Text>
      <Text type="paragraph">{lang.content[6]}</Text>
      <Text type="paragraph">{lang.content[7]}</Text>
      <Text type="paragraph">{lang.content[8]}</Text>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  }
}

export default connect(mapStateToProps)(Praemienrechner)
