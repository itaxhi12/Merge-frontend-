
   function connect (chatid,data){
    let d=[] ;
         
  var ws = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${chatid}/`)
   ws.onopen=()=>{    
    ws.send(JSON.stringify(data))
   }
   ws.onerror = (e)=>{
     console.log(e.message)
   }
   ws.onmessage=(e)=>{
  d.push(e.data)
    
    
   }
   ws.onclose = ()=>{
     connect()
   }
  }
  

  export default connect