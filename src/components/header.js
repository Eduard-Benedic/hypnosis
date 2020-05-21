
import PropTypes from "prop-types"
import React from "react"
import {useStaticQuery,graphql} from "gatsby"
import Img from "gatsby-image"
import CommonLink from "./CommonLink"

const Header = ({ siteTitle, siteNavigation }) => {

  const data = useStaticQuery(graphql`
          query {
              file(relativePath:{eq: "banner.jpg"}) {
                childImageSharp {
                  fluid (maxWidth: 2200) {
                    ...GatsbyImageSharpFluid_noBase64
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                }
              }
            
          }
`);

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
        <div className="relative max-h-screen">
          {<Img durationFadeIn={600} 
                fadeIn={true}
                imgStyle={{maxHeight: '100vh'}}
                placeholderStyle={{maxHeight: '100vh'}}
                fluid={data.file.childImageSharp.fluid} />
          }
          <div className="absolute bg-banner-background z-10 w-full inset-0">
            <div className="container container-xl mx-auto absolute px-4 top-half text-white transform -translate-y-1/2">
              <h1 className="tracking-widest">Neurohypnosis institute</h1>
              <p className="tracking-wider text-xl">A new understanding of hypnosis</p>
            </div>
          </div>
        </div>
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
