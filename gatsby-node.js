const path = require('path');
const _ = require('lodash');


exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions;
    

    const result = await graphql(`
                query {
                    allMarkdownRemark(
                        filter: { frontmatter: { published: { ne: false } } }
                    ) 
                        {
                            edges {
                                node {
                                        fields {
                                            collection
                                            slug
                                        }
                                }
                            }
                        }
                    blogListPage: allMarkdownRemark(filter: {fields: {collection: {eq: "blog"}}}) {
                            edges {
                                    node {
                                        fields {
                                            slug
                                            collection
                                        }
                                    }
                            }
                        }
                } 
    `);
                
    
    const edges = result.data.allMarkdownRemark.edges;
    const articleTemplate = path.resolve('src/templates/article-template.js');
   
    edges.forEach(article => {
        const node = article.node;
        const slug = node.fields.slug;
      
      
            console.log(slug, "this is the article=======")
        createPage({
            path: slug,
            component: articleTemplate,
            context: {
                slug: slug
            }
        })
    })

    const blogEdges = result.data.blogListPage.edges;
    const articleListTemplate = path.resolve('src/templates/article-list.js');
    const PAGE_SIZE = 4;
    let chunkArray = _.chunk(blogEdges, PAGE_SIZE);

   let collection = "blog";
    chunkArray.forEach((chunk, index) => {   
        createPage({
        
            path: `${collection}/${index+1}`,
            component: articleListTemplate,
            context: {
                skip: PAGE_SIZE * index,
                limit: PAGE_SIZE,
                collection: collection,
                pageNumber: index + 1,
                hasNextPage: index != chunkArray.length - 1,
                nextPageLink: `/blog/${index + 2}`,
                hasPreviousPage: index != 0,
                previousPageLink: index === 2 ? `/blog/${index - 1}` : `/blog/${index}`,
                numberOfPages: chunkArray.length,
            }
        })
    });

}


exports.onCreateNode = require('./gatsby/on-create-node');