import React from 'react'
import './login.css'
import Footer from '../../components/Footer/Footer'
import mobileImage from '../../images/mobile.png'
import logoImage from '../../images/logo.png'

class Login extends React.Component{
    render(){
        return(
            <div>
                <div className='container' style={{backgroundColor: "transparent", maxWidth: '935px'}}>
                    <div className='body'>
                        <div className='left_div'>
                            <img src={mobileImage} alt='mobile'/>
                        </div>
                        <div className='right_div container' style={{maxWidth: 350, marginLeft: "-0", height: 230}}>
                            <div className='right_sub_div'>
                                <center>
                                    <div className='logo'>
                                        <img src={logoImage} alt='logo' />
                                    </div>
                                    <div className='fb_login'>
                                        <button>
                                            <i class="fa fa-facebook-f"></i>
                                            Log in with Facebook
                                        </button>
                                    </div>
                                    <div className='create_account'>
                                        <span>
                                            Want to create an Account?
                                            <button>
                                                Create Account
                                            </button>
                                        </span>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Login;