import React from 'react'
import Img from "gatsby-image"





const HalfGridImg = ({gridData})  => {


    return(
        <>
            <div className="grid pt-16 grid-cols-2">
                <div>
                    {console.log(gridData, "grid data ar fi frumos")}
                    {<Img fluid={gridData[0].node.gridImage.fluid}/>}
                </div>
                <div>
                <div className="flex bg-gray-200  flex-col h-full justify-center text-right px-10">
                    <h2>{gridData[0].node.gridText.title}</h2>
                    <h3>{gridData[0].node.gridText.subtitle}</h3>
                    <p className="mb-2">{gridData[0].node.gridText.description} </p>
                </div>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div>
                <div className="flex bg-gray-200 flex-col h-full justify-center text-left px-10">
                    <h2>{gridData[1].node.gridText.title}</h2>
                    <h3>{gridData[1].node.gridText.subtitle}</h3>
                    <p className="mb-2">{gridData[1].node.gridText.description} </p>
                </div>
                </div>
                <div>
                    {<Img fluid={gridData[1].node.gridImage.fluid}/>}
                </div>
              
            </div>
        </>
    )
}


export default HalfGridImg;