import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {useStaticQuery,graphql} from "gatsby"
import Img from "gatsby-image"

const Header = ({ siteTitle }) => {

  const data = useStaticQuery(graphql`
          query {
            allImageSharp {
              edges {
                node {
                  id
                  fluid(maxWidth: 1000, maxHeight: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
`);

  return (
    <>
      <header>
        <div className="container-xl p-5  mx-auto">
      
          <h1 style={{ margin: 0 }}>
            <Link to="/">
            </Link>
          </h1>

          <div>
          {data.allImageSharp.edges.map(edge => {

              console.log(edge)
           return <Img key={edge.node.id} fluid={edge.node.fluid} />
          }
            )}
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
