const ChatHeader = ({ onClose }) => {
  return (
    <div className="w-full px-[19px] py-4 flex justify-between items-center text-text-primary">
      <div>
        <h2 className="text-lg font-semibold leading-snug">abcdabcd</h2>
        <p className="opacity-80 text-[11px] font-medium font-['Plus Jakarta Sans']">
          abcdabcd
        </p>
      </div>
      <div>
        <button onClick={onClose} className="close-button">
          &times;
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
