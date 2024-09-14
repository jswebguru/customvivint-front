import "./SimpleCard.css";
import defaultImage from "../../assets/download.png";

const SimpleCard = ({ size = "small", title = "Adam K." }) => {
  const isLarge = size === "large";

  return (
    <div
      className={`simple-card rounded-lg p-4 ${
        isLarge ? "w-64 h-52" : "w-28 h-44"
      } text-white flex flex-col items-center shadow-lg h-44`}
    >
      <div
        className={`rounded-full overflow-hidden avatar ${
          isLarge ? "w-28 h-28 mb-4" : "w-24 h-24 mb-2"
        }`}
      >
        <img
          className="w-full h-full object-cover"
          src={defaultImage}
          alt="Profile"
        />
      </div>
      <span
        className={`font-medium text-center ${
          isLarge ? "text-base" : "text-sm"
        }`}
      >
        {title}
      </span>
    </div>
  );
};

export default SimpleCard;
