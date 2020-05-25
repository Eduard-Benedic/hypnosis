import React from 'react' 

import {useStaticQuery, graphql}  from 'gatsby'
import Img from 'gatsby-image'

import BtnComponent from '../components/BtnComponent'




const ArticleCard = () => {

    const data = useStaticQuery(graphql`

        {
            allFile(limit: 1,  filter: {relativePath: {eq: "time.jpg"}}) {
                edges {
                  node {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid_noBase64
                      }
                    }
                  }
                }
              }
        }

    `)
    return (
        <>
            <article className="grid grid-cols-5 border-r border-gray-400 pr-4">
                <div className="col-span-2">
                    {console.log(data.allFile.edges[0].node.childImageSharp.fluid)}
                    <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
                </div>
                <div className="col-span-3 pl-4" >
                    <h2 className="text-xl ">Race against time</h2>
                    <div className="mt-2 mb-4">
                        <span className="text-sm"><i>Published on: </i> 20-05-20015</span> <br/>
                        {/* <span className="text-sm"><i>Author: </i> Emanuel Benedic</span> */}
                    </div>
                   <p className="text-sm">Some description that will go in this article I am goind to set a limit
                    just in case Lorem, ipsum dolor.
                   </p>
                   <div style={{textAlign: 'right'}}>
                        <BtnComponent text={'Read More'}/>
                   </div>
                   
                    
                </div>
            </article>
        </>
    )
}


export default ArticleCard