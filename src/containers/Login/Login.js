import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import mobileImage from '../../images/mobile.png'
import logoImage from '../../images/logo.png'
import googlePlay from '../../images/googlestore.png'
import appStore from '../../images/appstore.png'
import {connect} from 'react-redux'
import { set_data, facebook_login } from '../../store/Action'

class Login extends React.Component{
    constructor(){
        super()
        this.state ={
            show: true,
        }
    }
    render(){
        return(
            <div>
                <div className='container' style={{backgroundColor: "transparent", maxWidth: '935px'}}>
                    <div className='body1'>
                        <div className='left_div'>
                            <img src={mobileImage} alt='mobile'/>
                        </div>
                        {this.state.show ?
                        <div className='right_div1 container' style={{maxWidth: 350, marginLeft: "-0", height: 230}}>
                            <div className='right_sub_div1'>
                                <center>
                                    <div className='logo'>
                                        <img src={logoImage} alt='logo' />
                                    </div>
                                    <div className='fb_login'>
                                        <button onClick={()=>this.props.facebook_login(this.props.history)}>
                                            <i class="fa fa-facebook-f"></i>
                                            Log in with Facebook
                                        </button>
                                    </div>
                                    <div className='create_account'>
                                        <span>
                                            Want to create an Account?
                                            <button onClick={()=>this.setState({show: false})}>
                                                Create Account
                                            </button>
                                        </span>
                                    </div>
                                </center>
                            </div>
                        </div>
                        :
                        <div className='right_div2'>
                            <div className='right_sub_div2 container'>
                                <center>
                                    <form>
                                        <div className='logo1'>
                                            <img src={logoImage} alt='logo' />
                                        </div>
                                        <div className='inputs'>
                                            <input type='text' placeholder='Phone number, username, or email' name='username' required/>
                                        </div>
                                        <div className='inputs'>
                                            <input type='password' placeholder='Password' name='password' required/>
                                        </div>
                                        <div className='login_btn'>
                                            <button type='submit' >Log In</button>
                                        </div>
                                        <div className='partitionOR'>
                                            <span>____________</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span style={{color: "gray",}}>OR</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span>____________</span>
                                        </div>
                                        <div className='to_facebook_btn' style={{marginTop: 20}}>
                                            <button onClick={()=>this.setState({show: true})}><i class="fa fa-facebook-square"></i>Log in with Facebook</button>
                                        </div>
                                        <div className='forgot_pass' style={{marginBottom: 20}}>
                                            <Link>Forgot Password?</Link>
                                        </div>
                                    </form>
                                </center>
                            </div>
                            <div className='container-tm'>
                                <center>
                                    <div>
                                        <span>Don't have an account?</span>
                                        <Link>Sign up</Link>
                                    </div>
                                </center>
                            </div>
                            <div>
                                <center>
                                    <div>
                                        <span style={{fontSize: 13}}>Get the app.</span>
                                    </div>
                                    <div className='store_btn' style={{display: "flex", justifyContent: "center"}}>
                                        <button><img src={appStore} width='140px' /></button>
                                        <button><img src={googlePlay} width='140px' /></button>
                                    </div>
                                </center>
                            </div>
                        </div>
                    }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    users: state.users
})
const mapDispatchToProps = (dispatch) => ({
    // set_data: ()=> dispatch(set_data()),
    facebook_login: (history)=> dispatch(facebook_login(history)),
})
export default connect(mapStateToProps,mapDispatchToProps)(Login);