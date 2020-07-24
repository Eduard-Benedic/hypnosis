import React, {useRef, useState, useEffect} from 'react'
import {gsap} from 'gsap'

import {Link} from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleDown } from '@fortawesome/free-solid-svg-icons'


const Submenu = ({main: {name, to}, submenu}) => {
      console.log(main, submenu)
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
            <div onMouseEnter={() => toggleSubmenu()} 
                  onMouseLeave={() => toggleBack()} 
                  className="relative h-auto">
            <Link  to={to} className="inline-block py-8 mx-4  text-xl tracking-wider text-white hover:text-second-color">
                        {name}
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
}


export default Submenu;