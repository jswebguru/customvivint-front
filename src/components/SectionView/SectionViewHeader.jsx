import { useState } from "react";
import { BasicModal } from "../Modal";
import ItemList from "../FavoritesList";
const initialItems = [
  { id: 1, text: "Item 1", checked: false },
  { id: 2, text: "Item 2", checked: true },
  { id: 3, text: "Item 3", checked: false },
  { id: 4, text: "Item 3", checked: false },
  { id: 5, text: "Item 3", checked: false },
  { id: 6, text: "Item 3", checked: false },
];
const SectionViewHeader = ({ title = "Favorites", buttonTitle = "" }) => {
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

  const containButton = buttonTitle !== "";

  return (
    <>
      <div className="flex justify-between items-center px-3 section-view-header">
        <h1 className="grow shrink basis-0 text-lg font-bold font-albert leading-snug">
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
      <BasicModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Edit Favourites"
        subtitle="Add selected to homescreen"
        onSave={handleSave}
      >
        <ItemList initialItems={initialItems} />
      </BasicModal>
    </>
  );
};

export default SectionViewHeader;
