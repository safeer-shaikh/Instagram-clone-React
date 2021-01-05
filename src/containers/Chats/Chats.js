import React from 'react'
import './Chats.css'
import Header from '../../components/Header/Header'
import {get_users} from '../../store/Action'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class Chats extends React.Component{
    constructor(){
        super()
        this.state = {
            users: [],
        }
    }

    componentDidMount(){
        this.props.get_users();
        this.setState({users: this.props.users})
    }

    render(){
        let user = this.props.current_user
        console.log(this.props.users)
        console.log(this.state.users)
        return(
            <div>
                <Header />
                <div style={{border: '1px solid #dbdbdb', marginTop: 20, padding: 0}} className='container'>
                    <div className='main'>
                        <section className='left_section'>
                            <div>
                                <p>
                                    <Link to='#'>{user.name}</Link>
                                </p>
                            </div>
                            <div>
                                <ul>
                                    {
                                        this.state.users.map((v,i)=>{
                                            return(
                                                v.uid !== user.uid &&
                                                <button key={i}>
                                                    <li>
                                                        <img src={v.profile} />
                                                        <span>{v.name}</span>
                                                    </li>
                                                </button>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </section>
                        <section className='right_section'>
                            <div>

                            </div>
                        </section>
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
export default connect(mapStateToProps,mapDispatchToProps)(Chats);