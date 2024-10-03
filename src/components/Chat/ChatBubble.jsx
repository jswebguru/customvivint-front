import React from "react";
import defaultImage from "../../assets/download.png";

const ChatBubble = ({ type, text }) => {
  const bubbleStyles =
    type === "user"
      ? "bg-[#a99655] text-white rounded-tl-md rounded-tr-sm rounded-bl-md rounded-br-md"
      : "bg-gray-200 text-black rounded-bl-md rounded-br-md rounded-tl-sm rounded-tr-md";

  return (
    <div
      className={`flex items-start my-2 w-full gap-3 ${
        type === "user" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <img
        className="w-9 h-9 rounded-full object-cover"
        src={defaultImage}
        alt="Profile"
      />
      <div
        className={`p-3 max-w-xs text-xs font-medium font-['Plus Jakarta Sans'] leading-[18px] ${bubbleStyles}`}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatBubble;
