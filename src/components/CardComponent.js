import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



const CardComponent = () => {
    return (
        <>
            <div className="card text-center">
                <FontAwesomeIcon icon={faCoffee} />
                <h3 className="text-base">Lorem, ipsum dolor.</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, dolorem!
                </p>
            </div>
        </>
    )
}


export default CardComponent