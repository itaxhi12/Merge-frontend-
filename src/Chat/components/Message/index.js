/** @format */

import React from "react";
import moment from "moment";
import "./Message.css";

export default function Message(props) {
  let { data, isMine, startsSequence, endsSequence, showTimestamp } = props;
  const friendlyTimestamp = moment(data.timestamp).format("LLLL");
  return (
    <div
      className={[
        "message",
        `${isMine ? "mine" : ""}`,
        `${startsSequence ? "start" : ""}`,
        `${endsSequence ? "end" : ""}`,
      ].join(" ")}>
      {showTimestamp && <div className="timestamp">{friendlyTimestamp}</div>}

      <div className="bubble-container">
        {isMine ? null : <h4>{data.author}</h4>}
        <br />
        <div className="bubble" title={friendlyTimestamp}>
          {data.content}
        </div>
      </div>
    </div>
  );
}
