import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import FloatingButton from "../../components/FloatingButton";
import { useAuth } from "../../contexts/AuthContext";
import apiClient from "../../lib/api-client";
import {
  SectionViewColumn,
  SectionViewReport,
  SectionViewRow,
} from "../../components/SectionView";
import Chat from "../../components/Chat";

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { setHeaderState } = useAuth();

  useEffect(() => {
    setHeaderState({
      title: "Home",
      favoritesIcon: false,
      calendarComponent: false,
    });
  }, [setHeaderState]);

  const handleOpenChat = () => {
    if (isChatOpen) {
      document.body.style.overflow = "unset";
    } else if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
    setIsChatOpen(!isChatOpen);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    document.body.style.overflow = "unset";
  };

  const { data, isLoading, isError, error } = useQuery("todos", fetchHomeData, {
    retry: false, // Disable retrying on failure
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <div>
      <div className="flex flex-col h-screen py-6 gap-4">
        <Chat isOpen={isChatOpen} onClose={handleCloseChat} />
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
      <FloatingButton onOpenChat={handleOpenChat} />
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
