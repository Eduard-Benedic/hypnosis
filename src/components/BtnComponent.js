import React from 'react'



const BtnComponent = ({text}) => {
    return (
        <>
        <div>
            <button className="font-body bg-banner-background text-white px-8 py-2 rounded">{text} </button>
        </div>
         
        </>
    )
}


export default BtnComponent;