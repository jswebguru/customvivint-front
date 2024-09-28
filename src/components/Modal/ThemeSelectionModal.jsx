import ModalHeader from "./ModalHeader";
import QuadrantButton from "./QuadrantButton";
import { useTheme } from "../../contexts/ThemeContext";
import { changeTheme } from "../../utils/helper";
const ThemeSelectionModal = ({ isOpen, onClose, title, subtitle }) => {
  const { themes, selectedTheme, updateTheme } = useTheme();
  const resetTheme = () => {
    updateTheme("");
    changeTheme("");
  };
  return (
    <div
      className={`fixed inset-0 z-[1001] ${
        isOpen ? "flex" : "hidden"
      } items-end justify-center overflow-hidden`}
    >
      <div
        className={`bg-black bg-opacity-50 fixed inset-0 w-full`}
        onClick={onClose}
      ></div>
      <div
        className={`transform transition-transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } 
        w-full bg-background-secondary rounded-tl-3xl rounded-tr-3xl border-t border-white overflow-hidden`}
      >
        <ModalHeader title={title} subtitle={subtitle} onClose={onClose} />
        <div className="flex flex-row gap-3 items-center justify-center">
          <QuadrantButton
            colors={themes.theme1}
            isSelected={selectedTheme === "theme1"}
            onClick={() => updateTheme("theme1")}
            themeTitle="SUNSET GLOW"
          />
          <QuadrantButton
            colors={themes.theme2}
            isSelected={selectedTheme === "theme2"}
            onClick={() => updateTheme("theme2")}
            themeTitle="NEON VIBES"
          />
          <QuadrantButton
            colors={themes.theme3}
            isSelected={selectedTheme === "theme3"}
            onClick={() => updateTheme("theme3")}
            themeTitle="LIGHT SKY"
          />
          <QuadrantButton
            colors={themes.theme4}
            isSelected={selectedTheme === "theme4"}
            onClick={() => updateTheme("theme4")}
            themeTitle="EARTHY TONES"
          />
        </div>
        <div className="flex p-4 gap-4 items-center justify-center">
          <button
            onClick={() => changeTheme(selectedTheme)}
            className="basis-3/4 w-[120px] h-10 px-3.5 py-1 bg-button-primary rounded-[10px] text-neutral-50 text-sm font-semibold font-albert leading-[16.80px]"
          >
            Apply
          </button>
          <button
            onClick={resetTheme}
            className="basis-1/4 w-[120px] h-10 px-3.5 py-1 bg-button-secondary rounded-[10px] text-[#0b0a0a] text-sm font-semibold font-albert leading-[16.80px]"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelectionModal;
