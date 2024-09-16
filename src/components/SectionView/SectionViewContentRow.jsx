import "./style.css";
import { SimpleCardLarge, SimpleCardSmall } from "../SimpleCard";

const CARD = [
  "Adam K.",
  "Production Report",
  "David Ritchie",
  "Best Report",
  "Adam K.",
  "Production",
];
const SectionViewContentRow = ({ size = "small" }) => {
  return (
    <div
      className={`section-view-content-row flex flex-row text-white px-3 gap-4 ${
        size === "small" ? "gap-3" : "gap-4"
      }`}
    >
      {CARD.map((index, title) =>
        size === "small" ? (
          <SimpleCardSmall title={title} key={title + index} />
        ) : (
          <SimpleCardLarge title={title} key={title + index} />
        )
      )}
    </div>
  );
};

export default SectionViewContentRow;
