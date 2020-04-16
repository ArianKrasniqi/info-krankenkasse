import React from "react"
import { graphql } from "gatsby"
import { connect } from "react-redux"

import Layout from "../components/Layout/Layout"
import Text from "../elements/Text/Text"
import Compare from "../components/Compare/Compare"
import ContactForm from "../components/ContactForm/ContactForm"
import * as actionTypes from "../store/actions"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      headings {
        value
        depth
      }
    }
  }
`

const Information = props => {
  return (
    <Layout>
      <Text type="title">{props.data.markdownRemark.frontmatter.title}</Text>

      {props.data.markdownRemark.headings.map((line, index) => {
        if (line.depth === 6) {
          return (
            <Text key={`${line.value.slice(0, 10)}-${index}`}>
              {line.value}
            </Text>
          )
        } else if (line.depth === 2) {
          return (
            <Text key={`${line.value.slice(0, 10)}-${index}`} type="subtitle">
              {line.value}
            </Text>
          )
        } else if (line.depth === 3) {
          return (
            <Text key={`${line.value.slice(0, 10)}-${index}`} type="listItem">
              {line.value}
            </Text>
          )
        } else if (line.depth === 1) {
          return line.value === "Form" ? (
            <Compare key={`${line.value}-${index}`} />
          ) : line.value === "Form2" ? (
            <ContactForm key={`${line.value}-${index}`} />
          ) : null
        } else {
          return null
        }
      })}
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

export default connect(mapStateToProps, mapDispatchToProps)(Information)
