import React from 'react'
import './home.css'
import Header from '../../components/Header/Header.js'
import Body from '../../components/Body/Body.js'
import Footer from '../../components/Footer/Footer.js'

export default function Home(){
    return(
        <div className='body'>
            <Header />
            <div className='.container'>
                <div className='row'>
                    <div className='col-md-8'>{/* {body div} */}
                        <Body />
                    </div>
                    <div className='col-md-3'>{/* {footer div} */}
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}
