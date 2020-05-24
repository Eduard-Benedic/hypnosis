import React from "react"

import Img from 'gatsby-image'

import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"


import HomeBanner from '../components/HomeBanner'
import CardComponent from "../components/CardComponent"
import HalfGridImg from "../components/HalfGridImg"
import BtnComponent from '../components/BtnComponent'



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

  const toolsImg = dataContenfulNode.toolsImg.fixed;


  return (
    <Layout>
      <SEO title="Home" />
      <HomeBanner homeBannerData={homeBannerContenful}/>
         <div className="container container-xl py-16 mx-auto">
          <h2 className="text-center mb-20">{serviceTitle}</h2>
          <div className="grid  sm:grid-cols-4 grid-cols-2">
            {serviceGrid.map(service => {
              return <CardComponent key={service.id} cardInfo={service}/>
            })}
          
          </div>
        </div>
        <div className="grid-switcher">
            {halfGridSection.map(halfGrid => {
              return <HalfGridImg key={halfGrid.id} gridData={halfGrid} />
            })}
        </div>
     
        
         <div className="container container-xl py-16 mx-auto text-center">
          <h1>{toolsText.title}</h1> 
          <p className="max-w-lg mx-auto">{toolsText.description}</p>
            <Img fixed={toolsImg} />
          <BtnComponent text={'Read more'}/>
       </div> 
    </Layout>
  )
}



export const query = graphql`
{
    allContentfulHome {
          edges {
            node {
                        homeBanner {
                          image {
                            fluid {
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
                            fixed(width: 600, height: 350) {
                              ...GatsbyContentfulFixed_noBase64
                            }
                        }
                      }
                    }
          }
  }
`;



export default IndexPage  
