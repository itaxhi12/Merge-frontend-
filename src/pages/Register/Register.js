import React,{useState} from 'react'
import loginImg from "../../login.svg";
import {Link,useHistory} from 'react-router-dom'
import {useSnackbar} from 'react-simple-snackbar'


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
    if(input.username && input.email && input.password && input.confirm_password)
    {
      
      if( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.email)){
        if(input.password === input.confirm_password){
          history.push('/')
        }else{
          openSnackbar('Passwords donot match')
        }
      }else{
        openSnackbar('Please enter a valid email')
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
              <input type="text" name="username" placeholder="username" onChange={handleInput} />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" placeholder="email" onChange={handleInput} />
            </div>

            <div className="form-group">
             
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input name="password" type="password" placeholder="password" onChange={handleInput} />
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