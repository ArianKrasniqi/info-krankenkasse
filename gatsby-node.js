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
      let slug = edge.node.fields.slug.split(".")
      let lang = ""
      if (slug.length === 2) lang = slug[1] + "/"

      path = `${lang}informationen/${slug[0]}`
      component = informationTemplate
      if (edge.node.fields.slug.split(".")[0] === "glossar") {
        component = glossarTemplate
      }
    } else if (edge.node.frontmatter.type === "glossar") {
      let slug = edge.node.fields.slug.split(".")
      let lang = ""
      if (slug.length === 2) lang = slug[1] + "/"

      path = `${lang}glossar/${slug[0]}`
      component = informationTemplate
    } else if (edge.node.frontmatter.type === "krankenkasse") {
      let slug = edge.node.fields.slug.split(".")
      let lang = ""
      if (slug.length === 2) lang = slug[1] + "/"

      path = `${lang}${slug[0]}`
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
