import SectionViewHeader from "./SectionViewHeader";
import SectionViewContentRow from "./SectionViewContentRow";
import SectionViewContentColumn from "./SectionViewContentColumn";
import SectionViewContentReport from "./SectionViewContentReport";
const SectionViewRow = ({
  size = "small",
  title = "Favorites",
  buttonTitle = "",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-3">
      <SectionViewHeader title={title} buttonTitle={buttonTitle} />
      <SectionViewContentRow size={size} />
    </div>
  );
};

const SectionViewColumn = ({
  title = "Favorites",
  buttonTitle = "",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-3">
      <SectionViewHeader title={title} buttonTitle={buttonTitle} />
      <SectionViewContentColumn />
    </div>
  );
};

const SectionViewReport = ({
  title = "Favorites",
  buttonTitle = "",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-3">
      <SectionViewHeader title={title} buttonTitle={buttonTitle} />
      <SectionViewContentReport />
    </div>
  );
};
export { SectionViewRow, SectionViewColumn, SectionViewReport };
