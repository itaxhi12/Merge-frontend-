import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import './ConversationList.css';

export default function ConversationList(props) {
 const username = useSelector(state=>state.auth.user.user.username)

  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations()
  },[])
console.log(conversations)
 const getConversations = () => {
    axios.get('http://127.0.0.1:8000/chat/').then(res => {
    console.log(res.data)  
    setConversations(
        res.data.map(obj=>{
          if(obj.collaborators.includes(username))
          return obj
        })
      )
    });
  }
  if(username)
  {
    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
        <ConversationSearch />
        {
          conversations.map(conversation =>
            <ConversationListItem
              key={conversation.repo_name}
              data={conversation.repo_name}
            />
          )
        }
      </div>
    );
  }
  else{
    return(
      <Redirect to='/'/>
    )
  }
    
}