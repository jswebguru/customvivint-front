import "./SimpleCard.css";
import defaultImage from "../../assets/download.png";

const SimpleCardSmall = ({ title = "Adam K." }) => {
  return (
    <div
      className={
        "simple-card small px-2 py-3 flex flex-col rounded gap-2 items-center"
      }
    >
      <div className="avatar">
        <img className="avatar" src={defaultImage} alt="Profile" />
      </div>
      <div className="profile-name">Production Report</div>
    </div>
  );
};

const SimpleCardLarge = ({ title = "Adam K." }) => {
  return (
    <div
      className={
        "simple-card large p-3 flex flex-col rounded gap-4 items-center box-border"
      }
    >
      <div className="avatar mx-2">
        <img className="avatar" src={defaultImage} alt="Profile" />
      </div>
      <div className="profile-name">Vivint Premier League</div>
    </div>
  );
};

export { SimpleCardLarge, SimpleCardSmall };
