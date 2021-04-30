import React,{useState,useEffect} from 'react'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import {store} from '../../redux/global'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import logo from '../../Assets/Logo.svg'
const Navbar = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [name,setName] = useState('')
    const useStyles = makeStyles((theme) => ({
  
    large: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));
const classes = useStyles()
const logout = () =>{
    dispatch({type:"LOGOUT"})
    history.push('/')
}

useEffect(() => {
 if(store.getState().auth.loggedIn)
 {
    setName(store.getState().auth.user.input.username) 
 }  
    
}, [setName])



return (
        <div className= 'container-navbar'>
            <div className= 'container-navbar-icon'>
                <Link to='/home'>
                    <img src={logo}/>
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
                <Avatar className={classes.large} alt=""/>
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