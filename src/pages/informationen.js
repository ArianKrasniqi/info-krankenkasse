import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"

import Layout from "../components/Layout/Layout"
import Card from "../components/Card/Card"
import Text from "../elements/Text/Text"
import * as actionTypes from "../store/actions"

import * as content from "../content/informationen"

const Informationen = props => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                lang
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

  let lang =
    props.lang === "en"
      ? content.en
      : props.lang === "fr"
      ? content.fr
      : props.lang === "it"
      ? content.it
      : content.de

  let prefix = props.lang === "de" ? "" : props.lang + "/"
  return (
    <Layout>
      <Text type="title">{lang.title}</Text>
      {data.allMarkdownRemark.edges.map((edge, index) => {
        return edge.node.frontmatter.type === "info" &&
          edge.node.frontmatter.lang === props.lang ? (
          <Card
            key={edge.node.frontmatter.title}
            to={`${prefix}/informationen/${
              edge.node.fields.slug.split(".")[0]
            }`}
            title={`${edge.node.frontmatter.title}`}
            // side={side}
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
