import { BiSolidColor } from "react-icons/bi";

const ThemeButton = () => {
  return (
    <div>
      <button className="w-[120px] px-[10px] py-[7px] bg-button-primary rounded-[10px] text-text-primary text-sm font-medium font-albert leading-[16.80px]">
        Theme
        <BiSolidColor className="inline-block ml-3 w-6 h-6" />
      </button>
    </div>
  );
};

export default ThemeButton;
