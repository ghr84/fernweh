import React, { useState, createContext } from "react";

const ObserverContext = createContext();

const IntersectionProvider = (props) => {
  // Update states if sections are in view and apply styles accordingly to desktop/mobile navigation

  const [isAboutUsInView, setIsAboutUsInView] = useState(false);
  const [isFernwehInView, setIsFernwehInView] = useState(false);
  const [isReasonsInView, setIsReasonsInView] = useState(false);
  const [isTheorieInView, setIsTheorieInView] = useState(false);
  const [isMediaInView, setIsMediaInView] = useState(false);
  const [isFooterInView, setIsFooterInView] = useState(false);

  // State that control which language to render

  const [renderGerman, setRenderGerman] = useState();

  return (
    <ObserverContext.Provider
      value={{
        aboutUs: [isAboutUsInView, setIsAboutUsInView],
        fernweh: [isFernwehInView, setIsFernwehInView],
        reasons: [isReasonsInView, setIsReasonsInView],
        theorie: [isTheorieInView, setIsTheorieInView],
        media: [isMediaInView, setIsMediaInView],
        footer: [isFooterInView, setIsFooterInView],
        german: [renderGerman, setRenderGerman],
      }}
    >
      {props.children}
    </ObserverContext.Provider>
  );
};

export { ObserverContext, IntersectionProvider };
