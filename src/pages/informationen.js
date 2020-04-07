import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"

import Layout from "../components/Layout/Layout"
import Card from "../components/Card/Card"
import Text from "../elements/Text/Text"
import * as actionTypes from "../store/actions"

const Informationen = props => {
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
      <button onClick={() => props.onChangeLanguage("de")}>Change to De</button>
      <button onClick={() => props.onChangeLanguage("en")}>Change to En</button>
      <button onClick={() => props.onChangeLanguage("fr")}>Change to Fr</button>
      <button onClick={() => props.onChangeLanguage("it")}>Change to It</button>
      <Text type="title">
        {props.lang} Informationen zum Thema Krankenversicherung
      </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Informationen)
