import SectionViewHeader from "./SectionViewHeader";
import SectionViewContentRow from "./SectionViewContentRow";
import SectionViewContentColumn from "./SectionViewContentColumn";
import SectionViewContentReport from "./SectionViewContentReport";
const SectionViewRow = ({
  size = "small",
  title = "Favorites",
  buttonTitle = "",
  isNavbar = false,
  content = null,
  ...props
}) => {
  return (
    <div
      className={`flex flex-col gap-3 w-full ${
        isNavbar ? "header-navbar" : ""
      }`}
    >
      <SectionViewHeader title={title} buttonTitle={buttonTitle} />
      <SectionViewContentRow size={size} content={content} />
    </div>
  );
};

const SectionViewColumn = ({
  title = "Favorites",
  buttonTitle = "",
  content = null,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-3">
      <SectionViewHeader title={title} buttonTitle={buttonTitle} />
      <SectionViewContentColumn content={content} />
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
