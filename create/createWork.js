
const path = require(`path`);

/**
 * Create WordPress Posts
 */
module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/templates/single-work.js`);

  return graphql(
    `
    {
      allWpWork(
        filter: {slug: {ne: "datatemplate"}}
      ) {
        edges {
          node {
            id
            slug
            uri
            modified
          }
        }
      }
    }
  `
  ).then(result => {
    if (result.errors) {
      // throw result.errors
    }



    const posts = result.data.allWpWork.edges
    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/work` : `/work/${i + 1}`,
        component: path.resolve("./src/templates/archive-work.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })


    // const { postPrefix } = result.data.site.siteMetadata;
    // const { postPrefix } = 'work';
    const { edges } = result.data.allWpWork;

    edges.forEach( edge => {
      createPage({
        path: `${edge.node.uri}`,
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