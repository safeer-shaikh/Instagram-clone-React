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

        // const handleUpload = () =>{
        //     var key = firebase.database().ref('/').child('posts').push().key
        //     var data = {
        //         imageName: this.state.image.name,

        //         // imageUrl: firebase.database().ref('/').child(this.state.image).getDownloadURL(),
        //         imageUid: key,
        //         uploaderName: user.name,
        //     }
        //     firebase.database().ref('/').child(`posts/${key}`).set(data)
        //     console.log('image upload successful')
        //     console.log(data)
        // }

        const handleUpload = () =>{
           firebase.storage().ref(`images/${this.state.image.name}`).put(this.state.image)
           console.log('image goes to storage')

            // uploadTask.on('state_changed', (snapshot)=>{
            //     const progress = Math.round((snapshot.bytesTransfered / snapshot.totalBytes) * 100)
            //     this.setState({
            //         progress: progress,
            //     })
            // }, 
            // ()=>{
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
                
                // }
            // )
            
        }

        return(
            <span>
                <span>
                    <button onClick={()=>{document.getElementById('show_upload').style.display='block'}}><i class="fa fa-plus"></i></button>
                </span>
                <div id='show_upload' style={{display: 'none',}}>
                    <input type='file' onChange={handleChange} />
                    <button onClick={handleUpload}>Upload</button>
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