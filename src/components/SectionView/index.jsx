import SectionViewHeader from "./SectionViewHeader";
import SectionViewContentRow from "./SectionViewContentRow";
const SectionView = ({ size = "small" }) => {
  return (
    <div className="flex flex-col">
      <SectionViewHeader />
      <SectionViewContentRow size={size} />
    </div>
  );
};

export { SectionView };
