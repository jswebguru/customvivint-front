import Accordion from "./Accordion";
import ReportItem from "./ReportItem";
import "./ReportList.css";

const ReportList = ({ reports }) => {
  return (
    <div className="w-full text-black">
      <Accordion>
        {reports.map((item) => (
          <ReportItem key={item.id} item={item} />
        ))}
      </Accordion>
    </div>
  );
};

export default ReportList;
