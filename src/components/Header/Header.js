import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import logoImage from '../../images/logo.png'

class Header extends React.Component{
    render(){
        return(
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-4 logo'>
                            <img src={logoImage} />
                        </div>
                        <div className='col-md-4 input'>
                            <div style={{display: "flex"}}>
                                <i class="fa fa-search" aria-hidden="true"></i>
                                <input type='text' placeholder='Search' name='search'/>
                            </div>
                        </div>
                        <div className='col-sm-3 icons'>
                            <div>
                                <button><i style={{fontSize: 30, }} class="fa fa-home"></i></button>
                            </div>
                            <div>
                                <button><i style={{fontSize: 22, marginTop: 5,color: "#bdbdbd",}} class="fa fa-paper-plane"></i></button>
                            </div>
                            <div>
                                <button><i style={{fontSize: 27,marginTop: 4,color: "#bdbdbd",}} class="fa fa-compass"></i></button>
                            </div>
                            <div>
                                <button><i style={{fontSize: 24,marginTop: 5,color: "#bdbdbd",}} class="fa fa-heart"></i></button>
                            </div>
                            <div>
                                <button><img /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;