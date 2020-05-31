import React from "react"

import Img from 'gatsby-image'

import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"



import HomeBanner from '../components/HomeBanner'
import CardComponent from "../components/CardComponent"
import HalfGridImg from "../components/HalfGridImg"
import { Link } from 'gatsby'



const IndexPage = ({data}) =>  {

  const dataContenfulNode = data.allContentfulHome.edges[0].node;

  // HOME BANNER PROPS
  const homeBannerContenful = {
    title: dataContenfulNode.homeBanner.title,
    subtitle: dataContenfulNode.homeBanner.subtitle,
    description: dataContenfulNode.homeBanner.description,
    imgFluid: dataContenfulNode.homeBanner.image.fluid
  }

  // SERVICE SECTION
  const serviceTitle = dataContenfulNode.serviceTitle;
  const serviceGrid = dataContenfulNode.serviceTriad;


  // HALF GRID SECTION  !Note - It is an array

  const halfGridSection = dataContenfulNode.halfGridSection;


  // TOOLS SECTION 

  const toolsText = {
    title: dataContenfulNode.toolsDescription.title,
    subtitle: dataContenfulNode.toolsDescription.subtitle,
    description: dataContenfulNode.toolsDescription.description
  }

  const toolsImg = dataContenfulNode.toolsImg.fluid;

  
  // SEO Metatags
  const titleHead =  dataContenfulNode.seoTags.seoTitle
  const metaDescription = dataContenfulNode.seoTags.seoMetadescription;
  

  return (
    <Layout>
      <SEO title={titleHead}
           meta={[
              {charset: 'UTF-8'},
              { name: 'description', content: metaDescription },
              {'http-equiv': 'Content-Type', content: 'text/html;'},
            ]}
      />
        <HomeBanner homeBannerData={homeBannerContenful} />
         <div
            data-sal="fade"
            data-sal-duration="500"
            data-sal-delay="200"
            data-sal-easing="ease"  
            className="container container-xl  py-10 md:py-20 mx-auto">
          <h2 className="font-body text-center mb-16 sm:mb-20 underline-custom underline-custom--center">{serviceTitle}</h2>
            <div className="grid row-gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {serviceGrid.map((service,index) => {
                return <CardComponent  key={service.id} cardInfo={service} iconNumber={index}/>
              })}
            </div>
          </div>
        <div className="grid-switcher" >
            {halfGridSection.map(halfGrid => {
              return <HalfGridImg key={halfGrid.id} gridData={halfGrid} />
            })}
        </div>
        <div  data-sal="fade"
              data-sal-duration="800"
              data-sal-threshold="0"
            
             className="container container-xl py-8 sm:py-16 mx-auto text-center px-4">
          <h2 className="font-body underline-custom underline-custom--center text-main-color tracking-wider">{toolsText.title}</h2> 
          <p className="max-w-lg mx-auto mb-8">{toolsText.description}</p>
            <Img fluid={toolsImg} className="mb-8 shadow-md max-w-lg mx-auto"/>
            <Link className="btn" to={`/neurofeedback`}> Read More</Link>
        </div> 
    </Layout>
  )
}



export const query = graphql`
{
    allContentfulHome {
          edges {
            node {
                        seoTags {
                          seoTitle
                          seoMetadescription
                        }
                        homeBanner {
                          image {
                            fluid (maxWidth: 2200, quality: 100) {
                              ...GatsbyContentfulFluid_noBase64
                            }
                          }
                          title
                          subtitle
                          description
                        }
                        serviceTitle
                        serviceTriad {
                          id
                          title
                          subtitle
                          description
                        }
                        halfGridSection {
                          id
                          gridImage {
                            fluid (maxWidth:1200, maxHeight: 700) {
                                  ...GatsbyContentfulFluid_noBase64
                             }
                          }
                          gridText {
                            title
                            subtitle
                            description
                          }
                        }
                        toolsDescription {
                          title
                          subtitle
                          description
                        }
                        toolsImg {
                            fluid(maxWidth: 900) {
                              ...GatsbyContentfulFluid_noBase64
                            }
                        }
                      }
                    }
          }
  }
`;



export default IndexPage  
