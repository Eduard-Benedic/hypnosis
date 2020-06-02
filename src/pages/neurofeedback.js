import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import {Link} from 'gatsby'

import CommonBanner from '../components/CommonBanner'

import SEO from '../components/seo'

import Img from 'gatsby-image'




const Neurofeedback = ({data}) => {
   
   
    const strapiNode = data.allStrapiNeurofeedbackpage.edges[0].node;

    //  =============== BANNER  =========================

    const banner = {
      fluid: strapiNode.banner.image.childImageSharp.fluid,
      title: strapiNode.banner.title,
      subtitle: strapiNode.banner.subtitle
    }

    
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


    // ========== MAJOR SECTION =====================



    const majorSection = {
      fluid: strapiNode.image.childImageSharp.fluid,
      title: strapiNode.title,
      content: strapiNode.largecontent
    }
   
   
   
    return (
        <>
        <Layout>
          <SEO title={'title'}
               meta={[
                 {charset: 'UTF-8'},
                 {name: 'description', content: 'okay'}
               ]} 
          />
        <CommonBanner bannerData={{ imgFluid: banner.fluid, title: banner.title, subtitle: banner.subtitle}} /> 
          <div className="container container-xl mx-auto py-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 mb-16">
                  <div className="text-left border-r border-gray-400 border-banner-background px-4 lg:px-8">
                        <h2 className="mb-8 underline-custom underline-custom--left">{leftColumn.title} </h2>
                        <h3>{leftColumn.subtitle}</h3>
                        <p>{leftColumn.content}</p>
                      
                  </div>
                  <div className="lg:text-left px-4 lg:px-8">
                        <h3>{rightColumn.title}</h3>
                        <p>{rightColumn.content}</p>
                       
                  </div>
              </div>
             <div className="container container-xl mx-auto px-6">
                <h2 className="text-center mb-16 underline-custom underline-custom--center">{majorSection.title}</h2>
                 
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <Img style={{maxHeight: '400px'}} fluid={majorSection.fluid}/>
                  <div className="max-w-4xl mx-auto leading-loose px-5 pt-5 sm:pt-0">
                    <p>{majorSection.content}</p>  
                      <p>To find out more <Link className="btn text-center mt-4 block sm:ml-3 sm:inline-block" to="/contact">Contact me</Link></p>
                  </div>
                </div>
                 
             </div>
          </div>
        </Layout>
            
        </>
    )
}


export const pageQuery = graphql`
 {
      allStrapiNeurofeedbackpage {
        edges {
          node {
            banner {
              title
              subtitle
              image {
                childImageSharp {
                  fluid(maxWidth: 2200) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
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
            image {
              childImageSharp {
                fluid (maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            title
            largecontent
          }
        }
      }
}
`


export default Neurofeedback;