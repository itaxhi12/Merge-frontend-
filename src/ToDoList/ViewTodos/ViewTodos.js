import React, { useEffect} from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
const ViewTodos = ({repo}) => {
            const dispatch = useDispatch()
            useEffect(()=>{
            axios.get('http://127.0.0.1:8000/api/todos/').then(res=>{
                let todos = res.data.filter((todo)=>{
                if(todo.repo.toLowerCase() === repo.toLowerCase()){
                         return(todo)
                }else{
                    return null
                }
                   
                })
                dispatch({type:"GET_TODOS",item:todos})

            })},[dispatch,repo])



           const selectTodos = state => state.todo.todos
            const todos= useSelector(selectTodos)
            console.table(todos)
            function render (obj){
 
            const del = ()=>{
            axios.delete('http://127.0.0.1:8000/api/todos/'+obj.id+"/",{title:obj.title,deadline:obj.deadline,repo:repo,assigned_merge_user:"itaxhi12",completed:true}).then((res)=>{
                    dispatch({type:"REMOVE_TASK",id:obj.id})
                })
            }
            const changeStatus = ()=>{
                axios.put('http://127.0.0.1:8000/api/todos/'+obj.id+"/",{title:obj.title,deadline:obj.deadline,repo:repo,assigned_merge_user:"itaxhi12",completed:true}).then((res)=>{
                    dispatch({type:"CHANGE_STATUS",id:obj.id})
                })
            }
                return(
        <div key={obj.id} style={{height:"3em" ,display:"flex",width:"40em",fontSize:"large",background:"transparent",alignItems:'center',justifyContent:'space-around',margin:"1em",border:"1px solid rgba(169, 169, 169, 0.5)",borderRadius:"10px"}}>
            <button style={{background:"none",border:'none',cursor:"pointer",outline:"none"}} onClick ={del}>
            <DeleteOutlineIcon/>
            </button>
            <h3>{obj.title}
            </h3>
            <p>{obj.deadline}</p>
            <p>{obj.assigned_merge_user}</p>
            {obj.completed?(<h3 style={{color:"green"}}>Completed</h3>):(<input type="checkbox" defaultChecked={obj.completed} onChange={changeStatus}/>)}
            </div>      
 )
    }
    return (
    <div style={{display:"flex",flexDirection:"column" ,alignItems:"center" ,backgroundColor:'rgb(246, 248, 250)',justifyContent:"center"}}>         
        
            {todos.map(render)}
        </div>
    )
}

export default ViewTodos
