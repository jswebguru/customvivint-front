import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import defaultImage from "../../assets/download.png";
const Item = ({ item, onDelete }) => {
  const [checked, setChecked] = useState(item.checked);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex items-center justify-between px-2 py-3 gap-3 text-text-primary favorite-item">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          className="checkbox"
        />
        <img
          className="w-12 h-12 rounded-full border-2 border-[#655f5f] object-cover"
          src={defaultImage}
          alt="Profile"
        />
        <div className=" text-base font-semibold font-['Plus Jakarta Sans'] leading-tight">
          {item.text}
        </div>
      </div>
      <button onClick={() => onDelete(item.id)} className="w-4 h-4">
        <FiTrash2 />
      </button>
    </div>
  );
};

export default Item;
