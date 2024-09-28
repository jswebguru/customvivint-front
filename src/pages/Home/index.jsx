import { useQuery } from "react-query";
import FloatingButton from "../../components/FloatingButton";
import apiClient from "../../lib/api-client";
import {
  SectionViewColumn,
  SectionViewReport,
  SectionViewRow,
} from "../../components/SectionView";

const Home = () => {
  const { data, isLoading, isError, error } = useQuery("todos", fetchHomeData, {
    retry: false, // Disable retrying on failure
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <div>
      <div className="flex flex-col h-screen py-6 gap-4">
        <SectionViewRow
          title="Fvorites"
          buttonTitle="Edit"
          content={data ? data.favourites : []}
        />
        <SectionViewRow
          title="Competitions"
          buttonTitle="View All"
          size="large"
          content={data ? data.favourites : []}
        />
        <SectionViewColumn
          title="Trending"
          content={data ? data.trendings : []}
        />
        <SectionViewReport title="Production Report" />
        <SectionViewReport title="Report #2" />
      </div>
      <FloatingButton />
    </div>
  );
};

const fetchHomeData = async () => {
  try {
    const response = await apiClient.get("/user/get_user", {
      headers: {
        accept: "application/json",
        email: "t.sokac89@gmail.com",
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching home data:", error);
    throw new Error("Network response was not ok");
  }
};

export default Home;
