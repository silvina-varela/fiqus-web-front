const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("src/blogTemplates/blogPost.js");
  const query = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              slug
              lang
              title
            }
          }
        }
      }
    }
  `);

  if (query.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
  }

  // Post template pages and context
  query.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/post${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });

};
