const path = require('path');

// for create fields
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const contentCmsTemplate = path.resolve('./src/templates/contentCms.js');
  const contentMarkdownTemplate = path.resolve('./src/templates/contentMarkdown.js');
  // slug for contentful
  const res = await graphql(`
    query {
      allContentfulPeople {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  res.data.allContentfulPeople.edges.forEach(edge => {
    createPage({
      component: contentCmsTemplate,
      path: `/content/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    });
  });

  //slug for markdown
  const resMarkDown = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  resMarkDown.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: contentMarkdownTemplate,
      path: `/content/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    });
  });
};