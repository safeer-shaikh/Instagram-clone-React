const INITIAL_STATE = {
    users: [],
    current_user: {},
    posts: [],
}
export default (state = INITIAL_STATE,action) => {
    // console.log('action==>',action)
    switch (action.type){
        case "SETUSER":
            return({
                ...state,
                current_user: action.payload
            })
        case "SETFIREBASEUSERS":
            return ({
                ...state,
                users: action.payload
            })
        case 'SETFIREBASEPOSTS':
            return({
                ...state,
                posts: action.payload
            })
    }
    return state;
}