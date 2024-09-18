import "./TrendingCard.css";
import defaultImage from "../../assets/download.png";
import { GrBarChart } from "react-icons/gr";

const TrendingCard = ({ name = "Adam Kinkler" }) => {
  return (
    <div className="trending-card-body rounded justify-start items-center inline-flex z-0">
      <div className="relative flex-shrink-0 mr-4">
        <img
          className="w-[80px] h-[80px] rounded-full border-2 border-[#655f5f] object-cover"
          src={defaultImage}
          alt="Profile"
        />
        <span className="color-white bg-[#c2b485] absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 rounded-full">
          <GrBarChart />
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="trending-card-content-category uppercase">
          Monthly Sales Standing
        </div>
        <div className="trending-card-content-title">REGION {name}</div>
        <div className="trending-card-content-content medium">
          Leading the way this month with{" "}
          <span className=".trending-card-content-content bold">230 sales</span>
          .
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
