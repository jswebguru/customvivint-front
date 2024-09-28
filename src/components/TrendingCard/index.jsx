import "./TrendingCard.css";
import defaultImage from "../../assets/download.png";
import { GrBarChart } from "react-icons/gr";

const TrendingCard = ({ heading, title, description }) => {
  return (
    <div className="trending-card-body font-albert rounded justify-start items-center inline-flex z-0">
      <div className="relative flex-shrink-0 mr-4">
        <img
          className="w-[80px] h-[80px] rounded-full border-2 border-[#655f5f] object-cover"
          src={defaultImage}
          alt="Profile"
        />
        <span className="color-white bg-button-primary absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 rounded-full">
          <GrBarChart />
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="trending-card-content-category uppercase">
          {heading}
        </div>
        <div className="trending-card-content-title">{title}</div>
        <div className="trending-card-content-content font-medium">
          {description}
          <span className=".trending-card-content-content font-bold">
            230 sales
          </span>
          .
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
