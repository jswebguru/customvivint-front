import "./Chat.css";
import ChatContent from "./ChatContent";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
const Chat = ({ isOpen, onClose }) => {
  return (
    <div className={`chat-navbar ${isOpen ? "open" : ""}`}>
      <ChatHeader onClose={onClose} />
      <ChatContent />
      <ChatInput />
    </div>
  );
};

export default Chat;
