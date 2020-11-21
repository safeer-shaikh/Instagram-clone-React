import React from 'react'
import './home.css'
import Header from '../../components/Header/Header.js'

class Home extends React.Component{
    render(){
        return(
            <div className='body'>
                <Header />
            </div>
        )
    }
}
export default Home;