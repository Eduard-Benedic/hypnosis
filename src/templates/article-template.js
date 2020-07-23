import React from 'react'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'


// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import SEO from '../components/seo'




const ArticleTemplate = ({data}) => {
    console.log(data)
    const node = data.allMarkdownRemark.edges[0].node;
    const frontmatter= node.frontmatter;
    const title = frontmatter.title;
    const publishedon = frontmatter.publishedon;
    const author = frontmatter.author;
    const fluid = frontmatter.bannerimage.childImageSharp.fluid;

    const html = node.html;
    const rawMarkdown = node.rawMarkdownBody;
    console.log(html)
    return (
        <>
           <Layout>
               <SEO title={'sometitle'} 
                    meta={[
                        {charset: 'UTF-8'},
                        { name: 'description', content: 'some meta' },
                        {'http-equiv': 'Content-Type', content: 'text/html;'},
                    ]}
               />
               <div className="relative">
                   <div className="absolute z-10 inset-0 gradient">
                       &nbsp;
                   </div>
                    <Img className="max-h-screen" fluid={fluid}/>
               </div>
               
                <div className="bg-custom-white pb-12 relative z-20">
                    <div className="max-w-5xl mx-auto p-8  sm:p-12 bg-white shadow-md transform -translate-y-20">
                        <div className="pb-8 mb-8 border-b border-solid border-custom-white">
                            <h1 className="font-bold mb-2">{title}</h1> 
                            <div className="flex">
                                <p className="mr-4 pr-4 border-r border-solid border-main-color"><span className="italic text-main-color font-bold">{publishedon} </span></p>
                                <p>by <span className="italic text-main-color font-bold">{author}</span> </p>
                            </div>
                            
                        </div>
                        <div className="article">
                            
                            <ReactMarkdown source={rawMarkdown}/>
                            
                        </div>
                    </div>
                </div>
             
               
               {/* <div className="container mx-auto py-24">
                   <div className="text-center">
                        <h1 className="font-body text-2xl uppercase mb-6 tracking-wider">{title}</h1>
                        <h3 className="text-sm mb-2 "><span className="font-normal">Published on:</span> <i>{publishedon}</i></h3>
                   </div>
                  
                    <div className="container w-3/4 mx-auto sm:leading-loose leading-relaxed">
                      
                    </div> */}
               {/* </div> */}
           </Layout>
       </>
    )
}
 
export const query = graphql`
    query ArticlePage ($slug: String!) {
        allMarkdownRemark(filter: {fields: {slug: {eq: $slug}}}) {
            edges {
              node {
                fields {
                    slug
                }
                html
                rawMarkdownBody
                frontmatter {
                    title
                    publishedon
                    author
                    bannerimage {
                        childImageSharp {
                            fluid(maxWidth:2000) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
              }
            }
          }
    }
`

export default ArticleTemplate;