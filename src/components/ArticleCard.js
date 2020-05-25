import React from 'react' 
import Img from 'gatsby-image'
import BtnComponent from '../components/BtnComponent'





const ArticleCard = ({articleData}) => {

   
    return (
        <>
        {console.log( articleData)}
            <article className="grid grid-cols-5 border-r border-gray-400 pr-4">
                <div className="col-span-2">
                  
                    <Img fluid={articleData.articleImage.fluid} 
                    durationFadeIn={600} 
                    fadeIn={true}/>
                </div>
                <div className="col-span-3 pl-4" >
                    <h2 className="text-xl ">{articleData.articleTitle}</h2>
                    <div className="mt-2 mb-4">
                      <span className="text-sm"><i>Published on: </i> {articleData.publishedAt}</span> <br/>
                    </div>
                   <p className="text-sm">
                     {articleData.articleSummary}
                   </p>
                   <div style={{textAlign: 'right'}}>
                        <BtnComponent link={`/articles/${articleData.slug}`} text={'Read More'}/>
                   </div>
                   
  
                </div>
            </article>
        </>
    )
}


export default ArticleCard