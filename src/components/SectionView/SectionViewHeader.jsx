import { useState } from "react";
import Modal from "../Modal";

const SectionViewHeader = ({ title = "Favorites", buttonTitle = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    console.log("Save changes!");
    closeModal();
  };

  const containButton = buttonTitle !== "";

  return (
    <>
      <div className="flex justify-between items-center px-3 section-view-header">
        <h1 className="grow shrink basis-0 text-lg font-bold albert-sans-bold leading-snug">
          {title}
        </h1>
        {containButton ? (
          <button className="text-sm pr-2.5" onClick={openModal}>
            {buttonTitle}
          </button>
        ) : (
          <></>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Edit Favourites"
        subtitle="Add selected to homescreen"
        onSave={handleSave}
      >
        {/* Modal Content */}
        <div>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Adam Kinkler</span>
          </label>
          <label className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            <span>Production Report</span>
          </label>
          <label className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            <span>David Ritchie</span>
          </label>
          <label className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            <span>Best Report</span>
          </label>
          <label className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            <span>Aaron Doria</span>
          </label>
        </div>
      </Modal>
    </>
  );
};

export default SectionViewHeader;
