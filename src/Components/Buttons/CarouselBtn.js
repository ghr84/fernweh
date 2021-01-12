import React from "react";
import prevIcon from "../../Assets/Icons/prev-icon.png";

const CarouselBtn = () => {
  
  return (
    <div
      className="prev-btn"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 3 + "rem",
        width: 3 + "rem",
        borderRadius: 50 + "%",
        backgroundColor: "white",
        boxShadow: "0px 0px 10px 12px #ababab2b",
      }}
    >
      <img
        src={prevIcon}
        alt="arrow icon"
        style={{
          height: 1.2 + "rem",
          color: "#353a3a",
        }}
      ></img>
    </div>
  );
};

export default CarouselBtn;
