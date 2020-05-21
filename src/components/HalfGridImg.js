import React from 'react'
import Img from "gatsby-image"
import {graphql, useStaticQuery} from 'gatsby'





const HalfGridImg = ()  => {

    // ...GatsbyImageSharpFluid_noBase64
    //...GatsbyImageSharpFluidLimitPresentationSize
    const presentationImg = useStaticQuery(graphql`
        query HalfGridImg {
            image1: file(relativePath: { eq: "man.jpg" }) {
                childImageSharp {
                    fluid (maxWidth:1200, maxHeight: 600) {
                        ...GatsbyImageSharpFluid_noBase64
                        ...GatsbyImageSharpFluidLimitPresentationSize
                        } 
                    }
              }
              image2: file(relativePath: { eq: "person.jpg" }) {
                childImageSharp {
                    fluid (maxWidth:1200, maxHeight: 700) {
                        ...GatsbyImageSharpFluid_noBase64
                        ...GatsbyImageSharpFluidLimitPresentationSize
                        } 
                    }
              }
        }
    `)
    return(
        <>
            <div className="grid pt-16 grid-cols-2">
                <div>
                    {<Img fluid={presentationImg.image1.childImageSharp.fluid}/>}
                </div>
                <div>
                <div className="flex bg-gray-200  flex-col h-full justify-center text-right px-10">
                    <h2>Understand your mind</h2>
                    <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    <p>Totam, tempore animi! Laudantium expedita tempora praesentium. Hic quia rerum magnam facilis.</p>
                </div>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div>
                <div className="flex bg-gray-200 flex-col h-full justify-center text-left px-10">
                    <h2>Understand your spirit</h2>
                    <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    <p>Totam, tempore animi! Laudantium expedita tempora praesentium. Hic quia rerum magnam facilis.</p>
                </div>
                </div>
                <div>
                    {<Img fluid={presentationImg.image2.childImageSharp.fluid}/>}
                </div>
              
            </div>
        </>
    )
}


export default HalfGridImg;