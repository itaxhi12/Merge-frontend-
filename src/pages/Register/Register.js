import React,{useState} from 'react'
import loginImg from "../../login.svg";
import {Link,useHistory} from 'react-router-dom'
import {useSnackbar} from 'react-simple-snackbar'
import axios from 'axios';

const Register = () => {
  const [input,setInput] = useState({})
  const [openSnackbar]  = useSnackbar({position:'top-center'})
   const history = useHistory()

   const handleInput= (e) =>{
    const {name,value} = e.target
    setInput(data =>{
      return({
        ...data,
        [name]:value
      })
    })
  }
  const register = ()=>{
    if(input.merge_username && input.user && input.merge_password && input.confirm_password)
    {
      
     
        if(input.merge_password === input.confirm_password){
          axios.post('http://127.0.0.1:8000/api/profile/',{merge_username:input.merge_username,merge_password:input.merge_password,user:2}).then(()=>{
            history.push('/')
          }).catch((err)=>console.log(err))
        }else{
          openSnackbar('Passwords donot match')
        }
    }else{
      openSnackbar('Please fill all the credentials')
    }
  }
  return(          
        <div className="base-container" >
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="merge_username" placeholder="username" onChange={handleInput} />
            </div>
            <div className="form-group">
              <label htmlFor="user">Github-Username</label>
              <input type="text" name="user" placeholder="Github Username" onChange={handleInput} />
            </div>

            <div className="form-group">
             
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input name="merge_password" type="password" placeholder="password" onChange={handleInput} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input name="confirm_password" type="password" placeholder="confirm password" onChange={handleInput} />
            </div>
          </div>
        </div>
        <div className="footer">
          
          <button type="button" className="btn" onClick={register}>Register</button>
            

        <p>Already have an account?<Link to='/'>Login</Link></p>
        </div>
</div>
    );
}
export default Register