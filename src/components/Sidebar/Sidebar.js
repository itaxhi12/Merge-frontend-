import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
const Sidebar = () => {
    const repos = useSelector(state=>state.repos.repos)
    const [search,setSearch] = useState('')
    const [filter,setFilter] = useState(repos)
    const render = (e)=>{
        return (
            <div>
            <a href="#">  <p>{e.full_name}</p> </a>
            </div>
        )
    } 
    useEffect(()=>{
        setFilter(
            repos.filter(repo=>{
                repo.full_name.toLowerCase().includes(search.toLowerCase())
            })
        )
    },[search,repos,setFilter])
    return (
        <div className="container-sidebar">
            <p>Repositories</p>
           <div>
              
               <input className="sidebar-input" placeholder="Search repository " onChange={e=>setSearch(e.target.value)}/>
           </div>
           <div>
           { filter.map(render)}
           </div>
        </div>
    )
}

export default Sidebar
