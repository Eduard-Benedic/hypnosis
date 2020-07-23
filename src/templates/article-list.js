import React from 'react'


import { graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'


import CommonBanner from '../components/CommonBanner'
import ArticleCard from '../components/ArticleCard'





const ArticlePage = ({data, pageContext}) => {
    // const staticQuery = useStaticQuery(graphql`

    
    // `)
    const edges = data.allMarkdownRemark.edges;
    const fluid = data.allImageSharp.edges[0].node.fluid;
    

    console.log(data)
    return(
        <>
           <Layout>
            <CommonBanner data={{ fluid: fluid, 
                                 title: 'Blog page', 
                                subtitle: 'Subtitle '
                }} />  
               <div className="bg-custom-white h-full">                   
                    <div className="max-w-6xl px-4 py-24 mx-auto grid grid-cols-1 lg:grid-cols-2 row-gap-10 col-gap-10">
                        {edges.map(articleCard => {
                            const id = Math.round(Math.random() * Math.random() * 20000);
                            const node = articleCard.node;
                            return ( <ArticleCard key={id} 
                                                data={
                                                    {  fluid: node.frontmatter.bannerimage.childImageSharp.fluid, 
                                                        title: node.frontmatter.title,
                                                        summary: node.frontmatter.summary,
                                                        slug: node.fields.slug,
                                                        publishedon: node.frontmatter.publishedon
                                                    }
                                                }
                                    /> 
                            )
                        })} 
                    </div>
                

                    <div className="container container-xl mx-auto pb-10 px-8 flex justify-center relative">
                        {pageContext &&
                        pageContext.hasPreviousPage && (
                        <Link to={pageContext.previousPageLink} className="font-body ml-10 font-bold border-b-2 border-main-color text-xl flex items-center absolute left-0">
                            <small>Previous Page</small>
                        </Link>
                        )}

                        <ul className="flex justify-center max-w-lg">
                            
                            {Array.from({length: pageContext.numberOfPages + 1}, (_, i) => {
                            
                            return ( 
                                i === 0  ?  '' :  <li key={i} className={pageContext.pageNumber === i ? 'text-2xl bg-banner-background text-white px-2 py-2 rounded-md mr-2' : 'mr-2'}>
                                <Link to={`/blog/${i}`}>{i}</Link>
                            </li>
                                
                            
                            ) 
                            })}
                        </ul>
                

                    {   pageContext &&
                        pageContext.hasNextPage && (
                        <Link to={pageContext.nextPageLink}
                            className="font-body font-bold border-b-2 border-main-color text-xl flex items-center absolute right-0 mr-10" 
                        >
                            <small>Next page</small>
                        </Link>
                    )}
                    
                    </div>
                </div>
           </Layout>
       </>
    )
}

export const query = graphql`
    query ArticleListQuery($skip: Int, $limit: Int, $collection: String) {
        allMarkdownRemark(filter: {fields: {collection: {eq: $collection}}}, skip: $skip, limit: $limit) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        bannerimage {
                            childImageSharp {
                                fluid(maxWidth: 700) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        title
                        author
                        summary
                        publishedon
                        
                    }
                }
            }
        }

        allImageSharp(filter: {fluid: {originalName: {eq: "bannerlist.jpg"}}}) {
            edges {
                node {
                    fluid(maxWidth: 2200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`



export default ArticlePage;




