import React from 'react'
// import {useStaticQuery, graphql} from 'gatsby'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import CommonBanner from '../components/CommonBanner'
import Img from 'gatsby-image'
import SEO from '../components/seo'


// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"



const AboutPage = ({data}) => {

//     const data = useStaticQuery(graphql`
//     {
//         allContentfulAbout {
//             edges {
//                 node {

//                 seoTags {
//                     seoTitle
//                     seoMetadescription
//                 }
//                 aboutBanner {
//                     fluid (maxWidth: 1900) {
//                         ...GatsbyContentfulFluid_tracedSVG
//                     }
//                 }
//                 title
//                 firstColumnTitle
//                 firstColumnDescription {
//                     json
//                 }
//                 secondColumnTitle
//                 secondColumnDescription {
//                     json
//                 }
//                 thirdColumnTitle
//                 thirdColumnDescription {
//                     json
//                 }
//                 aboutPicture {
//                     fluid {
//                         ...GatsbyContentfulFluid_tracedSVG
//                     }
//                 }
//                 }
//             }
//             }

//     }`
// );


    
    
    // const allContentfulNode = data.allContentfulAbout.edges[0].node;

    // const bannerFluid = allContentfulNode.aboutBanner.fluid;

    // const title = allContentfulNode.title;

    // const firstColumnTitle = allContentfulNode.firstColumnTitle;
    // const firstColumnDescription = allContentfulNode.firstColumnDescription.json;

    // const secondColumnTitle = allContentfulNode.secondColumnTitle;
    // const secondColumnDescription = allContentfulNode.secondColumnDescription.json;

    // const thirdColumnTitle = allContentfulNode.thirdColumnTitle;
    // const thirdColumnDescription = allContentfulNode.thirdColumnDescription.json;

    // const imgFluid = allContentfulNode.aboutPicture.fluid;



    // const headTitle = allContentfulNode.seoTags.seoTitle;
    // const metaDescription = allContentfulNode.seoTags.seoMetadescription;


    const strapiNode = data.allStrapiAboutpage.edges[0].node;

    const bannerFluid = strapiNode.Aboutbanner.image.childImageSharp.fluid;

    const leftColumn = {
        title: strapiNode.leftcolumn.title,
        subtitle: strapiNode.leftcolumn.subtitle,
        content: strapiNode.leftcolumn.description
    }

    const rightColumn = {
        title: strapiNode.rightcolumn.title,
        subtitle: strapiNode.rightcolumn.subtitle,
        content: strapiNode.rightcolumn.description
    }

    const middleColumn = {
        title: strapiNode.middlecolumn.title,
        content: strapiNode.middlecolumn.description
    }

    const middleFluid = strapiNode.middleimage.childImageSharp.fluid;

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
            <CommonBanner bannerData={{ imgFluid: bannerFluid, title: 'some title'}} /> 
                           
            <div className="container container-xl px-8 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 pt-10 pb-6 lg:pt-20 lg:pb-10">
                    <div>  
                        <h2 className="font-body underline-custom underline-custom--left">{leftColumn.title}</h2>
                        <h4>{leftColumn.subtitle}</h4>
                        <p>{leftColumn.content}</p>
                    </div>
                    <div>
                        <h2 className="font-body underline-custom underline-custom--left">{rightColumn.title}</h2>
                        <h4>{rightColumn.subtitle}</h4>
                        <p>{rightColumn.content}</p>
                    </div>
                </div>
            </div>
            <div className="container container-xl px-8 mx-auto  text-center">
                <div className="max-w-lg mx-auto mb-8">
                    <h2 className="font-body">{middleColumn.title}</h2>
                    <p>{middleColumn.content}</p>
                    {/* {documentToReactComponents(thirdColumnDescription)}  */}
                </div>
                   <Img fluid={middleFluid} className='w-1/5 mx-auto mb-10'/>
            </div>

            </Layout>
        </>
    )
}


export const query = graphql`
    {


        allStrapiAboutpage {
            edges {
                node {
                Aboutbanner {
                    image {
                        childImageSharp {
                            fluid(maxWidth: 2200) {
                                ...GatsbyImageSharpFluid_tracedSVG
                            }
                        }
                    }
                    title
                    subtitle
                }
                leftcolumn {
                    title
                    subtitle
                    description
                }
                rightcolumn {
                    title
                    subtitle
                    description
                }
                middlecolumn {
                    title
                    subtitle
                    description
                }
                middleimage {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
                }
            }
            }
    }
    

`


export default AboutPage