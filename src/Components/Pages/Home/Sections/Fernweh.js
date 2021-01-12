import React, { useEffect, useContext } from "react";
import Carousel from "../../../Carousels/Home/Fernweh/FernCarousel";
import { useInView } from "react-intersection-observer";
import { ObserverContext } from "../../../Context/InterObserver";

const Fernweh = () => {
  // Is the Fernweh section inView? Change state to render styles for nav

  const { fernweh } = useContext(ObserverContext);
  const [isFernwehInView, setIsFernwehInView] = fernweh;

  const { ref, inView } = useInView({
    /* Optional options */

    threshold: 0.7,
    trackVisibility: true,
    delay: 100,
  });

  useEffect(() => {
    if (inView) {
      setIsFernwehInView(true);
    }

    return () => {
      // Clean up

      setIsFernwehInView(false);
    };
  }, [inView, setIsFernwehInView, isFernwehInView]);

  // Global state that control which language to render

  const { german } = useContext(ObserverContext);
  const [renderGerman] = german;

  return (
    <section id="fernweh-section" ref={ref}>
      <div id="fernweh-grid-container">
        <div id="fernweh-heading-box">
          <div id="fernweh-marker"></div>
          {renderGerman ? (
            <h2 className="h1">FERNWEH</h2>
          ) : (
            <h2 className="h1-french">VACANCES DURABLES</h2>
          )}
        </div>
      </div>
      <div id="fernweh-cards-container">
        <Carousel renderGerman={renderGerman} />
      </div>
    </section>
  );
};

export default Fernweh;
