import React,{useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {store} from '../../redux/global'
import {useHistory} from 'react-router-dom'
const Homepage = () => {
   const history = useHistory()
    useEffect(()=>{
        if(!store.getState().auth.loggedIn){
            history.push('/')
        }
   },[history]) 
   
    return (

        <div>
            <Navbar/>
        </div>
    )
}

export default Homepage
