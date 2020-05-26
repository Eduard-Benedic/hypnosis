import React from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


export const query = graphql`
{
    allFile(filter: {relativePath: {eq: "coach.jpg"}}) {
        edges {
          node {
            childImageSharp {
              fixed(width: 180, height: 180) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
}

`


const ContactPage = ({data}) => {
    return (
        <>
        <Layout>
            <div className="pt-32 pb-20">
                <h1 className="font-body text-center underline-custom underline-custom--center">I am here to help, Contact Me</h1>
                <h2 className="font-body text-center">Because I care</h2>
                <p className="max-w-lg mx-auto text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus sit voluptatum inventore vitae quam aliquam amet eligendi est nisi ratione?</p>
            </div>
            <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 px-8 mb-12">
                <div className="text-center">
                     <Img fixed={data.allFile.edges[0].node.childImageSharp.fixed} className='mb-4' imgStyle={{borderRadius: '50%'}}/>
                    <h3 className="mb-5">Our office</h3>
                    <p className="mb-2"> <i>Address:</i> 223 A, Bucharest, Strada etc</p>
                    <p className="mb-2"><i>Phone Number:</i> <a className="text-banner-background font-bold" href="+tel:7480735866">+7480735866</a></p>
                    <p><i>Zip code: </i> FGA 77A</p>
                </div>
                <div className="text-center">
                     <Img fixed={data.allFile.edges[0].node.childImageSharp.fixed} className='mb-4' imgStyle={{borderRadius: '50%'}}/>
                    <h3 className="mb-5">Our office</h3>
                    <p className="mb-2"> <i>Address:</i> 223 A, Bucharest, Strada etc</p>
                    <p className="mb-2"><i>Phone Number:</i> <a className="text-banner-background font-bold" href="+tel:7480735866">+7480735866</a></p>
                    <p><i>Zip code: </i> FGA 77A</p>
                </div>
                <div className="text-center">
                     <Img fixed={data.allFile.edges[0].node.childImageSharp.fixed} className='mb-4' imgStyle={{borderRadius: '50%'}}/>
                    <h3 className="mb-5">Our office</h3>
                    <p className="mb-2"> <i>Address:</i> 223 A, Bucharest, Strada etc</p>
                    <p className="mb-2"><i>Phone Number:</i> <a className="text-banner-background font-bold" href="+tel:7480735866">+7480735866</a></p>
                    <p><i>Zip code: </i> FGA 77A</p>
                </div>
            </div>
        </Layout>
           
        </>
    )
}



export default ContactPage;