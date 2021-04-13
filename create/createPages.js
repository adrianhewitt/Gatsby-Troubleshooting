const path = require(`path`);

/**
 * Create WordPress Posts
 */
module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/templates/page.js`);

  return graphql(
    `
    {
      allWordpressPage(
        filter: {slug: {ne: "datatemplate"}}
      ) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // const { pagePrefix } = result.data.site.siteMetadata;
    const { edges } = result.data.allWordpressPage;

    edges.forEach( edge => {
        createPage({
          path: `${edge.node.slug}`,
          component: postTemplate,
          context: {
            id: edge.node.id,
          }
        })
    })
    // ==== END POSTS ====
    return null;
  })
}