import PropTypes from "prop-types"
import React from "react"
import CommonLink from "./CommonLink"
const Header = ({ siteTitle, siteNavigation }) => {


  return (
    <>
      <header className="font-body w-full relative">
      <nav className="absolute inset-x-0 z-50">
        <div className="container py-4 flex justify-end mx-auto">
          { siteNavigation.map((navLink, index) => {
                        return  <CommonLink key={index} redirectTo={navLink} />
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
