import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import Layout from '../components/layout'
import CommonBanner from '../components/CommonBanner'
import Img from 'gatsby-image'

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"



const AboutPage = () => {

    const data = useStaticQuery(graphql`
                    {
                        allContentfulAbout {
                            edges {
                                node {
                                aboutBanner {
                                    fluid {
                                        ...GatsbyContentfulFluid_tracedSVG
                                    }
                                }
                                title
                                firstColumnTitle
                                firstColumnDescription {
                                    json
                                }
                                secondColumnTitle
                                secondColumnDescription {
                                    json
                                }
                                thirdColumnTitle
                                thirdColumnDescription {
                                    json
                                }
                                aboutPicture {
                                    fluid {
                                        ...GatsbyContentfulFluid_tracedSVG
                                    }
                                }
                                }
                            }
                            }

                    }`
    );

    
    const allContentfulNode = data.allContentfulAbout.edges[0].node;

    const bannerFluid = allContentfulNode.aboutBanner.fluid;

    const title = allContentfulNode.title;

    const firstColumnTitle = allContentfulNode.firstColumnTitle;
    const firstColumnDescription = allContentfulNode.firstColumnDescription.json;

    const secondColumnTitle = allContentfulNode.secondColumnTitle;
    const secondColumnDescription = allContentfulNode.secondColumnDescription.json;

    const thirdColumnTitle = allContentfulNode.thirdColumnTitle;
    const thirdColumnDescription = allContentfulNode.thirdColumnDescription.json;

    const imgFluid = allContentfulNode.aboutPicture.fluid;
    return (
        <>
            <Layout>
            <CommonBanner bannerData={{ imgFluid: bannerFluid, title}} /> 
                           
            <div className="container container-xl px-8 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 pt-10 pb-6 lg:pt-20 lg:pb-10">
                    <div>  
                        <h2 className="font-body underline-custom underline-custom--left">{firstColumnTitle}</h2>
                        {documentToReactComponents(firstColumnDescription)}
                    </div>
                    <div>
                        <h2 className="font-body underline-custom underline-custom--left">{secondColumnTitle}</h2>
                        {documentToReactComponents(secondColumnDescription)} 
                    </div>
                </div>
            </div>
            <div className="container container-xl px-8 mx-auto  text-center">
                <div className="max-w-lg mx-auto mb-8">
                    <h2 className="font-body">{thirdColumnTitle}</h2>
                    {documentToReactComponents(thirdColumnDescription)} 
                </div>
                   <Img fluid={imgFluid} className='w-1/5 mx-auto mb-10'/>
            </div>

            </Layout>
        </>
    )
}


export default AboutPage