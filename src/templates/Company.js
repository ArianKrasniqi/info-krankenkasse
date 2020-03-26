import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import ContactCompany from "../components/ContactCompany/ContactCompany"
import Text from "../elements/Text/Text"

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

      <ContactCompany
        name={frontmatter.name}
        shortname={frontmatter.shortName}
        location={frontmatter.location}
        insured={frontmatter.insured}
        refundPeriod={frontmatter.refundPeriod}
        solvencyRate={frontmatter.solvencyRate}
        administrativeExpenses={frontmatter.administrativeExpenses}
      />

      {props.data.markdownRemark.headings.map(line => {
        if (line.depth === 6) {
          return <Text>{line.value}</Text>
        } else if (line.depth === 2) {
          return <Text type="subtitle">{line.value}</Text>
        } else if (line.depth === 3) {
          return <li>{line.value}</li>
        }
      })}
    </Layout>
  )
}

export default Company
