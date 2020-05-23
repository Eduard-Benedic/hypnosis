import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



const CardComponent = ({cardInfo: {title, subtitle, description}}) => {
    return (
        <>
            <div className="card text-center">
           
                <h3 className="text-base"><FontAwesomeIcon icon={faCoffee} /> {title}</h3>
                <h4>{subtitle}</h4>
                <p>{description}</p>
            </div>
        </>
    )
}


export default CardComponent