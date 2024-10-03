import { useNavigate } from "react-router-dom";

const SectionViewContentReport = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-[15px] px-3 items-center">
      <div>abcd</div>
      <button
        className="bg-button-primary text-white py-2 px-4 rounded-md font-albert"
        onClick={() => navigate("/temp")}
      >
        View Full Report
      </button>
    </div>
  );
};

export default SectionViewContentReport;
