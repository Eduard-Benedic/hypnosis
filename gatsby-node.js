const path = require('path');
const _ = require('lodash');


exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions;
    

    const result = await graphql(`
                query {
                    allMarkdownRemark(
                        filter: { frontmatter: { published: { ne: false } } }
                    ) {
                        edges {
                            node {
                                    fields {
                                        collection
                                        slug
                                    }
                            }
                        }
                    }
                } 
    `);
                
    
    const edges = result.data.allMarkdownRemark.edges;
    const articleTemplate = path.resolve('src/templates/article-template.js');
    console.log(articleTemplate);
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


    // const articleTemplate = path.resolve('src/templates/article-template.js');

    // allStrapiArticle {
    //     edges {
    //     node {
    //         slug
    //         title
    //         published_on(formatString: "")
    //         image {
    //             childImageSharp {
    //                 fixed (width: 800, height: 400) {
    //                         tracedSVG
    //                         aspectRatio
    //                         srcWebp
    //                         srcSetWebp
    //                     }  
    //                 }
    //         }
    //         content
            
    //      }
    //     }
    // }

    // result.data.allStrapiArticle.edges.forEach(article => {

    //     const articleNode = article.node;
    //     createPage({
    //        path: `/articles/${articleNode.slug}/`,
    //        component: articleTemplate,
    //        context: {
    //                imageFixed: articleNode.image.childImageSharp.fixed,
    //                title: articleNode.title,
    //                publishedOn: articleNode.published_on,   
    //                articleBody: articleNode.content
    //            }
    //        })   
    //    })

    // const articleListTemplate = path.resolve('src/templates/article-list.js');

    // const PAGE_SIZE = 1;

    // let chunkArray = _.chunk(result.data.allStrapiArticle.edges, PAGE_SIZE);

   
    // chunkArray.forEach((chunk, index) => {   
    //     createPage({
    //         // path: index === 0 ? `/articles` : `articles/${index+1}`,
    //         path: `articles/${index+1}`,
    //         component: articleListTemplate,
    //         context: {
    //             skip: PAGE_SIZE * index,
    //             limit: PAGE_SIZE,
    //             pageNumber: index + 1,
    //             hasNextPage: index != chunkArray.length - 1,
    //             nextPageLink: `/articles/${index + 2}`,
    //             hasPreviousPage: index != 0,
    //             previousPageLink: index === 2 ? `/articles/${index - 1}` : `/articles/${index}`,
    //             numberOfPages: chunkArray.length,
    //         }
    //     })
    // });

}


exports.onCreateNode = require('./gatsby/on-create-node');