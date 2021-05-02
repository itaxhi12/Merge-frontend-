import React,{useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'

const ChangePasswords = () => {
   const [input,setInput] = useState({}) 
      
   const handleInput= (e)=>{
    const {name,value} = e.target   
    setInput(data=>{
           return{
               ...data,
               [name]:value
           }
       })
   }

   const updatePass = ()=>{
     console.log(input)
   }
    return (
        <div>
            <Navbar/>
            <br/>
            <br/>
            <br/>
           
            
            <div className="base-container" >
        <div className="header">Change Password</div>
        <br/>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Old Password</label>
              <input type="password" name="old_pass" placeholder="old password" onChange={handleInput} />
            </div>
            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <input type="password" name="new_password" placeholder="new password" onChange={handleInput} />
            </div>
            <div className="form-group">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input type="password" name="confirm_password" placeholder="confirm password" onChange={handleInput} />
            </div>
          </div>
        </div>  
        <div className="footer">
            <button type="button" onClick={updatePass} className="btn" >
            Update Password
          </button>
        </div>
    </div>

        </div>
    )
}
export default ChangePasswords