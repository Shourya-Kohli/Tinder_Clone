import React from "react";
import "./Chats.css";
import Chat from "./Chat";
function Chats() {
  return (
    <div className="chats">
      <Chat name="mark" message="hello this is mark" timestamp="50 sec" />
    </div>
  );
}

export default Chats;
