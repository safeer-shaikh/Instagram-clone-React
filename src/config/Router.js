import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from '../containers/Login/Login'
import Home from '../containers/Home/Home'
import Chats from '../containers/Chats/Chats'
import Explore from '../containers/Explore/Explore'


class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Login} />
                <Route exact path='/home' component={Home}/>
                <Route exact path='/chats' component={Chats}/>
                <Route exact path='/explore' component={Explore} />
            </Router>
        )
    }
}
export default AppRouter;