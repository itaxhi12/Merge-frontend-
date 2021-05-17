import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Messenger from '../Messenger';
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
export default function App() {
 const username = useSelector(state=>state.auth.user.user)
    
 if(username){
 return (
    <>
    <Navbar/>
    <div className="App">  
        <Messenger />
      </div>
    </>
    );  
 } else{
  return(
  <Redirect to='/'/>

  )
 }
 
}