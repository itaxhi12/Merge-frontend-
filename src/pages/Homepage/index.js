import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {useSelector} from 'react-redux'
const Homepage = () => {
    const n = useSelector(state=>state.auth.user.login) 

   return (
        <>
        <div style={{backgroundColor:'rgb(246,248,250)',width:"100vw",height:"80vh"}}>
            <div style={{width:"100%"}}>
            <Navbar/>
            </div>
             <div>
            <h1>
                Welcome,{n}
            </h1>
            </div>
        
           </div>
          
        </>
    )
}

export default Homepage
