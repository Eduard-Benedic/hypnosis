import PropTypes from "prop-types"
import React, {useState, useRef, useEffect} from "react"

import {useStaticQuery, graphql} from 'gatsby'
import {Link} from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faAngleDown } from '@fortawesome/free-solid-svg-icons'
// import Submenu from './Submenu'

import {gsap} from 'gsap'


const Header = () => {

  const data = useStaticQuery(graphql`
      {
        site {
          siteMetadata {
            menuLinks {
              to,
              name
              extensible
              submenu {
                name
                to
              }
            }
          }
        }
      }
  `)

  const menuLinks = data.site.siteMetadata.menuLinks;

  const [nav, showNav] = useState(true);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const submenuRef= useRef(null);
  const [tl] = useState(gsap.timeline());

  const [toggle, setToggle] = useState(false);

  const toggleSubmenu= () => {
    setToggle(!toggle)
    
  };
  const toggleBack = () => {
        setToggle(!toggle)
  }

  useEffect(() => {
      tl.reversed(!toggle);
  }, [toggle])

  useEffect(() => {
    console.log(submenuRef.current.children)
        tl.to(submenuRef.current, {
          opacity: 1,
          transform: 'translateY(0)',
        })
        .to(submenuRef.current.children, {
          opacity: 1,
          stagger: 0.1,
          duration: 0.3,
        })
        .reverse()
  }, [])

  
 



 
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
              return ( <div>
                            <Link key={Math.random()* 100000 } data-link="true"  className="mr-4 mb-5 tracking-widest uppercase text-white" to={link.to}>{link.name}</Link>
                      </div> 
              )
            })}
          </nav>
        </div>
    
        <nav className="hidden md:block absolute inset-x-0 z-50 bg-main-color" >
            <div  className="container flex justify-end mx-auto">
                {menuLinks.map((link, index) => {
                  const  extensible = link.extensible;
                  const submenu = link.submenu;
                  return ( !extensible ?  <Link key={index}  className="inline-block py-8 mx-4 text-xl  tracking-wider text-white hover:text-second-color" to={link.to}>{link.name}</Link>
                  
                    : (
                      // <Submenu main={{name: link.name, to: link.to}}
                      //         submenu={submenu}
                      //         />
                      <div onMouseEnter={() => toggleSubmenu()} 
                           onMouseLeave={() => toggleBack()} 
                           className="relative h-auto">
                          <Link  key={index}  
                                 className="inline-block py-8 mx-4  text-xl tracking-wider text-white hover:text-second-color" to={link.to}>
                                   {link.name}
                           </Link>
                          <FontAwesomeIcon className="absolute bottom-0 left-half transform -translate-x-1/2 text-second-color" icon={faAngleDown}/>   
                          <div ref={submenuRef} className="absolute top-auto right-0 py-8 bg-main-color border-t-4 border-solid border-second-color opacity-0 transform -translate-y-6">
                         
                              {submenu.map((submenuitem, index) => {
                                  return ( <div className="opacity-0 mx-8 pb-2 mb-4 border-b border-solid border-white-transparent">
                                                <Link to={submenuitem.to} className="text-custom-white text-lg tracking-widest italic hover:text-second-color" >{submenuitem.name}</Link>
                                          </div>
                                  )
                              })}
                          </div>
                      </div> 
                    )
                  )
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
