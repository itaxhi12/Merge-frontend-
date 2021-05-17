const initialstate = {
    user:[],
    loggedIn:false,
    github:[]
}

const auth = (state = initialstate,action)=>{
    switch (action.type){
        case "GITHUB":
            return{
                ...state,
                github:action.data
            }
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