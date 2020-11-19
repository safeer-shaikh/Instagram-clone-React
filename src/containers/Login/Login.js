import { Link } from 'react-router-dom'
import React from 'react'
import './login.css'

export default function Login(){
    return(
        <div className='body'>
            <h1>Login page</h1>
            <Link to='/home'>go to home</Link>
        </div>
    )
}
