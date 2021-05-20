/** @format */

import React, { useState } from "react";
import "./Compose.css";
import { useSelector} from "react-redux";

export default function Compose(props) {
  const [text, setText] = useState("");
  const username = useSelector((state) => state.auth.user.user.username);
  const chatid = useSelector((state) => state.chat.chatid);
  const send = () => {
    if (text !== "") {
      const data = {
        command: "new_message",
        chatId: chatid,
        from: username,
        message: text,
      };
      var ws = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${chatid}/`);
      ws.onopen = () => {
        ws.send(JSON.stringify(data));
      };
      ws.onmessage= ()=>{
        setText("")
      }
    }
  };
  return (
    <div className="compose">
      <input
        type="text"
        className="compose-input"
        placeholder="Type a message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={send} className="btn">
        Send
      </button>
    </div>
  );
}
