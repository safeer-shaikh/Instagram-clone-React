import {React, useState, useEffect} from 'react'
import './post.css'

class Post extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <img src={require('../../images/profile.jpg')} />
                </div>
            </div>
        )
    }
}
export default Post;