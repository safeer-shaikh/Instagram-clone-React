import React from 'react'
import './Chats.css'
import Header from '../../components/Header/Header'
import {get_users} from '../../store/Action'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class Chats extends React.Component{

    componentDidMount(){
        this.props.get_users()
    }

    render(){
        return(
            <div>
                <Header />
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