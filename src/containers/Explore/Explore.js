import React from 'react'
import './Explore.css'
import Header from '../../components/Header/Header'
import {get_users} from '../../store/Action'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class Explore extends React.Component{

    componentDidMount(){
        this.props.get_users()
    }

    render(){
        return(
            <div>
                <Header />
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
export default connect(mapStateToProps,mapDispatchToProps)(Explore);