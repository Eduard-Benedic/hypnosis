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

  const [nav, showNav] = useState(true);


 
  return (
    <>
      <header className="w-full fixed z-50 top-0 left-0 right-0">
        <div className="md:hidden fixed z-50 top-0 right-0 pt-8 pr-4 text-4xl text-right">
           <FontAwesomeIcon className={!nav ? 'hidden' : 'block'} onClick={() => showNav(!nav)}  icon={faBars} />
           <FontAwesomeIcon className={nav ? 'hidden' : 'block'} onClick={() => showNav(!nav)}  icon={faTimes} />
        </div>
        <div>
          <nav className={`md:hidden fixed inset-0 z-40 transform ${nav ? '-translate-x-full' : 'translate-x-0'} bg-main-color text-white flex flex-col h-screen justify-center items-center transition transition-transform duration-300 ease-linear`}>
            {menuLinks.map((link, index) => {
              return  <Link key={index*2  } data-link="true"  className="mr-4 mb-5 tracking-widest uppercase text-white" to={link.to}>{link.name}</Link>
            })}
          </nav>
        </div>
    
        <nav className="hidden md:block absolute inset-x-0 z-50 bg-main-color" >
            <div  className="container py-4 flex justify-end mx-auto">
                {menuLinks.map((link, index) => {
                  return  <Link key={index}  className="mr-4 text-xl  tracking-wider text-white hover:text-second-color" to={link.to}>{link.name}</Link>
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
