const initialstate = {
    user:null,
    loggedIn:false
}

const auth = (state = initialstate,action)=>{
    switch (action.type){
        case "LOGIN": 
        return{
            ...state,
            user:action.data,
            loggedIn:true
        
            }

        case "LOGOUT":
            return {
                ...state,
                user:null,
                loggedIn:false
            }
        default:
            return{
                ...state
            }
        
    }
}

export default auth