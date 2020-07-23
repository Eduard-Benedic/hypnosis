import React from 'react'
import Img from 'gatsby-image'







const HomeBanner = ({data: {title, subtitle,description, fluid}}) => {


    
    
    return (
        <>
            <div className="relative max-h-screen ">
                {<Img durationFadeIn={600} 
                        fadeIn={true}
                        imgStyle={{maxHeight: '100vh'}}
                        style={{maxHeight: '100vh'}}
                        fluid={fluid} />
                }
                <div className="absolute z-10 w-full inset-0 gradient">
                    <div className="w-full mx-auto max-w-xl  absolute px-12 top-half text-white transform -translate-y-1/2">
                        <h1 className="font-bold tracking-widest mb-0">{title}</h1>
                        <h2 className="underdash mb-8 text-2xl">{subtitle}</h2>
                        <p className="leading-relaxed tracking-wider text-sm md:text-lg">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default HomeBanner;