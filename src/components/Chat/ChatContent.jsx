// src/components/ChatInterface.js
import React from "react";
import ChatBubble from "./ChatBubble";

const ChatContent = () => {
  const messages = [
    {
      type: "user",
      text: "Where can I see which of my reps had their best week of the year this week?",
    },
    {
      type: "bot",
      text: "You can see that information by clicking this link to the BEST REPORT, where you will find which reps had their best week this year,",
    },
    // Add more messages as needed
  ];

  return (
    <div className="w-full h-full p-5 flex flex-col space-y-4">
      <div className="flex flex-col space-y-2 overflow-y-auto">
        {messages.map((msg, index) => (
          <ChatBubble key={index} type={msg.type} text={msg.text} />
        ))}
      </div>
    </div>
  );
};

export default ChatContent;
