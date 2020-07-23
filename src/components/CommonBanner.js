import React from 'react'
import Img from 'gatsby-image'


const CommonBanner = ({data: {fluid, title, subtitle}}) => {

    return (
        <>
             <div style={{maxHeight: '80vh'}} className="relative">
                {<Img durationFadeIn={600} 
                        fadeIn={true}
                        imgStyle={{height: '80vh'}}
                        className="max-h-full"
                        fluid={fluid} />
                }
                <div className="absolute z-10 w-full h-full inset-0 gradient">
                    <div className="font-body container container-xl mx-auto px-8 text-white absolute bottom-0 left-0 right-0">
                        <h1 className="font-body tracking-widest">{title}</h1>
                        {subtitle ?  <h2 className="">{subtitle}</h2> : ''}
                    </div>
                </div>
            </div>
        </>

    )
}


export default CommonBanner;