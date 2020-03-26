const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const informationTemplate = path.resolve("./src/templates/Information.js")
  const companyTemplate = path.resolve("./src/templates/Company.js")
  const glossarTemplate = path.resolve("./src/templates/Glossar.js")

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              type
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(edge => {
    let path = ""
    let component = ""
    if (edge.node.frontmatter.type === "info") {
      path = `informationen/${edge.node.fields.slug}`
      component = informationTemplate
      if (edge.node.fields.slug === "glossar") {
        component = glossarTemplate
      }
    } else if (edge.node.frontmatter.type === "glossar") {
      path = `${edge.node.fields.slug}`
      component = informationTemplate
    } else if (edge.node.frontmatter.type === "krankenkasse") {
      path = `${edge.node.fields.slug}`
      component = companyTemplate
    }
    createPage({
      component,
      path,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
