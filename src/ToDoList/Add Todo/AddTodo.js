import axios from 'axios';
import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
const AddTodo = ({repo}) => {


let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; 
let yyyy =today.getFullYear();
if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
const [input,setInput]= useState({
    date:yyyy+'-'+mm+'-'+dd
})

const handleInput=(e)=>{
    const {name,value} = e.target
    setInput(data=>{
        return{
            ...data,
            [name]:value,
          
        }
    })
}
const dispatch = useDispatch()
const addTask = ()=>{
    axios.post('http://127.0.0.1:8000/api/todos/',{title:input.title,deadline:input.date,repo:repo,assigned_merge_user:"itaxhi12",completed:false})
    .then((res)=>{
        dispatch({type:"ADD_TASK",item:res.data})
    })
    
}

    return (
        <div> 
            <input id="task" name="title" className ="addtodo__task"  placeholder="add tasks.." autoComplete="off" autoCapitalize="words" onChange={handleInput}/>
            <input id = "date" name="date" type="date"  className="addtodo__date" min={yyyy+'-'+mm+'-'+dd} defaultValue={ yyyy+'-'+mm+'-'+dd} onChange={handleInput}/>
            <button className="addtodo__btn" onClick={addTask}>Add Task</button>
        </div>
    )
}
export default AddTodo












