import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import {Link} from 'gatsby'

import CommonBanner from '../components/CommonBanner'

import SEO from '../components/seo'

import Img from 'gatsby-image'

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


const Neurofeedback = ({data}) => {
    const contentfulNode = data.allContentfulNeurofeedback.edges[0].node;
    
    //================ BANNER =========================
    const bannerFluid = contentfulNode.bannerImage.fluid;
    const bannerTitle = contentfulNode.bannerTitle;
    const bannerSubtitle = contentfulNode.bannerSubtitle;


    //================ LEFT COLUMN ==========================

    const leftColumnTitle = contentfulNode.leftColumn.title;
    const leftColumnSubtitle = contentfulNode.leftColumn.subtitle;
    const leftColumnRichText = contentfulNode.leftColumn.content.json;


    //================ RIGHT COLUMN ==========================

    const rightColumnTitle = contentfulNode.rightColumnTitle;
    const rightColumnRichText = contentfulNode.rightColumnContent.json;



    //================ SECOND SECTION ==========================


    const secondSectionImageFluid = contentfulNode.secondSection.image.fluid;
    const secondSectionTitle = contentfulNode.secondSection.title;
    const secondSectionRichText = contentfulNode.secondSection.childContentfulPictureSetTextLinesRichTextNode.json;



    // ================= SEO TAGS ====================
    const headTitle = contentfulNode.seoTags.seoTitle;
    const metaDescription = contentfulNode.seoTags.metaDescription;
    return (
        <>
        <Layout>
          <SEO title={headTitle}
               meta={[
                 {charset: 'UTF-8'},
                 {name: 'description', content: metaDescription}
               ]} 
          />
        <CommonBanner bannerData={{ imgFluid: bannerFluid, title: bannerTitle, subtitle: bannerSubtitle}} /> 
          <div className="container container-xl mx-auto py-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 mb-16">
                  <div className="text-left border-r border-gray-400 border-banner-background px-4 lg:px-8">
                        <h2 className="mb-8 underline-custom underline-custom--left">{leftColumnTitle} </h2>
                        <h3>{leftColumnSubtitle}</h3>
                        {documentToReactComponents(leftColumnRichText)}
                  </div>
                  <div className="lg:text-left px-4 lg:px-8">
                        <h3>{rightColumnTitle}</h3>
                        {documentToReactComponents(rightColumnRichText)}
                  </div>
              </div>
             <div className="container container-xl mx-auto px-6">
                <h2 className="text-center mb-16 underline-custom underline-custom--center">{secondSectionTitle}</h2>
                 <Img style={{height: '400px', marginBottom: '2rem'}} className="max-w-2xl mx-auto" fluid={secondSectionImageFluid}/>
                 
                 <div className="max-w-4xl mx-auto leading-loose">
                    {documentToReactComponents(secondSectionRichText)}
                    <p>To find out more <Link className="btn text-center mt-4 block sm:ml-3 sm:inline-block" to="/contact">Contact me</Link></p>
                 </div>
             </div>
          </div>
        </Layout>
            
        </>
    )
}


export const pageQuery = graphql`
 {
    allContentfulNeurofeedback {
        edges {
          node {
            
            seoTags {
              seoTitle
              seoMetadescription
            }
            bannerImage {
              fluid (maxWidth: 2200) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
            bannerTitle
            bannerSubtitle
            leftColumn {
              title
              subtitle
              content {
                json
              }
            }
            rightColumnTitle
            rightColumnContent {
              json
            }
            secondSection {
              image {
                fluid (maxWidth: 1200) {
                    ...GatsbyContentfulFluid_tracedSVG
                }
              }
              title
              childContentfulPictureSetTextLinesRichTextNode {
                json
              }
            }
          }
        }
      }
}
`


export default Neurofeedback;