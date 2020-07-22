import React from 'react'
import Img from 'gatsby-image'


const CommonBanner = ({data: {fluid, title, subtitle}}) => {

    return (
        <>
             <div style={{maxHeight: '60vh'}} className="relative ">
                {<Img durationFadeIn={600} 
                        fadeIn={true}
                        imgStyle={{maxHeight: '60vh'}}
                        style={{maxHeight: '60vh'}}
                        placeholderStyle={{maxHeight: '60vh'}}
                        fluid={fluid} />
                }
                <div className="absolute bg-banner-background z-10 w-full h-full inset-0 ">
                    <div className="font-body container container-xl mx-auto px-8 text-white absolute bottom-0 left-0 right-0">
                        <h1 className="font-body tracking-widest">{title}</h1>
                        {subtitle ?  <h2 className="font-body tracking-widest">subtitle</h2> : ''}
                    </div>
                </div>
            </div>
        </>

    )
}


export default CommonBanner;