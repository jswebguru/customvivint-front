import React from "react";

const QuadrantButton = ({ colors, isSelected, onClick, themeTitle }) => {
  const buttonStyle = isSelected
    ? {
        border: "2px solid var(--color-button-primary)",
        backgroundColor: colors[4],
      }
    : { backgroundColor: colors[4] };

  return (
    <div className="w-[20vw] flex flex-col gap-3 items-center justify-center">
      <button className="quadrant-button" style={buttonStyle} onClick={onClick}>
        <div className="quadrant" style={{ backgroundColor: colors[0] }}></div>
        <div className="quadrant" style={{ backgroundColor: colors[1] }}></div>
        <div className="quadrant" style={{ backgroundColor: colors[2] }}></div>
        <div className="quadrant" style={{ backgroundColor: colors[3] }}></div>
      </button>
      <div className="w-[70%] text-center text-text-primary opacity-70 text-xs font-normal font-albert leading-[13.83px]">
        {themeTitle}
      </div>
    </div>
  );
};

export default QuadrantButton;
