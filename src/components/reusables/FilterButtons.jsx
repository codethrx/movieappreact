import React from "react";

function FilterButtons({ buttons, dispatch }) {
  return (
    <div className="movies-filter-btns">
      {buttons.map((button) => (
        <button
          key={button.name}
          className={button?.active && "filter-btn-active"}
          onClick={() => {
            dispatch({ type: "SET_BUTTON", payload: button });
          }}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
