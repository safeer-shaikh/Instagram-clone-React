import React from 'react'
import './post.css'
import { Link } from 'react-router-dom'
import post1 from '../../images/poster.png'
import {get_posts, get_users} from '../../store/Action'
import {connect} from 'react-redux'
import firebase from '../../config/Firebase'

class Post extends React.Component{
    constructor(){
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        this.props.get_users();
        this.props.get_posts();
        this.setState({posts: this.props.posts})
    }

    render(){
        console.log(this.props.posts)
        
        let user = this.props.current_user
        return(
                <div>
                    {
                    this.state.posts.map((v,i)=>{
                        return(
                            <div style={{marginTop: 40}} className='full_post' key={i}>
                        <section className='above_picture'>
                            <div className='image_div'>
                                <Link to="#">
                                     <img src={v.profilePicture} alt="profile" width='40' height='40' />
                                </Link>
                            </div>
                            <div className='name_div'>
                                <Link to='#'>{v.posterName}</Link>
                            </div>
                            <div className='three_dots'>
                                <Link to="#">
                                    <button>
                                        <i class="fa fa-ellipsis-h"></i>
                                    </button>
                                </Link>
                            </div>
                        </section>
                        <div>
                            <img src={v.imageUrl} alt='post' width='100%' height='100%' style={{objectFit: "contain",}}/>
                        </div>
                        <section className='like_com_share_btn'>
                            <div>
                                <span>
                                    <button>
                                        <i class="fa fa-heart"></i>
                                    </button>
                                </span>
                                <span>
                                    <button>
                                        <i class="fa fa-comment"></i>
                                    </button>
                                </span>
                                <span>
                                    <button>
                                        <i class="fa fa-paper-plane"></i>
                                    </button>
                                </span>
                            </div>
                        </section>
                    </div>
                        )
                    })
                    }
                </div>
        )
    }
}
const mapStateToProps = (state) => ({
    current_user: state.current_user,
    users: state.users,
    posts: state.posts
})

const mapDispatchToProps = (dispatch) => ({
    get_users: ()=> dispatch(get_users()),
    get_posts: ()=> dispatch(get_posts()),
})

export default connect(mapStateToProps,mapDispatchToProps)(Post);