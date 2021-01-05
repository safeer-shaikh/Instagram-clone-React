import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import logoImage from '../../images/logo.png'
import {get_users} from '../../store/Action'
import {connect} from 'react-redux'
import firebase from '../../config/Firebase'

class Header extends React.Component{
    constructor(){
        super()
        this.state = {
        }
    }

    componentDidMount(){
        this.props.get_users()
    }

    render(){
        let user = this.props.current_user
        return(
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-4 logo'>
                            <Link to='/home'>
                                <img src={logoImage} />
                            </Link>
                        </div>
                        <div className='col-md-4 input'>
                            <div style={{display: "flex"}}>
                                <i class="fa fa-search" aria-hidden="true"></i>
                                <input type='text' placeholder='Search' name='search'/>
                            </div>
                        </div>
                        <div className='col-sm-3 icons'>
                            <div>
                                <Link to='/home'><button><i style={{fontSize: 30, }} class="fa fa-home"></i></button></Link>
                            </div>
                            <div>
                                <Link to='/chats'><button><i  style={{fontSize: 26, marginTop: 4,color: "#bdbdbd",}} class="fa fa-comments"></i></button></Link>
                            </div>
                            <div>
                                <Link to='/explore'><button><i style={{fontSize: 27,marginTop: 4,color: "#bdbdbd",}} class="fa fa-compass"></i></button></Link>
                            </div>
                            <div>
                                <button><i style={{fontSize: 24,marginTop: 5,color: "#bdbdbd",}} class="fa fa-heart"></i></button>
                            </div>
                            <div>
                                <button><img className='profile_picture' src={user.profile} alt='profile picture' width='30' height='30' /></button>
                            </div>
                        </div>
                    </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Header);