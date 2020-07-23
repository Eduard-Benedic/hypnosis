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
            <footer className="bg-background-common py-20">
                <div className="container mx-auto px-8 flex flex-col sm:flex-row justify-between">
                    <div className="flex flex-col pr-4 border-r border-solid border-custom-white ">
                        {menuLinks.map((link,index) => {
                            return  <Link key={index} className="text-2xl hover:text-second-color mb-4 mr-4 tracking-widest  text-white" to={link.to}>{link.name}</Link>
                        })}
                    </div>
                    {/* <div className="flex flex-col pr-4 border-r border-solid border-custom-white text-white ">
                        <h2 className="">Contact</h2>
                        <ul>
                            <li className="text-2xl mb-4 mr-4 tracking-widest">Adresa macesului</li>
                        </ul>
                    </div> */}
                    <div className="text-2xl flex flex-col justify-center text-white items-center">
                        <span> {data.site.siteMetadata.companyName} </span> 
                        <span>&copy;{new Date().getFullYear()}</span>
                    </div>
                </div>
            </footer>
        </>
    )
}


export default Footer;
