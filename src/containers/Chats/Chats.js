import React from 'react'
import './Chats.css'
import Header from '../../components/Header/Header'
import {get_users} from '../../store/Action'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import beforeChat from '../../images/beforeChat.PNG'
import firebase from 'firebase'
import Input from '@material-ui/core/Input';

class Chats extends React.Component{
    constructor(){
        super()
        this.state = {
            users: [],
            chat_with: {},
            chats: [],
            message: '',
        }
    }

    chat=(person)=>{
        this.setState({
            chat_with: person
        })
        let current_user = this.props.current_user
        let merge_uid = this.merge_uid(current_user.uid,person.uid)
        console.log(merge_uid)
        this.get_message(merge_uid)
    }

    send_message = () => {
        this.setState({
            message: '',
        })
        let user = this.props.current_user
        let chat_with = this.state.chat_with
        let merge_uid = this.merge_uid(user.uid,chat_with.uid)

        firebase.database().ref('/').child(`chats/${merge_uid}`).push({
            message: this.state.message,
            name: user.name,
            uid: user.uid
        })
    }

    get_message = (uid) => {
        firebase.database().ref('/').child(`chats/${uid}`).on("child_added",(messages)=>{
            console.log("message===>",messages.val())
            this.state.chats.push(messages.val())
            this.setState({
                chats: this.state.chats
            })
        })
    }

    merge_uid(uid1,uid2){
        if(uid1 < uid2){
            return uid1 + uid2
        }else{
            return uid2 + uid1
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
                            <div className='displayName_div'>
                                <p>
                                    <Link to='#' style={{color: 'black'}}>{user.name}</Link>
                                    <button style={{border: '0px solid', backgroundColor: '#ffffff'}}><i className='fa fa-chevron-down'></i></button>
                                </p>
                            </div>
                            <div>
                                <ul style={{listStyleType: 'none', padding: '10px 0px'}}>
                                    {
                                        this.state.users.map((v,i)=>{
                                            return(
                                                v.uid !== user.uid &&
                                                <button onClick={()=>this.chat(v)} className='chatPerson_Btn' key={i} style={{border: '0px solid', backgroundColor: '#ffffff', width: '100%',}}>
                                                    <li>
                                                        <img src={v.profile} style={{borderRadius: "50px", width: 60, height: 60}} />
                                                        <span style={{marginLeft: 10, fontSize: 15, fontWeight: 600}}>{v.name}</span>
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
                                {
                                Object.keys(this.state.chat_with).length ?
                                <div className='user-content' >
                                    <div className='user-content-div'>
                                        <div>
                                            <img src={this.state.chat_with.profile}  alt='profile' width='20' height='20'/>
                                            <span>
                                                {this.state.chat_with.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='chat-content'>
                                        <ul style={{listStyleType: 'none', padding: '0px 40px'}}>
                                        {
                                            this.state.chats.map((v,i)=>{
                                                return(
                                                    <li key={i} style={{
                                                        color: v.uid === user.uid ? '#303030' : "#303030",
                                                        textAlign: v.uid === user.uid ? 'right' : 'left',
                                                        marginTop: 20,

                                                        }}>
                                                            <span style={{
                                                                backgroundColor: v.uid === user.uid ? '#EFEFEF' : 'white',
                                                                border: '1px solid #EFEFEF',
                                                                padding: '10px 15px',
                                                                borderRadius: '25px',

                                                                }}>
                                                                {v.message}
                                                            </span>
                                                    </li>
                                                )
                                            })
                                        }
                                        </ul>
                                        <div className='input-things'>
                                            <input className='input' value={this.state.message} onChange={(e)=>this.setState({message: e.target.value})} type='text' />
                                            <button onClick={()=>this.send_message()}>Send</button>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div>
                                    <div className='not-selected-div1'>
                                        <img src={beforeChat} alt='chatPicture' />
                                        <h5 style={{marginTop: 20}}>Your Messages</h5>
                                        <p style={{fontSize: 13, color: '#9D9CBD'}}>Send private photos and messages to a friend or group.</p>
                                        <button>Send Message</button>
                                    </div>
                                </div>
                                }
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