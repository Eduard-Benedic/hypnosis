import React, {useRef, useEffect, useState} from 'react'
import Img from "gatsby-image"

import { gsap }from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)



const HalfGridImg = ({data: { title, subtitle, description, fluid}})  => {

    const imgRef  = useRef(null);
    const textRef = useRef(null);
    

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: imgRef.current,
                start: "top center"
            }
        })
        
        tl.to(imgRef.current, {
            
            transform: 'translateX(0)',
            opacity: 1,
            duration: 0.6
        })
        .to(textRef.current.children, {
            opacity: 1,
            transform: 'translateX(0)', 
            duration: 0.8,
            stagger: 0.2
        })
    },[])
    return(
        <>
            <div className="grid sm:grid-cols-2 grid-cols-1 shadow-md">
                <div className="opacity-0 transform -translate-x-16" ref={imgRef}>
                    <Img fluid={fluid} />
                </div>

                <div>
                    <div ref={textRef} className="flex flex-col justify-center py-8 sm:py-0 px-4 sm:px-10 bg-gray-200  h-full  text-center sm:text-right">
                        <h2 className="text-main-color mb-2 md:mb-5 opacity-0 transform translate-x-16">{title}</h2>
                        <h3 className="italic mb-2 transform opacity-0 translate-x-16">{subtitle}</h3>
                        <p className="mb-2 opacity-0 transform translate-x-16">{description} </p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default HalfGridImg;