import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardComponent from "../components/CardComponent"
import HomeBanner from '../components/HomeBanner'
import HalfGridImg from "../components/HalfGridImg"
import Img from 'gatsby-image'
import {Link} from 'gatsby'

const IndexPage = ({data}) =>  {


const strapiNode = data.allStrapiHomepage.edges[0].node;

// ================= HOME BANNER SECTION =================

const bannerFluid = strapiNode.bannerimage.childImageSharp.fluid;
const title = strapiNode.bannertext[0].title;
const subtitle = strapiNode.bannertext[0].subtitle;
const description = strapiNode.bannertext[0].description;

 const bannerFields = {
    imgFluid: bannerFluid,
    title,
    subtitle,
    description
}

// ================ SERVICES SECTION ========================
const services = strapiNode.services;

// =============== IMAGETEXTTRIAD SECTION ==================

const imagetexttriad = strapiNode.imagetexttriad;


 // ================ TOOLS SECTION ====================

const hometools =  {
    title: strapiNode.hometoolstext.title || '',
    subtitle: strapiNode.hometoolstext.subtitle || '',
    description: strapiNode.hometoolstext.description || ''
}

const hometoolsfluid = strapiNode.hometoolsimage.childImageSharp.fluid;
  return (
    <Layout>

      <SEO title="okay"
           meta={[
              {charset: 'UTF-8'},
              { name: 'description', content: 'asd' },
              {'http-equiv': 'Content-Type', content: 'text/html;'},
            ]}
      />


        <HomeBanner homeBannerData={bannerFields} />
        <div className="container container-xl  py-10 md:py-20 mx-auto">
            <h2 className="font-body text-center mb-16 sm:mb-20 underline-custom underline-custom--center">Our services</h2>
                <div className="grid row-gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service,index) => {
                        return <CardComponent  key={service.id} cardInfo={service} iconNumber={index}/>
                    })}
                </div>
        </div>
        <div className="grid-switcher">
            {imagetexttriad.map(imageTextTriadSingle => {
            return <HalfGridImg key={imageTextTriadSingle.id} 
                                gridData={imageTextTriadSingle} />
            })}
        </div>

        <div className="container container-xl py-8 sm:py-16 mx-auto text-center px-4">
            <h2 className="font-body underline-custom underline-custom--center text-main-color tracking-wider">{hometools.title}</h2> 
            <h3>{hometools.subtitle}</h3>
            <p className="max-w-lg mx-auto mb-8">{hometools.description}</p>
            <Img fluid={hometoolsfluid} className="mb-8 shadow-md max-w-lg mx-auto"/>
            <Link className="btn" to={`/neurofeedback`}> Read More</Link>
        </div> 
    </Layout>
  )
}



export const query = graphql`
{
    allStrapiHomepage {
        edges {
          node {
            bannertext {
              description
              title
              subtitle
            }
            bannerimage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            services {
                id
                title
                subtitle
                description
            }
            imagetexttriad {
                id
                image {
                  childImageSharp {
                    fluid (maxWidth:1200, maxHeight: 700) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
                textTriad {
                  subtitle
                  title
                  description
                }
              }
              hometoolstext {
                  title
                  subtitle
                  description
              }
              hometoolsimage {
                      childImageSharp {
                          fluid (maxWidth: 900) {
                            ...GatsbyImageSharpFluid_tracedSVG
                          }
                      }
              }
          }
        }
      }
}
`;



export default IndexPage  
