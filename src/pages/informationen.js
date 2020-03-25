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
        if (index % 2 == 0) {
          side = "right"
        }
        return edge.node.frontmatter.type === "info" ? (
          <Card
            to={`/informationen/${edge.node.fields.slug}`}
            title={`${edge.node.frontmatter.title}`}
            side={side}
            src="https://brokeradmin.ch/api/upload/glossary/banner_1565097763610_416166990.jpeg"
          >
            Kündigung Krankenkasse: So kündigen Sie Ihre Grundversicherung Die
            Grundversicherung ist die obligatorische Krankenkasse in der
            Schweiz, die jeder Eidgenosse abgeschlossen haben muss. Eine
            Kündigung ihrer Krankenkasse erwägen viele Versicherungsnehmer, wenn
            ihr Anbieter eine P...
          </Card>
        ) : null
      })}
    </Layout>
  )
}
