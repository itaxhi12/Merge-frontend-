import React, { useState,useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {store} from '../../redux/global'
import GitHubIcon from '@material-ui/icons/GitHub';
const Profile = () => {

  const [input,setInput] = useState({})
    const [disabled] = useState(true)
    console.log(input.name)
    useEffect(()=>{
    setInput(store.getState().auth.user)
    },[setInput])
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
              <input type="email" name="email" placeholder="email" disabled={disabled}  />
            </div>
           <a style={{textDecoration:"none" ,color:"black"}} href={input.html_url} target="_blank" rel="noreferrer"><GitHubIcon fontSize="large"/> </a>
            <br></br>
            <br></br>

          </div>
        </div>          
        
    </div>
    )
}

export default Profile