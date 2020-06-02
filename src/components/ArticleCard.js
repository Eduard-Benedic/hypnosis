import React from 'react' 
import Img from 'gatsby-image'
import BtnComponent from '../components/BtnComponent'





const ArticleCard = ({articleData}) => {
    const imgFluid = articleData.fluid;
    
    const title = articleData.title

    const publishedOn = articleData.publishedOn;
    const summary = articleData.summary;

    const slug = articleData.slug;
   
    return (
        <>
            <article className="grid grid-cols-1 lg:grid-cols-5 border-r border-gray-400 pr-4">
                <div className="mb-4 lg:col-span-2">
                    <Img fluid={imgFluid} 
                        durationFadeIn={600} 
                        fadeIn={true} />
                </div>
                <div className="lg:col-span-3 pl-2 lg:pl-4" >
                    <h2 className="mb-2 lg:mb-auto">{title}</h2>
                    <div className="mt-2 mb-4">
                      <span className="text-sm"><i>Published on: </i> {publishedOn}</span> <br/>
                    </div>
                   <p className="text-sm">
                     {summary}
                   </p>
                   <div style={{textAlign: 'right'}}>
                        <BtnComponent link={`/articles/${slug}`} text={'Read More'}/>
                   </div>
                   
  
                </div>
            </article>
        </>
    )
}


export default ArticleCard