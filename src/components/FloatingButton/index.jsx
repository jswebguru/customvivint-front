import "./FloatingButton.css";
import { BsChatRightTextFill } from "react-icons/bs";

const FloatingButton = () => {
  return (
    <div className="relative">
      <button className="flex floating-button fixed bottom-6 right-3 text-white rounded-md shadow items-center justify-center">
        <BsChatRightTextFill className="text-xl" />
        <span className="ml-2">CHAT VIVINT</span>
        <div className="absolute top-0 left-0 -mt-2 -ml-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          50
        </div>
      </button>
    </div>
  );
};

export default FloatingButton;
