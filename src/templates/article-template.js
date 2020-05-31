import React from 'react'

import Layout from '../components/layout'
import Img from 'gatsby-image'

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import SEO from '../components/seo'




const ArticleTemplate = ({pageContext}) => {


    const articleTitle = pageContext.title;
    const publishedAt = pageContext.publishedAt;
    const author = pageContext.articleAuthor;


    // SEO Tags
    
    const headTitle = pageContext.seoTagsTitle;
    const metaDescription = pageContext.seoTagsMetaDescription;
    
    return (
        <>
           <Layout>
               <SEO title={headTitle} 
                    meta={[
                        {charset: 'UTF-8'},
                        { name: 'description', content: metaDescription },
                        {'http-equiv': 'Content-Type', content: 'text/html;'},
                    ]}
               />
               <div className="container mx-auto py-24">
                   <div className="text-center">
                        <h1 className="font-body text-2xl uppercase mb-6 tracking-wider">{articleTitle}</h1>
                        <h3 className="text-sm mb-2 "><span className="font-normal">Published on:</span> <i>{publishedAt}</i></h3>
                        <h3 className="text-sm"><span className="font-normal">Author:</span> <i>{author}</i></h3>
                   </div>
                   
                    <Img sizes={pageContext.imageFixed} className='py-20 my-10 mx-auto' style={{maxWidth: '800px', height: '400px', padding: '1rem'}}/>
                    <div className="container w-3/4 mx-auto sm:leading-loose leading-relaxed">
                        {documentToReactComponents(pageContext.articleBody)}
                    </div>
               </div>
           </Layout>
       </>
    )
}


export default ArticleTemplate;