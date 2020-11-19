import React from 'react'
import './header.css'
import logoImage from '../../images/logo.png'

export default function Header(){
    return(
        <div className='container-fluid'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-4 logo'>
                        <img src={logoImage} />
                    </div>
                    <div className='col-md-4 input'>
                        <input type='text' placeholder='Search' name='search'/>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
        </div>
    )
}