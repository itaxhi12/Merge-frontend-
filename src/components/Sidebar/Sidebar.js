import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
const Sidebar = () => {
  const dispatch = useDispatch()
  const username  = useSelector(state=>state.auth.user.user.username)
    const [search,setSearch] = useState('')
    const [filter,setFilter] = useState([])
    const repos = useSelector(state=>(state.repos.repos))
console.log(repos)
    useEffect(()=>{
        axios.post('http://127.0.0.1:8000/repo/view/',{username:username}).then((res)=>{
        const  repos = JSON.parse(res.data)
        dispatch({type:"GET_REPOS",data:repos.data.viewer.repositories.nodes})    
    })        
        
    },[dispatch,username])
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
const render=(obj)=>{
    const address = `https://github.com/${obj.owner.login}/${obj.name}`
    return(
        <>
        
    <a className="container-sidebar-links"  href={address} target="_blank" rel="norefferer"><h5>{obj.owner.login}/{obj.name}</h5></a>
        </>
    )
}
    return (
        <div className="container-sidebar" >
            <div>
            <h2>Repositories</h2>
            </div>
            <div>
                <input className="container-sidebar-input" placeholder="Find a repository" onChange={e=>setSearch(e.target.value)}/>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
            {filter.map(render)}
            </div>
        </div>
    )
}

export default Sidebar
