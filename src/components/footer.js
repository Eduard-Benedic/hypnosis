import React from "react"
// import PropTypes from "prop-types"

import CommonLink from "./CommonLink"


const Footer = ({siteNavigation}) => {
    return (
        <>
            <footer className="font-body bg-background-common">
                <div className="container px-4">
                <div className="grid grid-cols-2 py-8">
                    <div className="flex h-full items-center">
                        
                    { siteNavigation.map((navLink, index) =>  {
                        return <CommonLink key={index} redirectTo={navLink} />
                            })
                    }

                    </div>
                    <div className="flex flex-col content-center text-white tracking-wide text-right text-lg" >
                        <span>&copy; {new Date().getFullYear()} Neurohypnosis Insitute</span>
                    </div>
                </div>
                </div>
            </footer>
        </>
    )
}


export default Footer;