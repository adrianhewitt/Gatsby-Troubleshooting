const path = require(`path`)
const slash = require(`slash`)
const createPaginatedPages = require('gatsby-paginate')

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
}

const createWork = require('./create/createWork');

exports.createPages = async ({ actions, graphql }) => {
  await createWork({ actions, graphql });
}