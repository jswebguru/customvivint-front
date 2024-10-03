import defaultImage from "../../assets/download.png";

const ChatHeader = ({ onClose }) => {
  return (
    <div className="w-full px-[19px] py-4 flex justify-between items-center border-b border-white/25">
      <div className="flex justify-start items-center gap-3">
        <img
          className="w-12 h-12 rounded-full border-2 border-[#655f5f] object-cover"
          src={defaultImage}
          alt="Profile"
        />
        <div>
          <h2 className="text-base font-semibold text-white leading-tight">
            CHAT VIVINT
          </h2>
          <p className="opacity-80 text-xs font-medium font-['Plus Jakarta Sans'] leading-[18px]">
            Our brand new chat agent, ask anything!
          </p>
        </div>
      </div>
      <div>
        <button onClick={onClose} className="close-button pb-2">
          &times;
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
