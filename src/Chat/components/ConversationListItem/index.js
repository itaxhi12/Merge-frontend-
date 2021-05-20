/** @format */

import React, { useEffect, useState } from "react";
import shave from "shave";
import { useDispatch, useSelector } from "react-redux";
import "./ConversationListItem.css";

export default function ConversationListItem(props) {
  const [style, setStyle] = useState({});
  const chatid = useSelector((state) => state.chat.chatid);
  useEffect(() => {
    shave(".conversation-snippet", 20);
  });

  useEffect(() => {
    if (chatid === props.data.id) {
      setStyle({ background: "#eeeef1" });
    }else{
      setStyle({})
    }
  }, [setStyle, chatid]);
  const dispatch = useDispatch();

  const setChatid = () => {
    dispatch({ type: "CHATID", data: props.data.id });
    dispatch({ type: "REPONAME", data: props.data.repo_name });
  };
  if (chatid === props.data.id) {
  }
  return (
    <div className="conversation-list-item" style={style} onClick={setChatid}>
      {/* <img className="conversation-photo" src={photo} alt="conversation" /> */}
      <div className="conversation-info">
        <h1 className="conversation-title">{props.data.repo_name}</h1>
        {/* <p className="conversation-snippet">{ text }</p> */}
      </div>
    </div>
  );
}
