import PropTypes from "prop-types"
import React, {useState} from "react"

import {useStaticQuery, graphql} from 'gatsby'
import {Link} from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Header = () => {

  const data = useStaticQuery(graphql`
      {
        site {
          siteMetadata {
            menuLinks {
              to,
              name
            }
          }
        }
      }
  `)

  const menuLinks = data.site.siteMetadata.menuLinks;

  const [nav, showNav] = useState(false);
 
  return (
    <>
      <header className="font-body w-full relative">
        <div className="block md:hidden fixed z-50 top-0 right-0 pt-8 pr-4 text-4xl text-right" style={{color: '#F97F8C'}}>
           <FontAwesomeIcon  onClick={() => showNav(!nav)}  icon={faBars} />
        </div>
 
      <nav style={{backgroundColor: '#6b366be0'}} className={`md:hidden fixed inset-0 z-40 transform ${nav ? '-translate-x-full' : 'translate-x-0'} text-white flex flex-col h-screen justify-center items-center transition transition-transform duration-300 ease-linear`}>
        
          {menuLinks.map((link, index) => {
            return  <Link  className="mr-4 mb-5 tracking-widest uppercase text-white" to={link.to}>{link.name}</Link>
          })}
        </nav>
        <nav className="hidden md:block absolute inset-x-0 z-50 bg-banner-background">
            <div className="container py-4 flex justify-end mx-auto">
            <Link className="mr-4 tracking-widest uppercase text-white" to={'/'}>Home</Link>
            <Link className="mr-4 tracking-widest uppercase text-white" to={'/articles'}>Articles</Link>
            <Link className="mr-4 tracking-widest uppercase text-white" to={'/about'}>About</Link>
            <Link className="mr-4 tracking-widest uppercase text-white" to={'/contact'}>Contact</Link>
          </div>
        </nav>

      </header>
    </>
  )
}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
