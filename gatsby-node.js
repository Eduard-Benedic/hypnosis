const path = require('path');



exports.createPages = async({graphql, actions}) => {
    const { createPage } = actions;

    const articleTemplate = path.resolve('src/templates/article-template.js');

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

    result.data.allContentfulArticle.nodes.forEach(article => {
        console.log(article.articleBody)
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

  
}