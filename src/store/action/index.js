import firebase from 'firebase/app'

// const set_data = ()=>{
//     return (dispatch)=>{
//         dispatch({
//             type: "SETDATA",
//             payload: { name: 'waleed' }
//         })
//     }
// }

const facebook_login = (history)=>{
    return (dispatch)=>{
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user)
            // ...
            let create_user = {
                name: user.displayName,
                email: user.email,
                profile: user.photoURL,
                uid: user.uid
            }
            console.log(create_user)
            console.log(user.photoURL)
            firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
            .then(()=>{
                dispatch({
                    type: "SETUSER",
                    payload: create_user
                })
                // alert('User Login Successful!')
                history.push('/Home')
            })
            // console.log('user==>',create_user)
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log('error==>',errorMessage)
          });
    }
}
const get_users = () =>{
    return (dispatch) => {
        let users = [];
        firebase.database().ref('/').child('users').on('child_added',(data)=>{
            users.push(data.val())
        })
        dispatch({
            type: "SETFIREBASEUSERS",
            payload: users
        })
    }
}
const get_posts = () =>{
    return (dispatch) => {
        let posts = [];
        firebase.database().ref('/').child('posts').on('child_added',(data)=>{
            posts.push(data.val())
        })
        dispatch({
            type: "SETFIREBASEPOSTS",
            payload: posts
        })
    }
}
export {
    facebook_login,
    get_users,
    get_posts,
}