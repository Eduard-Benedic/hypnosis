import PropTypes from "prop-types"
import React from "react"
import {Link} from 'gatsby'



const Header = () => {
  return (
    <>
      <header className="font-body w-full relative">
      <nav className="absolute inset-x-0 z-50 bg-banner-background">
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
