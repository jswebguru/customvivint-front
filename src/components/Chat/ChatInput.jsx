import { BiSolidSend } from "react-icons/bi";
const ChatInput = () => {
  return (
    <div className="w-full chat-input flex justify-center items-center p-6 gap-5">
      <input
        type="input"
        placeholder="Type your question here..."
        className="w-full p-4 rounded-sm outline-none bg-[#d9d9d9] text-[#575757] text-sm font-medium font-albert leading-[16.80px] placeholder-black"
      />
      <button className="w-[45px] h-[45px] rounded-sm bg-[#A99655] flex items-center justify-center">
        <BiSolidSend className="inline-block text-[#151c1c] text-lg" />
      </button>
    </div>
  );
};
export default ChatInput;
