const initialState = {
    repos:[]
}

const repos = (state=initialState,action)=>{
    switch(action.type){
        case "GET_REPOS":
            return{
                ...state,
                repos:action.data
            }
        default:
            return{
                ...state
            }
    }
} 
export default repos