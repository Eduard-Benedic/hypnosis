import React from 'react'


import { graphql} from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'


import CommonBanner from '../components/CommonBanner'
import ArticleCard from '../components/ArticleCard'





const ArticlePage = ({data, pageContext}) => {

    return(
        <>
           <Layout>
                <CommonBanner bannerData={{ imgFluid: data.allContentfulArticleList.edges[0].node.articleListBanner.fluid, 
                                            title: 'About Us', 
                                            subtitle: 'See all articles'
                                        }} />  
                <div className="container px-4 py-24 mx-auto grid grid-cols-1 lg:grid-cols-2 row-gap-20 col-gap-10">


                      
                    {data.allContentfulArticle.nodes.map(articleSummary => {
                        return  <ArticleCard key={articleSummary.id} 
                                             articleData={articleSummary} />
                    })}
                    
                </div>

                <div className="container container-xl mx-auto mb-10 px-8 flex justify-center relative">
                {   pageContext &&
                    pageContext.hasPreviousPage && (
                    <Link class="font-body font-bold border-b-2 border-main-color text-xl flex items-center absolute left-0" to={pageContext.previousPageLink}>
                        <small>Previous Page</small>
                    </Link>
                    )}

                    <div>1</div>
                    <div>1</div>
                    <div>1</div>

                {   pageContext &&
                    pageContext.hasNextPage && (
                    <Link class="font-body font-bold border-b-2 border-main-color text-xl flex items-center absolute right-0" to={pageContext.nextPageLink}>
                        <small>Next page</small>
                    </Link>
                )}
                
                </div>
           </Layout>
       </>
    )
}


export const pageQuery = graphql`

    
   query BlogListPageQuery($skip: Int, $limit: Int){

        allContentfulArticleList {
            edges {
            node {
                articleListBanner {
                fluid (maxWidth: 2200) {
                   ...GatsbyContentfulFluid_tracedSVG
                 }
                }
            }
            }
        }

        allContentfulArticle (skip: $skip, limit: $limit)  {
            nodes {
            id
            slug
            publishedAt
            articleTitle
            articleSummary
            articleImage {
                    fluid (maxWidth: 500) {
                        ...GatsbyContentfulFluid_noBase64
                    }
                }
            }
        }
    } 
`;



export default ArticlePage;




