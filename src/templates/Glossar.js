import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout/layout"
import Lists from "../components/Lists/Lists"
import Text from "../elements/Text/Text"

const list = {}

const Company = props => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: fields___slug }) {
          edges {
            node {
              frontmatter {
                type
                title
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

  data.allMarkdownRemark.edges.map(edge => {
    if (edge.node.frontmatter.type === "glossar") {
      let name = edge.node.frontmatter.title
      let letter = name.charAt(0)
      if (!(letter in list)) {
        list[letter] = []
      }
      list[letter].push(name)
    }
  })

  return (
    <Layout>
      <Text type="title">Informationen zum Thema Krankenversicherung</Text>
      <Text type="paragraph">
        Im Glossar finden Sie Erklärungen zu den wichtigsten Begriffen zum Thema
        Krankenversicherung und dem Schweizer Gesundheitssystem.
      </Text>
      <Lists data={list} />
    </Layout>
  )
}

export default Company
