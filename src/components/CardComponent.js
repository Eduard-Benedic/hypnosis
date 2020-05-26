import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faClock, faSpa, faCouch } from '@fortawesome/free-solid-svg-icons'



const CardComponent = ({cardInfo: {title, subtitle, description}, iconNumber}) => {

    const icons = [faClock, faCoffee, faSpa, faCouch];
    return (
        <>
            <div className="text-center mx-4 h-60  sm:h-auto sm:px-5 border-b-2 border-gray-400 lg:border-none">
                <h3 className="font-body mb-2 md:mb-6 ">{title}</h3>
                <h3 className="text-base mb-4">
                    <FontAwesomeIcon className="text-banner-background text-2xl" icon={icons[iconNumber]} />  
                </h3>
              
                <h4 className="mb-2 italic">{subtitle}</h4>
                <p>{description}</p>
            </div>
        </>
    )
}


export default CardComponent