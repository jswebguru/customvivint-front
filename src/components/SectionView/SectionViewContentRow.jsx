import "./style.css";
import { SimpleCardLarge, SimpleCardSmall } from "../SimpleCard";

const CARD = [
  "Adam K.",
  "Production Report",
  "Adam K.",
  "Production Report",
  "Adam K.",
  "Production Report",
];
const SectionViewContentRow = ({ size = "small", content }) => {
  return (
    <div
      className={`section-view-content-row flex flex-row text-white px-3 ${
        size === "small" ? "gap-3" : "gap-4"
      }`}
    >
      {content?.map((item, index) =>
        size === "small" ? (
          <SimpleCardSmall title={item.title} key={item.title + index} />
        ) : (
          <SimpleCardLarge title={item.title} key={item.title + index} />
        )
      )}
    </div>
  );
};

export default SectionViewContentRow;
