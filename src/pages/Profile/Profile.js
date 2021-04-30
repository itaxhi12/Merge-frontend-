import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import profile from '../../Assets/default_profile.png'
const Profile = () => {
    const [input,setInput] = useState({})
    const [disabled,setDisabled] = useState(true)
    const handleInput = (e)=>{
        const {name,value} = e.target
        setInput(data=>{
            return{
                ...data,
                [name]:value
            }
        })
    }
    const editProfile = ()=>{
        setDisabled(!disabled)
    }

    const updateProfile = ()=>{
        console.log(input)
    }
    return (
      <div className="profile-container" >
          <Navbar/>
        <div className="profile-header">Profile</div>
        <div className="profile-content">
          <div className="profile-image">
            <img src={profile} alt="" />
          </div>
          <div className="profile-form">
              <div className="profile-form-group">
              <label htmlFor="firstname">First Name</label>
              <input type="text" name="firstname" placeholder="First Name" disabled={disabled} onChange={handleInput} />
                  <label htmlFor="lastname">Last Name</label>
              <input type="text" name="lastname" placeholder="Last name" disabled={disabled} onChange={handleInput} />
            
            </div>
            <div className="profile-form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" disabled={disabled} onChange={handleInput} />
            </div>
            <div className="profile-form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" placeholder="email" disabled={disabled} onChange={handleInput} />
            </div>
           
          </div>
        </div>  
       {disabled?<div className="profile-footer">
            <button type="button" className="btn" onClick={editProfile}>
            Edit Profile
          </button>
          </div>
          :
          <div className="profile-footer">
            <button type="button" className="profile-btn" onClick={editProfile}>
            Cancel
          </button>
          <button type="button" className="profile-btn" onClick={updateProfile}>
            Update Profile
          </button>
          </div>}
        
        
    </div>
    )
}

export default Profile