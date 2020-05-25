import React from 'react'


import {useStaticQuery, graphql} from 'gatsby'
import Layout from '../components/layout'


import CommonBanner from '../components/CommonBanner'
import ArticleCard from '../components/ArticleCard'



// const articleStructure = {
//     articleImage,
//     articleTitle,
//     articleSubtitle,
//     articleAuthor,
//     publishedAt,
//     updatedAt,
//     readingTime
// }

const ArticlePage = () => {

    const data = useStaticQuery(graphql`

    {
            allFile(limit: 1, filter: {relativePath: {eq: "sea.jpg"}}) {
                edges {
                node {
                    childImageSharp {
                        fluid (maxHeight: 900){
                            ...GatsbyImageSharpFluid
                            }
                        }
                }
                }
            }
    
    }
`);



    return(
        <>
           <Layout>
                <CommonBanner bannerData={{ imgFluid: data.allFile.edges[0].node.childImageSharp.fluid, 
                                            title: 'Articles in one place', 
                                            subtitle: 'See all articles'
                                        }}/>  
                <div className="container px-4 py-16 mx-auto grid grid-cols-2 row-gap-20 col-gap-10">
                    <ArticleCard/>
                    <ArticleCard />
                    <ArticleCard />
                </div>
           </Layout>
       </>
    )
}


export default ArticlePage;