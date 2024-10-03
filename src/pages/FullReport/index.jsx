import ReportController from "../../components/ReportController";

const FullReport = () => {
  //   const [isChatOpen, setIsChatOpen] = useState(false);

  //   const handleOpenChat = () => {
  //     if (isChatOpen) {
  //       document.body.style.overflow = "unset";
  //     } else if (typeof window != "undefined" && window.document) {
  //       document.body.style.overflow = "hidden";
  //     }
  //     setIsChatOpen(!isChatOpen);
  //   };

  //   const handleCloseChat = () => {
  //     setIsChatOpen(false);
  //     document.body.style.overflow = "unset";
  //   };

  //   const { data, isLoading, isError, error } = useQuery("todos", fetchHomeData, {
  //     retry: false, // Disable retrying on failure
  //   });

  //   if (isLoading) return <div>Loading...</div>;
  //   if (isError) return <div>Error: {error.message}</div>;
  return (
    <div>
      <div className="flex flex-col h-screen py-6 px-2 gap-4">
        <ReportController />
      </div>
    </div>
  );
};

export default FullReport;
