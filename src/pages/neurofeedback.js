import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import {Link} from 'gatsby'

import CommonBanner from '../components/CommonBanner'

import SEO from '../components/seo'

import Img from 'gatsby-image'




const Neurofeedback = ({data}) => {
   
   
  const frontmatter = data.allMarkdownRemark.edges[0].node.frontmatter;
  const pagetitle = frontmatter.pagetitle;
  const bannerData = {
      title: frontmatter.banner.title,
      fluid: frontmatter.banner.image.childImageSharp.fluid
  }
  


    // ========== MAJOR SECTION =====================



   
   
    return (
        <>
        <Layout>
          <SEO title={'title'}
               meta={[
                 {charset: 'UTF-8'},
                 {name: 'description', content: 'okay'}
               ]} 
          />
            <h1 className="pt-32 pb-20 text-center">{pagetitle}</h1>
            <div>
               <Img  className="h-screen" fluid={bannerData.fluid}/>
            </div>
        </Layout>
            
        </>
    )
}


export const pageQuery = graphql`
  query Neurofeedbackpage{

    allMarkdownRemark(filter: {frontmatter: {identifier: {eq: "neurofeedback"}}}) {
      edges {
          node {
              id
              frontmatter {
                  pagetitle
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
              }
          }
      }
  }
}
`


export default Neurofeedback;