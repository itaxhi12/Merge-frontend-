import React,{useEffect} from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Messenger from '../Messenger';
import {useSelector,useDispatch} from 'react-redux'
import connect from '../../websocket'
import {Redirect} from 'react-router-dom'
export default function App() {
 const username = useSelector(state=>state.auth.user.user)
  const chatid = useSelector(state=>state.chat.chatid)
  const dispatch = useDispatch()
useEffect(()=>{
  
   function connect (){
  const   data= {
      "command":"fetch_messages",
      "chatId":chatid
      }       
  var ws = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${chatid}/`)
   ws.onopen=()=>{    
    ws.send(JSON.stringify(data))
   }
   ws.onerror = (e)=>{
     console.log(e.message)
   }
   ws.onmessage=(e)=>{
     let d = JSON.parse(e.data)
    if(d.message){
       dispatch({type:"NEW_TEXT",data:d.message})
    }
    if(d.messages){
      console.log(d.messages)
        dispatch({type:"GET_CHATS",data:d.messages.reverse()})
    }  
   }
   ws.onclose = ()=>{
     connect()
   }
  }
connect()
},[connect,chatid,dispatch])

 if(username){
 return (
    <>
    <Navbar/>
    <div className="App">  
        <Messenger  />
      </div>
    </>
    );  
 } else{
  return(
  <Redirect to='/'/>

  )
 }
 
}