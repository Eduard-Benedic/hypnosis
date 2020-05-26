import React from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


export const query = graphql`
{

    allContentfulContact {
        edges {
          node {
            textSet {
              title
              subtitle
              description
            }
            columns {
              image {
                fixed(width: 180, height: 180) {
                  ...GatsbyContentfulFixed
                }
              }
              textLines {
                json
              }
            }
          }
        }
      }

}

`


const ContactPage = ({data}) => {
    const dataNode = data.allContentfulContact.edges[0].node;

    const title = dataNode.textSet.title;
    const subtitle = dataNode.textSet.subtitle;
    const description = dataNode.textSet.description;


    const columns = dataNode.columns;
    return (
        <>
        <Layout>
            <div className="pt-20 px-2 md:pt-32 pb-10 md:pb-20 ">
                <h1 className="font-body text-center underline-custom underline-custom--center">{title}</h1>
                <h2 className="font-body text-center">{subtitle}</h2>
                <p className="max-w-lg mx-auto text-center">{description}</p>
            </div>
            <React.Fragment>
            <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 px-8 mb-12">
                {columns.map(column => {
                    return (
                       <div className="flex flex-col items-center">
                            <Img fixed={column.image.fixed} className='mb-8' imgStyle={{borderRadius: '50%'}} />
                                    <div className="text-center">
                                    {documentToReactComponents(column.textLines.json)}
                            </div>
                        </div>
                    )
                })}

            </div>
            </React.Fragment>
        </Layout>
           
        </>
    )
}



export default ContactPage;