import React from 'react'
import './body.css'
import Post from '../Post/Post'

class Body extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Post />
                </div>
            </div>
        )
    }
}
export default Body;    