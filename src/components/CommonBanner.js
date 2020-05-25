import React from 'react'
import Img from 'gatsby-image'


const CommonBanner = ({bannerData: {imgFluid, title, subtitle}}) => {

    return (
        <>
             <div style={{maxHeight: '60vh'}} className="relative ">
                {<Img durationFadeIn={600} 
                        fadeIn={true}
                        imgStyle={{maxHeight: '60vh'}}
                        style={{maxHeight: '60vh'}}
                        placeholderStyle={{maxHeight: '60vh'}}
                        fluid={imgFluid} />
                }
                <div className="absolute bg-banner-background z-10 w-full h-full inset-0 ">
                    <div className="font-body container container-xl mx-auto px-4 text-white absolute bottom-0">
                        <h1 className="font-body tracking-widest">{title}</h1>
                        <h2 className="font-body tracking-widest">{subtitle}</h2>
                    </div>
                </div>
            </div>
        </>

    )
}


export default CommonBanner;