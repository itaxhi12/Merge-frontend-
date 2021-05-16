import React,{useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import AddTodo from './Add Todo/AddTodo'
import ViewTodos from './ViewTodos/ViewTodos'

const ToDoList = ({match}) => {
    const [repo] = useState(match.params.repo)
    
    return (
        <div>
           <Navbar/>
          <div>
           <h1>ToDo list</h1>
           <AddTodo repo={repo}/>
           </div>
           <ViewTodos repo={repo}/>
        </div>

    )
}

export default ToDoList
