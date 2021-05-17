import React, { useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar/Navbar'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
const TodoRepos = () => {

    const repos = useSelector(state=>(state.repos.repos))
    const username = useSelector(state=>state.auth.user.user.username)
    const [filter,setFilter] = useState([])
    const [search,setSearch ] = useState('')
    
    
useEffect(()=>{
    setFilter(
        repos.filter(repo=>{
            let name  = repo.name
            name = name.replace(/[^a-zA-Z ]/g, "")
            if(name.toLowerCase().includes(search.toLowerCase())){
                return repo
            }else{
                return null 
            }   
        })
    )
},[search,repos,setFilter])
    const render = (e)=>{
                        return(
       <Link key={e.name} to={"todos/"+e.name} style={{textDecoration:"none",color:"black"}}> <div  key={e.id} style={{height:"3em" ,display:"flex",width:"40em",fontSize:"large",background:"transparent",alignItems:'center',justifyContent:'space-around',margin:"1em",border:"1px solid rgba(169, 169, 169, 0.5)",borderRadius:"10px"}}>
            
            <h3>{e.name}</h3>
            </div>      
            </Link>
 )

    }
    return (
        <div>
            <Navbar/>
            <div style={{display:'flex',alignItems:'center' ,justifyContent:'center'}}>
              <input  className="addtodo__task" name="password" placeholder="Search Repos" onChange={e=>setSearch(e.target.value)} />
                </div>
            <div style={{display:'flex',flexDirection:"column",alignItems:"center",justifyContent:"center"}}> 
            {filter.map(render)}
        </div>
        </div>
    )
}

export default TodoRepos
