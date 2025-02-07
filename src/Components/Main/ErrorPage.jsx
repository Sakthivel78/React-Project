import React from 'react'
import {Link} from 'react-router-dom'
export default function ErrorPage() {
    return(
        <div className='ErrorPage'>
            <h1>ErrorPage 404 Not Found</h1>

            <img src=""/>
            <button className='btn btn-outline-info'><Link to="/">Go Back</Link> </button>
        </div>
    )
}