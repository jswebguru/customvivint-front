import "./style.css";
import SimpleCard from "../SimpleCard";

const CARD = ["Adam K.", "Production Report", "David Ritchie", "Best Report"];
const SectionViewContentRow = ({ size = "small" }) => {
  return (
    <div className="section-view-content-row text-white pl-2 pr-2">
      {CARD.map((title) => (
        <SimpleCard title={title} size={size} />
      ))}
    </div>
  );
};

export default SectionViewContentRow;
