import React from "react"
// import PropTypes from "prop-types"

import {Link} from 'gatsby'
import {useStaticQuery, graphql} from 'gatsby'


const Footer = () => {

    const data = useStaticQuery(graphql`
            query siteName {
                site {
                    siteMetadata {
                        companyName,
                        menuLinks {
                            name,
                            to
                        }
                        }
                    }
                }
        `);

        const menuLinks = data.site.siteMetadata.menuLinks;
    return (
        <>
            <footer className="font-body bg-background-common">
                <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1  md:grid-cols-2 py-8">
                    <div className="flex flex-wrap h-full items-center justify-center md:justify-start mb-8 md:mb-0">
                    {menuLinks.map((link,index) => {
                    
                        return  <Link key={index} className="mr-4 tracking-widest uppercase text-white" to={link.to}>{link.name}</Link>
                    })}
                    </div>
                    <div className="flex flex-col  content-center text-white tracking-wide text-center md:text-right text-lg" >
                        <span>&copy; {new Date().getFullYear()} {data.site.siteMetadata.companyName}</span>
                    </div>
                </div>
                </div>
            </footer>
        </>
    )
}


export default Footer;