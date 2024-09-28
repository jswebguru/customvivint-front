import "./FloatingButton.css";
import { BsChatRightTextFill } from "react-icons/bs";

const FloatingButton = ({ onOpenChat }) => {
  return (
    <div className="relative">
      <button
        onClick={onOpenChat}
        className="flex floating-button fixed bottom-6 right-3 text-white rounded-md shadow items-center justify-center"
      >
        <BsChatRightTextFill className="text-xl" />
        <span className="ml-2">CHAT VIVINT</span>
        <div className="badge">50</div>
      </button>
    </div>
  );
};

export default FloatingButton;
