import React, { useState, useEffect } from "react";

const BackUpBtn = ({ setBackBtnClass, backUpBtnClass }) => {
  // Get the scroll position so we can display upBtn at the appropriate time

  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  useEffect(() => {
    const handleBackUpBtn = () => {
      setScrollPosition(window.scrollY);

      if (scrollPosition < 1460) {
        setBackBtnClass("back-up-btn-unactive");
      } else if (scrollPosition > 1460) {
        setBackBtnClass("back-up-btn-active");
      }
    };

    window.onscroll = function () {
      handleBackUpBtn();
    };
  });

  // Handle scroll to top

  const scrollToTop = () => {
    const scrollAnchor = document.querySelector("#root");
    scrollAnchor.scrollIntoView({
      behavior: "smooth",
      block: "start",
      alignToTop: true,
    });
  };

  return (
    <button className={backUpBtnClass} onClick={() => scrollToTop()}>
      <div id="up-arrow-icon" />
    </button>
  );
};

export default BackUpBtn;
