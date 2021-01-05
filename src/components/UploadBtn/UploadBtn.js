import React from 'react'
import './UploadBtn.css'
import {get_users} from '../../store/Action'
import {connect} from 'react-redux'
import firebase from '../../config/Firebase'
import { Link } from 'react-router-dom'
import 'firebase/storage'

class UploadBtn extends React.Component{

    constructor(){
        super()
        this.state = {
            image: '',
            progress: 0,
        }
    }

    componentDidMount(){
        this.props.get_users()
    }

    render(){
        let user = this.props.current_user

        const handleChange = (e) =>{
            if(e.target.files[0]){
                this.setState({
                    image: e.target.files[0]
                })
            }
            console.log(e.target.files)
            console.log(this.state.image)
        }

        const handleUpload = () =>{
           firebase.storage().ref(`images/${this.state.image.name}`).put(this.state.image)
           console.log('image goes to storage')
                firebase.storage().ref(`images/${this.state.image.name}`).getDownloadURL().then((url)=>{
                    console.log(url)
                    var data = {
                        name: this.state.image.name,
                        imageUrl: url,
                        posterName: user.name,
                        posterUid: user.uid,
                        profilePicture: user.profile
                    }
                    var key = firebase.database().ref('/').child('posts').push().key
                    firebase.database().ref('/').child(`posts/${key}`).set(data)
                    console.log(data)
                    console.log('image upload successful')
                    
                    document.getElementById('show_upload').style.display='none';
                })
        }

        const show_div = () =>{
            document.getElementById('show_upload').style.display= 'flex';
        }

        return(
            <span style={{marginLeft: 80}}>
                <span>
                    <button onClick={show_div} className='upload_btn'><i class="fa fa-plus"></i></button>
                </span>
                <div className='upload_div' id='show_upload' style={{display: 'none',}}>
                    <input type='file' onChange={handleChange} />
                    <button onClick={handleUpload} style={{marginRight: 150}}>Upload</button>
                </div>
            </span>
        )
    }
}
const mapStateToProps = (state) => ({
    current_user: state.current_user,
    users: state.users
})  

const mapDispatchToProps = (dispatch) => ({
    get_users: ()=> dispatch(get_users()),

})
export default connect(mapStateToProps,mapDispatchToProps)(UploadBtn);