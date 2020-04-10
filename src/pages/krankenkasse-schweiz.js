import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"

import Layout from "../components/Layout/Layout"
import Compare from "../components/Compare/Compare"
import ContactInfo from "../components/ContactInfo/ContactInfo"
import Lists from "../components/Lists/Lists"
import Text from "../elements/Text/Text"
import * as content from "../content/krankenkasse-schweiz"

const KrankenkasseSchweiz = props => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: fields___slug }) {
          edges {
            node {
              frontmatter {
                type
                shortName
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
      edge.node.frontmatter.type === "krankenkasse" &&
      edge.node.frontmatter.lang === props.lang
    ) {
      let slug = edge.node.fields.slug
      let name = edge.node.frontmatter.shortName
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
      <div>
        <Text type="title">{lang.title}</Text>
        <Text type="paragraph">{lang.description}</Text>
        <Compare />

        <Lists data={list} slugs={slugs} prelink="" />

        <Text type="paragraph">{lang.content[0]}</Text>
        <Text type="paragraph">{lang.content[1]}</Text>
        <Text type="paragraph">{lang.content[2]}</Text>
        <ContactInfo />
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    lang: state.lang,
  }
}

export default connect(mapStateToProps)(KrankenkasseSchweiz)
