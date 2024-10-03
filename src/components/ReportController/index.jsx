import { useState } from "react";
import ThemeButton from "../ThemeButton";
import { MdOutlineLaptop } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import "./ReportController.css";
const ReportController = () => {
  const [reportType, setReportType] = useState("OVERVIEW");
  return (
    <>
      <div className="flex flex-row gap-3 items-center justify-between">
        <div className="flex items-center gap-2">
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="px-2.5 h-7 select rounded-lg bg-button-primary text-sm font-normal font-albert leading-[14.40px] text-text-primary"
          >
            <option value="Tableau Report">OVERVIEW</option>
            <option value="Custom Report">OVERVIEW1</option>
          </select>
          <MdOutlineLaptop className="w-6 h-6 text-text-primary" />
        </div>
        <div>
          <button className="h-7 px-2.5 py-[7px] bg-button-secondary rounded-lg text-text-button text-xs font-medium font-albert leading-[14.40px] mr-3">
            &lt; Prev
          </button>
          <button className="h-7 px-2.5 py-[7px] bg-button-secondary rounded-lg text-text-button text-xs font-medium font-albert leading-[14.40px]">
            Next &gt;
          </button>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="relative">
          <button className="flex text-text-primary rounded-md items-center justify-center">
            <FiFilter className="w-6 h-6" />
            <div className="badge text-center text-[4px] font-medium font-albert">
              50
            </div>
          </button>
        </div>
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          className="flex-auto h-[38px] px-2.5 py-[7px] select rounded-lg bg-background-secondary text-sm font-normal font-albert leading-[14.40px] text-text-primary"
        >
          <option value="Tableau Report">OVERVIEW</option>
          <option value="Custom Report">OVERVIEW1</option>
        </select>
        <ThemeButton className="flex-none" />
      </div>
    </>
  );
};

export default ReportController;
