import React, { useEffect, useContext } from "react";
import ReasonsCarousel from "../../../Carousels/Home/Reasons/ReasonsBrainCarousel";
import { useInView } from "react-intersection-observer";
import { ObserverContext } from "../../../Context/InterObserver";

const Reasons = () => {
  const { reasons } = useContext(ObserverContext);
  const [isReasonsInView, setIsReasonsInView] = reasons;

  const { ref, inView } = useInView({
    /* Optional options */

    threshold: 0.9,
    trackVisibility: true,
    delay: 100,
  });

  useEffect(() => {
    if (inView) {
      setIsReasonsInView(true);
    }

    return () => {
      // Clean up

      setIsReasonsInView(false);
    };
  }, [inView, setIsReasonsInView, isReasonsInView]);

  // Global state that control which language to render

  const { german } = useContext(ObserverContext);
  const [renderGerman] = german;

  return (
    <section id="reasons-section" ref={ref}>
      <div id="reasons-grid-container">
        <div id="reasons-heading-box">
          <div id="reasons-marker"></div>
          {renderGerman ? (
            <h2 className="h1">10 GUTE GRÜNDE FÜR DIE SCHWEIZ</h2>
          ) : (
            <h2 className="h1-french">10 BONNES RAISONS POUR LA SUISSE</h2>
          )}
        </div>
      </div>
      <ReasonsCarousel renderGerman={renderGerman} />
    </section>
  );
};

export default Reasons;
