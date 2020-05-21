import React from 'react'

import {useStaticQuery, graphql} from 'gatsby'





const ThumbnailComponent = () => {
    const thumbnailImages = useStaticQuery(graphql`
   query  {  allFile(filter: {ext: {regex: "/(jpg)/"}, relativeDirectory: {eq: "home_thumbnail"}}) {
        edges {
          node {
            name
            relativeDirectory
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
    }}
    `)
    return (
        <>
            <div>{console.log(thumbnailImages)}</div>
        </>
    )
}


export default ThumbnailComponent