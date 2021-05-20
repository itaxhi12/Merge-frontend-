const intialstate = {
    reponame:'',
    chatid:null,
    messages:[]
}

const chat = (state=intialstate,action)=>{
    switch(action.type){
        case "REPONAME":
            return{
                ...state,
                reponame:action.data
            }
        case"CHATID":
        return{
            ...state,
            chatid:action.data
        }
        case "GET_CHATS":
        return{
                ...state,
                messages:action.data
            }
        case "NEW_TEXT":    
        return{
                ...state,
                messages:[...state.messages,action.data]
            }
        default:
            return{
                ...state
            }
    }
}



export default chat