import React from 'react'
import './post.css'
import { Link } from 'react-router-dom'
import post1 from '../../images/poster.png'
import {get_users} from '../../store/Action'
import {connect} from 'react-redux'
import firebase from '../../config/Firebase'

class Post extends React.Component{

    componentDidMount(){
        this.props.get_users()
    }

    render(){
        let user = this.props.current_user
        return(
                <div>
                    <div className='full_post'>
                        <section className='above_picture'>
                            <div>
                                <Link to="#">
                                     <img src={user.profile} alt="profile" width='40' height='40' />
                                </Link>
                            </div>
                            <div>
                                <Link to='#'>{user.name}</Link>
                            </div>
                            <div>
                                <Link to="#">
                                    <button>
                                        <i class="fa fa-ellipsis-h"></i>
                                    </button>
                                </Link>
                            </div>
                        </section>
                        <div>
                            <img src={post1} alt='post' width='100%' height='100%' style={{objectFit: "contain",}}/>
                        </div>
                        <section>
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
                </div>
        )
    }
}
const mapStateToProps = (state) => ({
    current_user: state.current_user,
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    get_users: ()=> dispatch(get_users())
})

export default connect(mapStateToProps,mapDispatchToProps)(Post);