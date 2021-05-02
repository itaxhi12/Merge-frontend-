import React,{useState} from 'react'
import loginImg from "../../login.svg";
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { useSnackbar } from 'react-simple-snackbar'
import {useHistory} from 'react-router-dom'
const Login = () => {
  const [input,setInput] = useState({})
  const dispatch = useDispatch()
  const history = useHistory()
  const [openSnackbar] = useSnackbar() 
 
  const handleInput= (e) =>{
    const {name,value} = e.target
    
    setInput(data =>{
      return({
        ...data,
        [name]:value
      })
    })
  }
  
      axios.get('http://127.0.0.1:8000/api/profile/').then((res)=>{
            console.table(res.data)
          }).catch((err)=>console.log(err))
  const login = ()=>{
    if(input.username && input.password){
        dispatch({type:"LOGIN",data:{input}})
        history.push('/home')
    }else{
      openSnackbar('Please enter fill the credentials')
    }
  }
    
    return (
     <div className="base-container" >
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={handleInput} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={handleInput} />
            </div>
          </div>
        </div>  
        <div className="footer">
            <button type="button" className="btn" onClick={login}>
            Login
          </button>
          <p>Don't have an Account?<a href="http://127.0.0.1:8000/" >Register</a></p>
        </div>
    </div>
      )
}

export default Login
