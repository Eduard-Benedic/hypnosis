import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faClock, faSpa, faCouch } from '@fortawesome/free-solid-svg-icons'



const CardComponent = ({data: {title, subtitle, description}, iconNumber}) => {

    const icons = [faClock, faCoffee, faSpa, faCouch];
    return (
        <>
            <div className="text-center mx-4 h-60  sm:h-auto sm:px-5 border-b-2 border-gray-400 lg:border-none">
                <h3 className="font-bold mb-2 md:mb-6 text-second-color">{title}</h3>
                <FontAwesomeIcon className="text-banner-background text-2xl" icon={icons[iconNumber]} />  
              
                <h4 className="mb-2 font-bold italic">{subtitle}</h4>
                <p>{description}</p>
            </div>
        </>
    )
}


export default CardComponent