import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import {Link,Redirect} from 'react-router-dom'

import {useDispatch,useSelector} from 'react-redux'
import logo from '../../Assets/Logo.svg'
const Navbar = () => {
    const dispatch = useDispatch()
   
    const user = useSelector(state=>state.auth.user)
  
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
if(user.user){
return (
        <div className= 'container-navbar'>
            <div className= 'container-navbar-icon'>
                <Link to='/home'>
                    <img src={logo} alt=""/>
                </Link>
            </div>
            <div className="container-navbar-tabs">
                <h5 className="navbar-tabs">Chat</h5>
                <Link className="navbar-tabs" to='/todorepos'><h5 className="navbar-tabs">ToDo List</h5>
                </Link>
 
            </div>
            <div className="container-navbar-profile">
                <Avatar src={null} className={classes.large} alt=""/>
            <div className="navbar-dropdown">
            <div className = 'navbar-dropdown-greet' >
                <p>Hello, {user.user.username}</p>
            </div>
            <Link className="navbar-links" to='/profile'><button>Profile</button></Link>
            <Link className="navbar-links" to='/changepass'><button>Change Password</button></Link>
            
            <button onClick ={logout}>Logout</button>
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

export default Navbar