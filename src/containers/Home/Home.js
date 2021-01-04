import React from 'react'
import './home.css'
import Header from '../../components/Header/Header.js'
import Post from '../../components/Post/Post'
import {get_users} from '../../store/Action'
import {connect} from 'react-redux'
import firebase from '../../config/Firebase'
import { Link } from 'react-router-dom'

class Home extends React.Component{

    constructor(){
        super()
        this.state = {
            homeFooterLinks: ['About', "Help", 'press', 'API', 'Jobs', 'Privacy', 'Terms', "Locations", 'Top Accounts', 'Hashtags', 'Language'],
        }
    }

    componentDidMount(){
        this.props.get_users()
    }

    render(){
        let user = this.props.current_user
        console.log(user)
        return(
            <div className='body'>
                <Header />
                <section className='container' style={{display: 'flex', padding: 0, marginTop: 30}}>
                    <div className='post_div'>
                        <Post />
                    </div>
                    <div className='details_div'>
                        <div>
                            <img src={user.profile} alt='profile picture' width='30' height='30'/>
                            <span>{user.name}</span>
                            <span><Link to='/'>Switch</Link></span>
                        </div>
                        <div>
                            <ul style={{padding: 0}}>
                                {
                                    this.state.homeFooterLinks.map((v,i)=>{
                                        return(
                                            <li className='footer_links' key={i}><Link to='#'>{v}</Link><span>&nbsp;&nbsp;-</span></li>
                                        )
                                    })
                                }
                            </ul>
                            <div>
                                <p className='copyright'>
                                    &copy; 2021 INSTAGRAM FROM FACEBOOK
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
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

export default connect(mapStateToProps,mapDispatchToProps)(Home);