import React,{useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
const Homepage = () => {
  const dispatch = useDispatch()
    const user = useSelector(state=>state.auth.user) 
  useEffect(()=>{
    axios.post('http://127.0.0.1:8000/user/',{username:user.user.username}).then((res)=>{    
    const data = JSON.parse(res.data)  
    dispatch({type:"GITHUB",data:data})
    })
  },[user,dispatch])
if(user.user){
    return (
        <>
        <div style={{backgroundColor:'rgb(246,248,250)',width:"100vw",height:"80vh"}}>
            <div style={{width:"100%"}}>
            <Navbar/>
            <Sidebar/>
            </div>
             <div>
            <h1>
                Welcome,{user.user.username}
            </h1>
            </div>
        
           </div>
          
        </>
    )
}else{
    return(
    <Redirect to='/'/>
    )
}
}

export default Homepage
