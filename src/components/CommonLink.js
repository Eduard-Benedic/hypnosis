import React from 'react'
import {Link} from "gatsby"

const CommonLink = ({redirectTo}) => {
    return(
        <>
            <Link className="mr-4 tracking-widest uppercase text-white" to={`/${redirectTo.toLowerCase()}`}>{redirectTo}</Link>
        </>
    )
}

export default CommonLink;