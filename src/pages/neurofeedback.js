import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';

import CommonBanner from '../components/CommonBanner'

// import Img from 'gatsby-image'




const Neurofeedback = ({data}) => {




    return (
        <>
        <Layout>
        <CommonBanner bannerData={{ imgFluid: data.allFile.edges[0].node.childImageSharp.fluid, title: 'Neurofeedback', subtitle: 'Totul despre neurofeedback'}} /> 
          <div className="container container-xl mx-auto py-16">
              <div className="grid grid-cols-2 gap-8">
                <h2 className="text-center mb-4">Lorem ipsum dolor sit amet. ? </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p> Quis dicta fugit labore quia facilis fugiat molestias accusantium dolore, aliquid excepturi necessitatibus repellendus delectus laudantium natus blanditiis dolorum nam voluptatibus explicabo similique! Odio dolorum at, maxime aspernatur amet quod libero quasi corrupti sit ad reiciendis repudiandae consectetur omnis alias consequuntur autem.</p>
              </div>
             
          </div>
        </Layout>
            
        </>
    )
}


export const pageQuery = graphql`
        query imageQuery {
            allFile(filter: {relativePath: {eq: "neurofeedback.jpg"}}) {
                edges {
                  node {
                    childImageSharp {
                      fluid(maxWidth: 2200) {
                        ...GatsbyImageSharpFluid_noBase64
                      }
                    }
                  }
                }
              }
        }
`


export default Neurofeedback;