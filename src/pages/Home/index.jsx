import {
  SectionViewColumn,
  SectionViewReport,
  SectionViewRow,
} from "../../components/SectionView";

const Home = () => {
  return (
    <div className="flex flex-col h-screen py-6 gap-4">
      <SectionViewRow title="Fvorites" buttonTitle="Edit" />
      <SectionViewRow
        title="Competitions"
        buttonTitle="View All"
        size="large"
      />
      <SectionViewColumn title="Trending" />
      <SectionViewReport title="Production Report" />
      <SectionViewReport title="Report #2" />
    </div>
  );
};

export default Home;
