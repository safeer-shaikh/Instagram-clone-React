import React from 'react'
import './home.css'
import Header from '../../components/Header/Header.js'
import {get_users} from '../../store/Action'
import {connect} from 'react-redux'
import firebase from '../../config/Firebase'
class Home extends React.Component{

    componentDidMount(){
        this.props.get_users()
    }

    render(){
        return(
            <div className='body'>
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

export default connect(mapStateToProps,mapDispatchToProps)(Home);