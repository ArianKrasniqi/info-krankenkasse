import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"

import Layout from "../components/Layout/Layout"
import Lists from "../components/Lists/Lists"
import Text from "../elements/Text/Text"
import * as actionTypes from "../store/actions"

const Glossar = props => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: fields___slug }) {
          edges {
            node {
              frontmatter {
                type
                title
                lang
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  const list = {}
  const slugs = {}

  for (let edge of data.allMarkdownRemark.edges) {
    if (
      edge.node.frontmatter.type === "glossar" &&
      edge.node.frontmatter.lang === props.lang
    ) {
      let slug = edge.node.fields.slug
      let name = edge.node.frontmatter.title
      let letter = name.charAt(0)
      if (!(letter in list)) {
        list[letter] = []
        slugs[letter] = []
      }
      list[letter].push(name)
      slugs[letter].push(slug)
    }
  }

  return (
    <Layout>
      <Text type="title">
        {props.lang} Informationen zum Thema Krankenversicherung
      </Text>
      <Text type="paragraph">
        Im Glossar finden Sie Erklärungen zu den wichtigsten Begriffen zum Thema
        Krankenversicherung und dem Schweizer Gesundheitssystem.
      </Text>
      <Lists data={list} slugs={slugs} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Glossar)
