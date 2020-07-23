import React from 'react'
// import {useStaticQuery, graphql} from 'gatsby'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import CommonBanner from '../components/CommonBanner'
import Img from 'gatsby-image'
import SEO from '../components/seo'


// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"



const AboutPage = ({data}) => {
        const frontmatter = data.allMarkdownRemark.edges[0].node.frontmatter;
        const bannerData = {
            title: frontmatter.banner.title,
            fluid: frontmatter.banner.image.childImageSharp.fluid
        }
      
        const leftcol = frontmatter.leftcol;
        const rightcol = frontmatter.rightcol;
        const middlecol = frontmatter.middlecol;

    return (
        <>
            <Layout>
            <SEO title={'sometitle'} 
                meta={[
                        {charset: 'UTF-8'},
                        { name: 'description', content:'about description' },
                        {'http-equiv': 'Content-Type', content: 'text/html;'},
                    ]}
            />
            <CommonBanner data={bannerData} /> 
                           
            <div className="container container-xl px-8 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 pt-10 pb-6 lg:pt-20 lg:pb-10">
                    <div>  
                        <h2 className="mb-4 underline-custom underline-custom--left">{leftcol.title}</h2>
                        <h3>{leftcol.subtitle}</h3>
                        <p>{leftcol.description}</p>
                    </div>
                    <div>
                        <h2 className="mb-4 underline-custom underline-custom--left">{rightcol.title}</h2>
                        <h3>{rightcol.subtitle}</h3>
                        <p>{rightcol.description}</p>
                    </div>
                </div>
            </div>
            <div className="container container-xl px-8 mx-auto  text-center">
                <div className="max-w-lg mx-auto mb-8">
                    <h2 className="mb-4">{middlecol.title}</h2>
                    <p>{middlecol.description}</p>
                    
                </div>
                   <Img fluid={middlecol.image.childImageSharp.fluid} className='w-1/5 mx-auto mb-10'/>
            </div>

            </Layout>
        </>
    )
}
export const query = graphql`
query AboutPageMarkdown {
        allMarkdownRemark(filter: {frontmatter: {identifier: {eq: "about"}}}) {
        edges {
            node {
                id
                frontmatter {
                    banner {
                        title
                        image {
                            childImageSharp {
                                fluid (maxWidth: 2400) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    leftcol {
                        title
                        subtitle
                        description
                    }
                    rightcol {
                        title
                        subtitle
                        description
                    }
                    middlecol {
                        title
                        subtitle
                        description
                        image {
                            childImageSharp {
                                fluid(maxWidth: 600) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                      
                }
            }
        }
    }
}
`


export default AboutPage