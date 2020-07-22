import React from 'react'
import Img from 'gatsby-image'







const HomeBanner = ({data: {title, subtitle,description, fluid}}) => {


    
    
    return (
        <>
            <div className="relative max-h-screen">
                {<Img durationFadeIn={600} 
                        fadeIn={true}
                        imgStyle={{maxHeight: '100vh'}}
                        style={{maxHeight: '100vh'}}
                        fluid={fluid} />
                }
                <div className="absolute bg-banner-background z-10 w-full inset-0">
                    <div className="container container-xl max-w-lg mx-auto absolute px-4 top-half text-white transform -translate-y-1/2">
                        <h1 className="font-body tracking-widest mb-2 sm:mb-4 text-xl lg:text-4xl">{title}</h1>
                        <h2 className="text-sm lg:text-2xl">{subtitle}</h2>
                        <p className="font-body leading-relaxed tracking-wider text-sm md:text-lg">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default HomeBanner;