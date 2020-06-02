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
                {/* <CommonBanner bannerData={{ imgFluid: data.allContentfulArticleList.edges[0].node.articleListBanner.fluid, 
                                            title: 'About Us', 
                                            subtitle: 'See all articles'
                                        }} />   */}
                <div className="container px-4 py-24 mx-auto grid grid-cols-1 lg:grid-cols-2 row-gap-20 col-gap-10">


                      
                    {data.allStrapiArticle.nodes.map(articleCard => {

                        console.log(articleCard)
                        return <ArticleCard key={articleCard.id} articleData={{fluid: articleCard.image.childImageSharp.fluid, 
                                                          title: articleCard.title,
                                                          summary: articleCard.summary,
                                                          slug: articleCard.slug,
                                                          publishedOn: articleCard.published_on
                                                    }
                                 } /> 
                    })} 
                </div>
               

                <div className="container container-xl mx-auto mb-10 px-8 flex justify-center relative">
                    {pageContext &&
                    pageContext.hasPreviousPage && (
                    <Link to={pageContext.previousPageLink} className="font-body font-bold border-b-2 border-main-color text-xl flex items-center absolute left-0">
                        <small>Previous Page</small>
                    </Link>
                    )}

                    <ul className="flex justify-center max-w-lg">
                        
                        {Array.from({length: pageContext.numberOfPages + 1}, (_, i) => {
                          
                        return ( 
                            i === 0  ?  '' :  <li key={i} className={pageContext.pageNumber === i ? 'text-2xl bg-banner-background text-white px-2 py-2 rounded-md mr-2' : 'mr-2'}>
                            <Link to={`/articles/${i}`}>{i}</Link>
                        </li>
                               
                          
                          ) 
                        })}
                    </ul>
               

                {   pageContext &&
                    pageContext.hasNextPage && (
                    <Link className="font-body font-bold border-b-2 border-main-color text-xl flex items-center absolute right-0" to={pageContext.nextPageLink}>
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


        allStrapiArticle (skip: $skip, limit: $limit)  {
            nodes {
                id
                slug
                published_on(formatString: "")
                title
                summary
                image {
                        childImageSharp {
                                fluid (maxWidth: 500) {
                                    ...GatsbyImageSharpFluid_noBase64
                                }
                        } 
                    }
                }
            }
    } 
`;



export default ArticlePage;




