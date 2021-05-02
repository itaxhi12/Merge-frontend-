import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
const AddTodo = () => {
const dispatch = useDispatch()

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
const addTask = ()=>{
    dispatch({type:"ADD_TASK",item:input})
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