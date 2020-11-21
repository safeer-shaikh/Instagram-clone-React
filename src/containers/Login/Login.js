import { Link } from 'react-router-dom'
import React from 'react'
import './login.css'

class Login extends React.Component{
    render(){
        return(
            <div className='body'>
                <h1>Login page</h1>
                <Link to='/home'>go to home</Link>
            </div>
        )
    }
}
export default Login;