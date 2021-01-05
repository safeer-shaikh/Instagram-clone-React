import React from 'react'
import './home.css'
import Header from '../../components/Header/Header.js'
import Post from '../../components/Post/Post'
import {get_users} from '../../store/Action'
import {connect} from 'react-redux'
import firebase from '../../config/Firebase'
import { Link } from 'react-router-dom'
import UploadBtn from '../../components/UploadBtn/UploadBtn'

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
                <section className='container' style={{display: 'flex', padding: 0, marginTop: 30, backgroundColor: '#fafafa'}}>
                    <div className='post_div'>
                        <Post />
                    </div>
                    <div className='details_div' style={{backgroundColor: '#FAFAFA'}}>
                        <div style={{padding: "20px 27px",}}>
                            <Link to='#'>
                                <img src={user.profile} alt='profile picture' width='60' height='60' style={{borderRadius: 50}}/>
                            </Link>
                            <Link to='#' style={{marginLeft: 20, fontSize: 15, color: 'black', fontWeight: 600}}>
                                <span >{user.name}</span>
                            </Link>
                            <UploadBtn />
                            <Link to='/' style={{marginLeft: 250 ,textDecoration: "none", color: "#39ACF7",}}> 
                                <span style={{marginLeft: 0, fontSize: 13, fontWeight: 600,}}>Switch</span>
                            </Link>
                        </div>
                        <div>
                            <ul style={{padding: 0, marginLeft: 20}}>
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