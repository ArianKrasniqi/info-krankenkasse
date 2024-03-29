import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layoutt"
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

const Company = (props) => {
  const frontmatter = props.data.markdownRemark.frontmatter
  return (
    <Layout>
      <Text type="title" style={{ color: `${frontmatter.color}` }}>
        {frontmatter.name}
      </Text>

      <Text type="paragraph">{frontmatter.description}</Text>

      <ContactCompany
        name={frontmatter.name}
        shortname={frontmatter.shortName}
        location={frontmatter.location}
        insured={frontmatter.insured}
        color={frontmatter.color}
        refundPeriod={frontmatter.refundPeriod}
        solvencyRate={frontmatter.solvencyRate}
        administrativeExpenses={frontmatter.administrativeExpenses}
      />

      {props.data.markdownRemark.headings.map((line, index) => {
        if (line.depth === 6) {
          return (
            <Text key={`${line.value.slice(0, 10)}-${index}`}>
              {line.value}
            </Text>
          )
        } else if (line.depth === 2) {
          return (
            <Text
              type="subtitle"
              style={{ color: `${frontmatter.color}` }}
              key={`${line.value.slice(0, 10)}-${index}`}
            >
              {line.value}
            </Text>
          )
        } else if (line.depth === 3) {
          return (
            <Text key={`${line.value.slice(0, 10)}-${index}`} type="listItem">
              {line.value}
            </Text>
          )
        }
        return null
      })}
    </Layout>
  )
}

export default Company
