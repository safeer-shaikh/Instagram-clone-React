import React from 'react'
import './home.css'
import Header from '../../components/Header/Header.js'
import {get_users} from '../../store/Action'
import {connect} from 'react-redux'
import firebase from '../../config/Firebase'
import { yellow } from '@material-ui/core/colors'
class Home extends React.Component{

    componentDidMount(){
        this.props.get_users()
    }

    render(){
        let user = this.props.current_user
        console.log(user)
        return(
            <div className='body'>
                <Header />
                <div style={{backgroundColor: "yellow", width: '500px', height: "500px",}}>
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

export default connect(mapStateToProps,mapDispatchToProps)(Home);