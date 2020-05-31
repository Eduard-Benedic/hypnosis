const path = require('path');
const _ = require('lodash');



exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions;

    const result = await graphql(`
           query {
                allContentfulArticle {
                    nodes {
                    articleImage {
                        
                        fixed(width: 800, height: 400) {
                            tracedSVG
                            aspectRatio
                            srcWebp
                            srcSetWebp
                          }  
                    }
                        slug
                        articleTitle
                        articleAuthor
                        publishedAt
                        articleBody {
                            json
                        }
                    }
                }
            }
    `);
    
  

    const articleTemplate = path.resolve('src/templates/article-template.js');

    result.data.allContentfulArticle.nodes.forEach(article => {
     
     createPage({
        path: `/articles/${article.slug}/`,
        component: articleTemplate,
        context: {
            imageFixed: article.articleImage.fixed,
            title: article.articleTitle,
            publishedAt: article.publishedAt,
            articleAuthor: article.articleAuthor,
            articleBody: article.articleBody.json
            }
        })   
    })



    
    const articleListTemplate = path.resolve('src/templates/article-list.js');

    const PAGE_SIZE = 6;

    let chunkArray = _.chunk(result.data.allContentfulArticle.nodes, PAGE_SIZE);

   
    chunkArray.forEach((chunk, index) => {   
        createPage({
            // path: index === 0 ? `/articles` : `articles/${index+1}`,
            path: `articles/${index+1}`,
            component: articleListTemplate,
            context: {
                
                skip: PAGE_SIZE * index,
                limit: PAGE_SIZE,
                pageNumber: index + 1,
                hasNextPage: index != chunkArray.length - 1,
                nextPageLink: `/articles/${index + 2}`,
                hasPreviousPage: index != 0,
                previousPageLink: index === 2 ? `/articles/${index - 1}` : `/articles/${index}`,
                numberOfPages: chunkArray.length
            }
        })
    });
}


