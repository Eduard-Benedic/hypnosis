
import React, {useRef, useEffect} from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeBanner from "../components/HomeBanner"
import Card from '../components/CardComponent'
import {Link} from 'gatsby'

import Img from 'gatsby-image'
import HalfGridImg from '../components/HalfGridImg'

import { gsap }from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const IndexPage = ({data}) =>  {

    const servicesRef = useRef(null);
    const gridRef = useRef(null);
    const neurofeedbackRef = useRef(null);
  

    useEffect(() => {
        gsap.to(servicesRef.current.children, {
          scrollTrigger: {
            trigger: servicesRef.current,
           
          },
          transform: 'translateX(0px)',
          opacity: 1,
          stagger: 0.2,
        })
        gsap.to(neurofeedbackRef.current.children, {
          scrollTrigger: {
            trigger: neurofeedbackRef.current,
           
          },
          transform: 'translateY(0px)',
          opacity: 1,
          stagger: 0.2,
        })
    
    }, []);
  

      const frontmatter = data.allMarkdownRemark.edges[0].node.frontmatter;
      const bannerData = {
            title: frontmatter.title,
            subtitle: frontmatter.subtitle,
            description: frontmatter.description,
            fluid: frontmatter.bannerImage.childImageSharp.fluid
      }
      const serviceArray = frontmatter.services;
      const switchgrid = frontmatter.switchgrid;
      const neurofeedback = frontmatter.neurofeedback;



  return (
      <Layout>

            <SEO title="okay"
            meta={[
                  {charset: 'UTF-8'},
                  { name: 'description', content: 'asd' },
                  {'http-equiv': 'Content-Type', content: 'text/html;'},
                  ]}
            />

            <HomeBanner data={bannerData} />
            <div className="container container-xl  py-10 md:py-20 mx-auto">
                  <h2 className="font-body text-center mb-16 sm:mb-20 underline-custom underline-custom--center">Our services</h2>
                <div ref={servicesRef} className="grid row-gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {serviceArray.map((service,index) => {
                        return( <div className="opacity-0 transform translate-x-12">
                                    <Card  
                                    key={service.id} 
                                    data={service} 
                                    iconNumber={index}/>
                                </div>
                        )
                    })}
                </div>
            </div>
         
            <div  className="grid-switcher">
                  {switchgrid.map(grid => {
                        return ( 
                        
                                  <HalfGridImg 
                                    key={grid.id} 
                                    data={{
                                          title: grid.title,
                                          subtitle: grid.subtitle,
                                          description: grid.description,
                                         fluid: grid.image.childImageSharp.fluid
                                    }} />
                         
                      
                        )
                        })
                  }
            </div>
            <div ref={neurofeedbackRef} className="container container-xl py-8 sm:py-16 mx-auto text-center px-4">
                  <h2 className="opacity-0 mb-8 transform translate-y-20 font-body underline-custom underline-custom--center text-main-color tracking-wider">{neurofeedback.title}</h2> 
                  <h3 className="opacity-0 transform translate-y-20">{neurofeedback.subtitle}</h3>
                  <p className="opacity-0 transform translate-y-20 max-w-lg mx-auto mb-8">{neurofeedback.description}</p>
                
                <div className="opacity-0 transform translate-y-20">
                <Img fluid={neurofeedback.image.childImageSharp.fluid} className="mb-8 shadow-md max-w-lg mx-auto"/>
                  </div>  
                  <Link className="btn opacity-0 transform translate-y-20" to={`/neurofeedback`}> Read More</Link>
            </div> 
      </Layout>
  )
}




export const query = graphql`
query HomePageMarkdown {
      allMarkdownRemark(filter: {frontmatter: {identifier: {eq: "home"}}}) {
            edges {
                  node {
                        id
                        frontmatter {
                              title
                              subtitle
                              description
                              bannerImage {
                                    childImageSharp {
                                                fluid(maxWidth: 2000) {
                                                      ...GatsbyImageSharpFluid
                                                }
                                          }     
                              }

                              services {
                                    title
                                    subtitle
                                    description
                              }

                              switchgrid {
                                    id
                                    title
                                    subtitle
                                    description
                                    image {
                                          childImageSharp {
                                                fluid(maxWidth: 1000) {
                                                      ...GatsbyImageSharpFluid
                                                }
                                          }
                                    }
                              }

                              neurofeedback {
                                    title
                                    subtitle
                                    image {
                                          childImageSharp {
                                                fluid(maxWidth: 900) {
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


export default IndexPage  

