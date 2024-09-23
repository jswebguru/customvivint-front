import { useState } from "react";
import { BiSolidColor } from "react-icons/bi";
import { ThemeSelectionModal } from "../Modal";
const ThemeButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setIsModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = "unset";
    setIsModalOpen(false);
  };

  const handleSave = () => {
    console.log("Save changes!");
    closeModal();
  };
  return (
    <div>
      <button
        className="w-[120px] px-[10px] py-[7px] bg-button-primary rounded-[10px] text-text-primary text-sm font-medium font-albert leading-[16.80px]"
        onClick={openModal}
      >
        Theme
        <BiSolidColor className="inline-block ml-3 w-6 h-6" />
      </button>
      <ThemeSelectionModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Select Theme"
        subtitle="Customize background, by choosing a color template"
        onSave={handleSave}
      >
        <>abcd</>
      </ThemeSelectionModal>
    </div>
  );
};

export default ThemeButton;
