import React from 'react'
import {Link} from 'gatsby'


const BtnComponent = ({text, link}) => {
    return (
        <>
        <div>
            <Link to={`/${link}`}>  <button className="font-body bg-banner-background text-white px-8 py-2 rounded">{text} </button></Link>
          
        </div>
         
        </>
    )
}


export default BtnComponent;