const { createFilePath } = require(`gatsby-source-filesystem`);

module.exports = ({ node, getNode, actions }) => {
      const { createNodeField } = actions;
      if (node.internal.type === `MarkdownRemark`) {
          console.log(node.parent)
        const collection = getNode(node.parent).sourceInstanceName;
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        console.log(slug, "this is aslug")
        createNodeField({
          node,
          name: 'collection',
          value: collection,
        });
      
       
        createNodeField({
          node,
          name: `slug`,
          value: `/${collection}${slug}`,
        });
      }
};