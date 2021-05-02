import React,{useState,useEffect} from 'react'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import logo from '../../Assets/Logo.svg'
const Navbar = () => {
    const dispatch = useDispatch()
     const [name,setName] = useState('')
    const [avatar,setAvatar] = useState('')
    useEffect(()=>{
    const getUser=()=>{
        axios.get('http://127.0.0.1:8000/user').then(res=>{
        setName(res.data.login)      
        setAvatar(res.data.avatar_url)
        dispatch({type:"LOGIN",data:res.data})
      
        })
    }
    getUser()
   },[dispatch,setName,setAvatar])



    
 
    const useStyles = makeStyles((theme) => ({
  
    large: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));
const classes = useStyles()

const logout = () =>{
    dispatch({type:"LOGOUT"})
    window.location = 'http://127.0.0.1:8000/accounts/logout'
}

return (
        <div className= 'container-navbar'>
            <div className= 'container-navbar-icon'>
                <Link to='/home'>
                    <img src={logo} alt=""/>
                </Link>
            </div>
            <div className="container-navbar-input">
                <input className="navbar-input" placeholder="search..."/>
            </div>
            <div className="container-navbar-tabs">
                <h5 className="navbar-tabs">Chat</h5>
                <Link className="navbar-tabs" to='/todo'><h5 className="navbar-tabs">ToDo List</h5>
                </Link>
 
            </div>
            <div className="container-navbar-profile">
                <Avatar src={avatar} className={classes.large} alt=""/>
            <div className="navbar-dropdown">
            <div className = 'navbar-dropdown-greet' >
                <p>Hello, {name}</p>
            </div>
            <Link className="navbar-links" to='/profile'><button>Profile</button></Link>
            <Link className="navbar-links" to='/changepass'><button>Change Password</button></Link>
            
            <button onClick ={logout}>Logout</button>
            </div>
            </div>
        </div>
    )
}

export default Navbar