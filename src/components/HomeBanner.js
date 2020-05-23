import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'




const HomeBanner = () => {

    const data = useStaticQuery(graphql`
                query Banner {
                    allContentfulHome {
                    edges {
                        node {
                                bannerImage {
                                    fluid (maxWidth: 2200) {
                                        ...GatsbyContentfulFluid_noBase64
                                    }
                                },
                                bannerTextArea {
                                    title,
                                    subtitle,
                                    description
                                }

                            }
                        }
                    }
                }
            `);
    const title =  data.allContentfulHome.edges[0].node.bannerTextArea.title;
    const subtitle =  data.allContentfulHome.edges[0].node.bannerTextArea.subtitle;
    const description = data.allContentfulHome.edges[0].node.bannerTextArea.description;
    return (
        <>
            <div className="relative max-h-screen">
                {<Img durationFadeIn={600} 
                        fadeIn={true}
                        imgStyle={{maxHeight: '100vh'}}
                        placeholderStyle={{maxHeight: '100vh'}}
                        fluid={data.allContentfulHome.edges[0].node.bannerImage.fluid} />
                }
                <div className="absolute bg-banner-background z-10 w-full inset-0">
                    <div className="container container-xl mx-auto absolute px-4 top-half text-white transform -translate-y-1/2">
                    <h1 className="tracking-widest">{title}</h1>
                    <h2>{subtitle}</h2>
                    <p className="tracking-wider text-xl">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default HomeBanner;