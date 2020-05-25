import React from 'react'


import {useStaticQuery, graphql} from 'gatsby'
import Layout from '../components/layout'


import CommonBanner from '../components/CommonBanner'
import ArticleCard from '../components/ArticleCard'





const ArticlePage = () => {

    const data = useStaticQuery(graphql`
            {
                allFile (filter: {relativePath: {eq: "sea.jpg"}}){
                    edges {
                        node {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid_noBase64
                                }
                            }
                        }
                    }
                }
                allContentfulArticle {
                    nodes {
                    id
                    slug
                    publishedAt
                    articleTitle
                    articleSummary
                    articleImage {
                        fluid {
                            ...GatsbyContentfulFluid_noBase64
                        }
                    }
                    }
                }
            }`
    );



    return(
        <>
           <Layout>
                <CommonBanner bannerData={{ imgFluid: data.allFile.edges[0].node.childImageSharp.fluid, 
                                            title: 'About Us', 
                                            subtitle: 'See all articles'
                                        }} />  
                <div className="container px-4 py-16 mx-auto grid grid-cols-2 row-gap-20 col-gap-10">
                
                    {data.allContentfulArticle.nodes.map(articleSummary => {
                        return  <ArticleCard key={articleSummary.id} 
                                             articleData={articleSummary} />
                    })}
                </div>
           </Layout>
       </>
    )
}


export default ArticlePage;