import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
const Homepage = () => {
 
    const user = useSelector(state=>state.auth.user) 

if(user.user){
    return (
        <>
        <div style={{backgroundColor:'rgb(246,248,250)',width:"100vw",height:"80vh"}}>
            <div style={{width:"100%"}}>
            <Navbar/>
            </div>
             <div>
            <h1>
                Welcome,{user.user.username}
            </h1>
            </div>
        
           </div>
          
        </>
    )
}else{
    return(
    <Redirect to='/'/>
    )
}
}

export default Homepage
