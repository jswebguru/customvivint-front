import { useState } from "react";
import Item from "./Item";
import "./FavoritesList.css";
const ItemList = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="px-3">
      {items.map((item) => (
        <Item key={item.id} item={item} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ItemList;
