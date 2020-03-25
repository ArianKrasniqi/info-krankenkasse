import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import Text from "../elements/Text/Text"
import Compare from "../components/Compare/Compare"
import ContactForm from "../components/ContactForm/ContactForm"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        name
        shortName
        shortName
        location
        insured
        refundPeriod
        solvencyRate
        administrativeExpenses
        color
        description
      }
      headings {
        value
        depth
      }
    }
  }
`

const Company = props => {
  const frontmatter = props.data.markdownRemark.frontmatter
  return (
    <Layout>
      <Text type="title">{frontmatter.name}</Text>

      <Text type="paragraph">{frontmatter.description}</Text>

      {props.data.markdownRemark.headings.map(line => {})}
    </Layout>
  )
}

export default Company
