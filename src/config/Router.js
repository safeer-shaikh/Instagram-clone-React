import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from '../containers/Login/Login'
import Home from '../containers/Home/Home'


export default function AppRouter(){
    return(
        <Router>
            <Route exact path="/" component={Login} />
            <Route exact path='/home' component={Home}/>
        </Router>
    )
}