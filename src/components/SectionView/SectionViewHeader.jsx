const SectionViewHeader = ({ title = "Favorites", buttonTitle = "" }) => {
  const containButton = buttonTitle !== "";

  return (
    <div className="flex justify-between items-center px-3 bg-black text-white">
      <h1 className="grow shrink basis-0 text-white text-lg font-bold albert-sans-bold leading-snug">
        {title}
      </h1>
      {containButton ? (
        <button className="text-yellow-500 hover:text-yellow-300 focus:outline-none text-sm pr-2.5">
          {buttonTitle}
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SectionViewHeader;
