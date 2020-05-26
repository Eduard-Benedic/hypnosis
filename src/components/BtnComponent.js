import React from 'react'
import {Link} from 'gatsby'


const BtnComponent = ({text, link}) => {
    return (
        <>
        <div>
            <Link to={`/${link}`}> <button className="btn">{text} </button></Link>
          
        </div>
         
        </>
    )
}


export default BtnComponent;