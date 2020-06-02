import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'


const TestPage = ({data})  => {
    const test = data.allStrapiHomepage.edges[0].node.bannerimage;
    return (
        <>
            <Img fluid={test.childImageSharp.fluid}/>
        </>
    )
}


export const query = graphql`
            {
                allStrapiHomepage {
                    edges {
                      node {
                        bannerimage {
                          childImageSharp  {
                            fluid (maxWidth: 2000) {
                             ...GatsbyImageSharpFluid_noBase64
                            }
                          }
                        }
                      }
                    }
                  }
            }
`;

export default TestPage