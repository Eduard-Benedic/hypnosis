import React from "react"
// import { Link } from "gatsby"

import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardComponent from "../components/CardComponent"
import HalfGridImg from "../components/HalfGridImg"
import ThumbnailComponent from "../components/ThumbnailComponent"
import TestContentful from "../components/TestContentful"
import HomeBanner from '../components/HomeBanner'



export const query  = graphql`
          {
              allContentfulHome {
                  edges {
                    node {
                      serviceTitle,
                      serviceTriad {
                      id,
                      title,
                      subtitle,
                      description
                      },

                    }
                  }
                }
                allContentfulHalfGrid {
                  edges {
                    node {
                      gridImage {
                        fluid (maxWidth:1200, maxHeight: 700) {
                          ...GatsbyContentfulFluid_noBase64
                        }
                      }
                      gridText {
                        subtitle
                        title
                        description
                      }
                    }
                  }
                }
          }
`
const IndexPage = ({data}) =>  {
  const serviceTitle = data.allContentfulHome.edges[0].node.serviceTitle;
  const serviceTriad = data.allContentfulHome.edges[0].node.serviceTriad;


  const gridData = data.allContentfulHalfGrid.edges;
  console.log(gridData, "this i smy gryd data that i just added")

  return (
    <Layout>
      <SEO title="Home" />
      <HomeBanner />
        <div className="container container-xl py-16 mx-auto">
          <h2 className="text-center mb-20">{serviceTitle}</h2>
          <div className="grid grid-cols-4">
            {serviceTriad.map(service => {
              return <CardComponent key={service.id} cardInfo={service}/>
            })}
          
          </div>
        </div>
       <HalfGridImg gridData={gridData}></HalfGridImg>
       <div className="container container-xl py-16 mx-auto text-center">
          <h1>Top quality tools</h1> 
          <p className="max-w-lg mx-auto">We are using the latest and most innovative technologies to identify cerebral patterns and help to destory and destructure negative thoughts</p>
          <ThumbnailComponent />
          <TestContentful />
       </div>
    </Layout>
  )
}


export default IndexPage  
