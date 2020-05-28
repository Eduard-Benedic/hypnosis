import React from 'react'


import { graphql} from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'


// import CommonBanner from '../components/CommonBanner'
import ArticleCard from '../components/ArticleCard'





const ArticlePage = ({data, pageContext}) => {

    return(
        <>
           <Layout>
                {/* <CommonBanner bannerData={{ imgFluid: data.allFile.edges[0].node.childImageSharp.fluid, 
                                            title: 'About Us', 
                                            subtitle: 'See all articles'
                                        }} />   */}
                <div className="container px-4 py-16 mx-auto grid grid-cols-1 lg:grid-cols-2 row-gap-20 col-gap-10">
                                        
                    {data.allContentfulArticle.nodes.map(articleSummary => {
                        return  <ArticleCard key={articleSummary.id} 
                                             articleData={articleSummary} />
                    })}




                
                {pageContext &&
                    pageContext.hasPreviousPage && (
                        <Link class="flex items-center" to={pageContext.previousPageLink}>
                            <small>Previous Page</small>
                        </Link>
                )}

             
          

                {pageContext &&
                    pageContext.hasNextPage && (
                        <Link class="flex items-center" to={pageContext.nextPageLink}>
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




