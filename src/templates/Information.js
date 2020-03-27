import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import Text from "../elements/Text/Text"
import Compare from "../components/Compare/Compare"
import ContactForm from "../components/ContactForm/ContactForm"

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

      {props.data.markdownRemark.headings.map(line => {
        if (line.depth === 6) {
          return <Text>{line.value}</Text>
        } else if (line.depth === 2) {
          return <Text type="subtitle">{line.value}</Text>
        } else if (line.depth === 3) {
          return <li>{line.value}</li>
        } else if (line.depth === 1) {
          return line.value === "Form" ? (
            <Compare />
          ) : line.value === "Form2" ? (
            <ContactForm />
          ) : null
        } else {
          return null
        }
      })}
    </Layout>
  )
}

export default Information
