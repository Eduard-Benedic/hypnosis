import PropTypes from "prop-types"
import React, {useState} from "react"

import {useStaticQuery, graphql} from 'gatsby'
import {Link} from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


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
      <header className="font-body w-full fixed z-50 top-0 left-0 right-0">
        <div className="block md:hidden fixed z-50 top-0 right-0 pt-8 pr-4 text-4xl text-right" style={{color: '#F97F8C'}}>
          
           <FontAwesomeIcon className={!nav ? 'hidden' : 'block'}  onClick={() => showNav(!nav)}  icon={faBars} />
           <FontAwesomeIcon className={nav ? 'hidden' : 'block'} onClick={() => showNav(!nav)}  icon={faTimes} />
        </div>
        <div onClick={() => {
          showNav(!nav)
        }}>
          <nav style={{backgroundColor: '#6b366be0'}} className={`md:hidden fixed inset-0 z-40 transform ${nav ? '-translate-x-full' : 'translate-x-0'} text-white flex flex-col h-screen justify-center items-center transition transition-transform duration-300 ease-linear`}>
            
            {menuLinks.map((link, index) => {
              return  <Link key={index} data-link="true"  className="mr-4 mb-5 tracking-widest uppercase text-white" to={link.to}>{link.name}</Link>
            })}
          </nav>
        </div>
    
        <nav className="hidden md:block absolute inset-x-0 z-50 bg-banner-background">
            <div  className="container py-4 flex justify-end mx-auto">
                {menuLinks.map((link, index) => {
                  return  <Link key={index}  className="mr-4  tracking-widest uppercase text-white" to={link.to}>{link.name}</Link>
                })}
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
