import React from 'react' 
import Img from 'gatsby-image'
import {Link} from 'gatsby'




const ArticleCard = ({data: {title, summary, fluid, publishedon, slug}}) => {

   
    return (
        <>
            <article>
                <div>
                    <Img fluid={fluid}  />
                </div>
                <div>
                        <h2 className="mb-2 lg:mb-auto">{title}</h2>
                        <div className="mt-2 mb-4">
                            <span className="text-main-color italic font-bold text-sm border-b border-solid border-custom-white"><i>Published on: </i> {publishedon}</span> <br/>
                        </div>
                    <p>{summary}</p>
                   <Link className="inline-block btn bg-main-color mt-8 mb-4" to={slug}> Read more</Link>
                    
                </div>
            </article>
        </>
    )
}


export default ArticleCard