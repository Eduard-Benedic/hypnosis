import React from 'react'




const ProductTemplate = ({pageContext}) => {
    return (
        <>
            <main>
                <h1>{pageContext.title}</h1>
                <h2>{pageContext.price}</h2>
                <p>{pageContext.description}</p>
            </main>
        </>
    )
}



export default ProductTemplate