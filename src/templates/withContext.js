import React from 'react'



const withContext = ({pageContext}) => {
    return( 
        <>
            <section>
                <h1>{pageContext.name}</h1>
                <h2>{pageContext.surname}</h2>
            </section>
        </>
    )
}


export default withContext