import React from "react";

const ReadMore = ({ label, style, handleNavigation, route }) => {
  return (
    <button
      id="read-more-btn"
      style={style}
      onClick={() => handleNavigation(route)}
    >
      {label}
    </button>
  );
};

export default ReadMore;
