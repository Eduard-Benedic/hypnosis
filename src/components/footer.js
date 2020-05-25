import React from "react"
// import PropTypes from "prop-types"

import {Link} from 'gatsby'


const Footer = () => {
    return (
        <>
            <footer className="font-body bg-background-common">
                <div className="container px-4">
                <div className="grid grid-cols-2 py-8">
                    <div className="flex h-full items-center">
                        
                <Link className="mr-4 tracking-widest uppercase text-white" to={'/'}>Home</Link>
                <Link className="mr-4 tracking-widest uppercase text-white" to={'/articles'}>Articles</Link>
                <Link className="mr-4 tracking-widest uppercase text-white" to={'/about'}>About</Link>
                <Link className="mr-4 tracking-widest uppercase text-white" to={'/contact'}>Contact</Link>
            
        

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