import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import AddTodo from './Add Todo/AddTodo'
import ViewTodos from './ViewTodos/ViewTodos'

const ToDoList = () => {
    return (
        <div>
           <Navbar/>
          <div>
           <h1>ToDo list</h1>
           <AddTodo/>
           </div>
           <ViewTodos/>
        </div>

    )
}

export default ToDoList
