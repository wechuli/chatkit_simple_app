import React, { useState } from "react";

const dummyData = [
  {
    senderId: "wechuli",
    text: "Hey beautiful, how is it going?"
  },
  {
    senderId: "nicole",
    text: "Hey you, am good"
  },
  {
    senderId: "lawrence",
    text: "Yoh, niggas, stop it"
  }
];

const MessageList = props => {
  return (
    <div className="message-list">
      {dummyData.map((message, index) => {
        return (
          <div key={index} className="message">
            <p className="message-username">{message.senderId}</p>
            <p className="message-text">{message.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
