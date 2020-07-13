const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/sessionTemplate.js`)
  const result = await graphql(`
    query {
      allContentfulSession {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  result.data.allContentfulSession.edges.forEach(edge => {
    createPage({
      path: `sessions/${edge.node.slug}`,
      component: pageTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
