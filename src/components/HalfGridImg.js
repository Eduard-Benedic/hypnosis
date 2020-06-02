import React from 'react'
import Img from "gatsby-image"





const HalfGridImg = ({gridData})  => {

    const imgFluid = gridData.image.childImageSharp.fluid;
    const title = gridData.textTriad.title;
    const subtitle = gridData.textTriad.subtitle;
    const description = gridData.textTriad.description;


    return(
        <>
            <div className="grid sm:grid-cols-2 grid-cols-1">
                <div>
                    {<Img fluid={imgFluid}/>}
                </div>

                <div>
                    <div className="flex flex-col justify-center py-8 sm:py-0 px-4 sm:px-10 bg-gray-200  h-full  text-center sm:text-right">
                        <h2 className="font-body text-main-color mb-2 md:mb-5">{title}</h2>
                        <h3 className="text-base italic mb-2">{subtitle}</h3>
                        <p className="mb-2">{description} </p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default HalfGridImg;