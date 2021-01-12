import React, { useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import { ObserverContext } from "../../../Context/InterObserver";
import { withRouter } from "react-router-dom";

// Img

import TheoryImg from "../../../../Assets/Images/theorie/theorie-lake-wide.JPG";

//UI

import ReadMoreBtn from "../../../Buttons/ReadMoreBtn";

const Theorie = ({ history }) => {
  const { theorie } = useContext(ObserverContext);
  const [isTheorieInView, setIsTheorieInView] = theorie;

  const { ref, inView } = useInView({
    /* Optional options */

    threshold: 0.7,
    trackVisibility: true,
    delay: 100,
  });

  useEffect(() => {
    if (inView) {
      setIsTheorieInView(true);
    }

    return () => {
      // Clean up

      setIsTheorieInView(false);
    };
  }, [inView, setIsTheorieInView, isTheorieInView]);

  // Handles routing to stand alone theorie page
  // using withRouter

  const handleNavigation = () => {
    history.push("/theorie");

    // Land at the top of the page

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  // Global state that control which language to render

  const { german } = useContext(ObserverContext);
  const [renderGerman] = german;

  return (
    <section id="theorie-section" ref={ref}>
      <div id="theorie-card">
        <img
          src={TheoryImg}
          className="theorie-img"
          alt={
            renderGerman
              ? "Ein fast ausgetrockneter See mit einem kleinen Motorboot."
              : "Un lac presque asséché avec un petit bateau à moteur."
          }
        ></img>
        <div id="theorie-grid-container">
          <div id="theorie-heading-box">
            <div className="mobile-heading-box">
              <div className="flex-box">
                <div className="theorie-marker"></div>
                {renderGerman ? (
                  <h2 className="h1">WARUM NACHHALTIG REISEN?</h2>
                ) : (
                  <h2 className="h1-french">POURQUOI VOYAGER DURABLE?</h2>
                )}
              </div>
            </div>
            <div className="tablet-heading-box">
              <div className="theorie-marker"></div>
              {renderGerman ? (
                <h2 className="h1">
                  WARUM NACHHALTIG
                  <br></br>REISEN?
                </h2>
              ) : (
                <h2 className="h1-french">
                  POURQUOI VOYAGER
                  <br></br>DURABLE?
                </h2>
              )}
            </div>
          </div>
        </div>
        <div id="theorie-text-area">
          {renderGerman ? (
            <h3 className="h3-regular">Theorie und Tipps</h3>
          ) : (
            <h3 className="h3-regular">Théorie et Conseils</h3>
          )}
          {renderGerman ? (
            <p className="p-main">
              In den letzten Monaten wurde in den Medien viel zum Thema Fliegen
              und Treibhausgase berichtet. Wir möchten dir hier einen kurzen
              Überblick geben, welchen Einfluss der Flugverkehr auf unsere
              Umwelt hat, wie die momentane politische, wirtschaftliche und
              gesellschaftliche Situation aussieht und was du tatsächlich
              unternehmen kannst, um deinen Fussabdruck auf Reisen aktiv zu
              reduzieren.
            </p>
          ) : (
            <p className="p-main">
              Nous entendons parler du trafic aérien et de son impact sur le
              climat dans les médias. Mais qu’en estil vraiment? Dans un premier
              temps, il s’agit d’illustrer cette relation via un scénario
              pessimiste, puis de constater la situation politique, économique
              et sociale actuelle, avant de mettre en valeur grâce à une
              approche positive, les actions que chacun peut entreprendre pour
              réduire activement l’impact carbone de son voyage.
            </p>
          )}
          <ReadMoreBtn
            handleNavigation={handleNavigation}
            label={renderGerman ? "Weiterlesen" : "Continuer"}
            style={{
              backgroundColor: "#2f5a5f",
              letterSpacing: "0.07rem",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default withRouter(Theorie);
