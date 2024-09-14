import { SectionView } from "../../components/SectionView";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <SectionView />
      <SectionView size={"large"} />
    </div>
  );
};

export default Home;
