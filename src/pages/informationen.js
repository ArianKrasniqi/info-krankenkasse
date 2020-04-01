import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout/Layout"
import Card from "../components/Card/Card"
import Text from "../elements/Text/Text"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                type
                title
                description
                image
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

  return (
    <Layout>
      <Text type="title">Informationen zum Thema Krankenversicherung</Text>
      {data.allMarkdownRemark.edges.map((edge, index) => {
        let side = ""
        if (index % 2 === 0) {
          side = "right"
        }
        return edge.node.frontmatter.type === "info" ? (
          <Card
            key={edge.node.frontmatter.title}
            to={`/informationen/${edge.node.fields.slug}`}
            title={`${edge.node.frontmatter.title}`}
            side={side}
            style={index === 0 ? { paddingTop: "10px" } : {}}
            image={edge.node.frontmatter.image}
          >
            {edge.node.frontmatter.description}
          </Card>
        ) : null
      })}
    </Layout>
  )
}
