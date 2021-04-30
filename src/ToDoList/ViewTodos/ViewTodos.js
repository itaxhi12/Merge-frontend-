import React, { useEffect, useState } from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Checkbox } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux'
const ViewTodos = () => {
        const selectTodos = state => state.todo.todos
                    const todos= useSelector(selectTodos)
    const dispatch = useDispatch()

            function render (obj){
 
            const del = ()=>{
                dispatch({type:"REMOVE_TASK",item:obj})
            }
 
                return(
        <div key={obj.id} style={{height:"3em" ,display:"flex",width:"40em",fontSize:"large",background:"transparent",alignItems:'center',justifyContent:'space-around',margin:"1em",border:"1px solid rgba(169, 169, 169, 0.5)",borderRadius:"10px"}}>
            <button style={{background:"none",border:'none',cursor:"pointer",outline:"none"}} onClick ={del}>
            <DeleteOutlineIcon/>
            </button>
            <h3>{obj.task}
            </h3>
            <p>{obj.date}</p>
            <Checkbox/>
            </div>      
 )
    }
    return (
    <div style={{display:"flex",flexDirection:"column" ,alignItems:"center",justifyContent:"center"}}>         
            {todos.map(render)}
        </div>
    )
}

export default ViewTodos
