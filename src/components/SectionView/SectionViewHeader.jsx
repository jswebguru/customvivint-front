const SectionViewHeader = ({ title = "Favorites", buttonTitle = "" }) => {
  const containButton = buttonTitle !== "";

  return (
    <div className="flex justify-between items-center px-3 section-view-header">
      <h1 className="grow shrink basis-0 text-lg font-bold albert-sans-bold leading-snug">
        {title}
      </h1>
      {containButton ? (
        <button className="text-sm pr-2.5">{buttonTitle}</button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SectionViewHeader;
