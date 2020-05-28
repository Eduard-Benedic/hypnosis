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

    const PAGE_SIZE = 2;

    let chunk = _.chunk(result.data.allContentfulArticle.nodes, PAGE_SIZE);

    chunk.forEach((chunk, index) => {   
        createPage({
            path: index === 0 ? `/articles` : `articles/page/${index+1}`,
            component: articleListTemplate,
            context: {
                skip: PAGE_SIZE * index,
                limit: PAGE_SIZE,
                pageNumber: index + 1,
                hasNextPage: index != chunk.length - 1,
                nextPageLink: `/articles/page/${index + 2}`,
                hasPreviousPage: true,
                previousPageLink: `/articles/page/${index}`
            }
        })
    });
}


