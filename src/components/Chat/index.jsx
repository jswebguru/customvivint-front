import "./Chat.css";
import ChatHeader from "./ChatHeader";
const Chat = ({ isOpen, onClose }) => {
  return (
    <div className={`chat-navbar ${isOpen ? "open" : ""}`}>
      <ChatHeader onClose={onClose} />
      <div className="navbar-content"></div>
    </div>
  );
};

export default Chat;
