import React from 'react'
import Img from "gatsby-image"





const HalfGridImg = ({gridData})  => {

    const imgFluid = gridData.gridImage.fluid;


    const title = gridData.gridText.title;
    const subtitle = gridData.gridText.subtitle;
    const description = gridData.gridText.description;


    return(
        <>
            <div className="grid sm:grid-cols-2 grid-cols-1">
                <div>
                    {<Img fluid={imgFluid}/>}
                </div>

                <div>
                    <div className="flex bg-gray-200 flex-col h-full justify-center text-center sm:text-right px-4 pt-4 sm:px-10">
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