import React, { useState,useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub';
import axios from 'axios';
const Profile = () => {

  const [input,setInput] = useState({})
    const [disabled] = useState(true)
    const username= useSelector(state=>state.auth.user.user)
  useEffect(()=>{
    axios.post('http://127.0.0.1:8000/user/',{username:username.username}).then((res)=>{
    
    const data = JSON.parse(res.data)  
    console.log(data)
    setInput(data)
    })
  },[username,setInput])
if(username){
    return (
      <div className="profile-container" >
          <Navbar/>
        <div className="profile-header">Profile</div>
        <div className="profile-content">
          <div className="profile-image">
            <img src={input.avatar_url} alt="" />
          </div>
          <div className="profile-form">
              <div className="profile-form-group">
              <label htmlFor="firstname">Name</label>
              <input type="text" name="firstname" placeholder="First Name" defaultValue={input.name} disabled={disabled}  />
                 
            </div>
            <div className="profile-form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" disabled={disabled}defaultValue={input.login}  />
            </div>
            <div className="profile-form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" placeholder="email" defaultValue={input.email} disabled={disabled}  />
            </div>
           <a style={{textDecoration:"none" ,color:"black"}} href={input.html_url} target="_blank" rel="noreferrer"><GitHubIcon fontSize="large"/> </a>
            <br></br>
            <br></br>

          </div>
        </div>          
        
    </div>
    )
    }else{
      return(
        <Redirect to='/'/>
      )
    }
}

export default Profile