import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import {Link} from 'gatsby'

import CommonBanner from '../components/CommonBanner'
import ReactMarkdown from 'react-markdown'

import SEO from '../components/seo'

import Img from 'gatsby-image'




const ServiceTemplate = ({data}) => {
   
  const node =  data.allMarkdownRemark.edges[0].node;
  const frontmatter = node.frontmatter;
  
  const pagetitle = frontmatter.pagetitle;
  const bannerData = {
      title: frontmatter.banner.title,
      fluid: frontmatter.banner.image.childImageSharp.fluid
  }
  
  const html = node.html;


    // ========== MAJOR SECTION =====================



   console.log(data)
   
    return (
        <>
        <Layout>
          <SEO title={'title'}
               meta={[
                 {charset: 'UTF-8'},
                 {name: 'description', content: 'okay'}
               ]} 
          />
            <h1 className="mt-16 md:mt-32 mb-20 text-center underline-center">{pagetitle}</h1>
            <div className="relative">
                <div className="absolute z-10 inset-0 gradient">
                    &nbsp;
                </div>
               <Img className="h-screen" fluid={bannerData.fluid}/>
            </div>
            <div className="content leading-loose max-w-5xl mx-auto py-8 sm:py-16 sm:px-4 px-8">
                {/* {html} */}
                <ReactMarkdown escapeHtml={false} source={html} />
                  <div className="py-10">
                        <h2>Programeaza o sedinta acum</h2>
                      
                  </div>
            </div>

         
        </Layout>
            
        </>
    )
}


export const pageQuery = graphql`
  query ServicePage($slug: String!){
    allMarkdownRemark(filter: {fields: {slug: {eq: $slug}}}) {
      edges {
          node {
            html
              frontmatter {
                  pagetitle
                  banner {
                      title
                      image {
                          childImageSharp {
                              fluid (maxWidth: 2200) {
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


export default ServiceTemplate;