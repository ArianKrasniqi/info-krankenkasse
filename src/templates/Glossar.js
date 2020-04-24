import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"

import Layout from "../components/Layout/Layoutt"
import Lists from "../components/Lists/Lists"
import Text from "../elements/Text/Text"
import * as content from "../content/templates/Glossar"

const Glossar = (props) => {
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
      {lang.others
        ? lang.others.map((content) => {
            if (Object.keys(content)[0] === "subtitle") {
              return <Text type="subtitle">{content.subtitle}</Text>
            } else if (Object.keys(content)[0] === "content") {
              return <Text type="paragraph">{content.content}</Text>
            } else if (Object.keys(content)[0] === "smallsubtitle") {
              return <Text type="smallSubtitle">{content.smallsubtitle}</Text>
            } else {
              return null
            }
          })
        : null}
      <Lists data={list} slugs={slugs} prelink="glossar/" />
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  }
}

export default connect(mapStateToProps)(Glossar)
