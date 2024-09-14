const SectionViewHeader = ({ title = "Favorites" }) => {
  return (
    <div className="flex justify-between items-center p-2 bg-black text-white">
      <h1 className="text-base font-bold">{title}</h1>
      <button className="text-yellow-500 hover:text-yellow-300 focus:outline-none text-sm pr-4">
        Edit
      </button>
    </div>
  );
};

export default SectionViewHeader;
