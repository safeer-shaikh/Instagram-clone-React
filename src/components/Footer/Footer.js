import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'

class Footer extends React.Component{
    constructor(){
        super()
        this.state = {
            div1: ['About','Blog','Jobs','Help','API','Privacy','Terms','Top Accounts','Hashtags','Locations',],
            div2: ['Beauty','Dance & performance','Firness','Food & Drink','Home & garden','Music','Visual Arts',]
        }
    }
    render(){
        return(
            <div className='.container-fluid'>
                <div className='footer'>
                    <div>
                        <center>
                            <ul>
                                {
                                    this.state.div1.map((v,i)=>{
                                        return(
                                            <li key={i}>
                                                <Link>
                                                    {v}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </center>
                    </div>
                    <div>
                    <center>
                            <ul>
                                {
                                    this.state.div2.map((v,i)=>{
                                        return(
                                            <li key={i}>
                                                <Link>
                                                    {v}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </center>
                    </div>
                    <div>
                        <center>
                            <p>Instagram Clone By Safeer Shaikh 2020</p>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;