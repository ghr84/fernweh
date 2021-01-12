import React, { useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import { ObserverContext } from "../../../Context/InterObserver";

// Instagram banner

import InstagramCard from "../../../Cards/InstagramCard";
import BrochureBadge from "../../../Badges/BrochureBadge";

const AboutUs = () => {
  const { aboutUs } = useContext(ObserverContext);
  const [isAboutUsInView, setIsAboutUsInView] = aboutUs;

  const { ref, inView } = useInView({
    /* Optional options */

    threshold: 0.5,
    trackVisibility: true,
    delay: 100,
  });

  useEffect(() => {
    if (inView) {
      setIsAboutUsInView(true);
    }

    return () => {
      // Clean up

      setIsAboutUsInView(false);
    };
  }, [inView, setIsAboutUsInView, isAboutUsInView]);

  // Global states that control which language to render

  const { german } = useContext(ObserverContext);
  const [renderGerman] = german;

  return (
    <div className="aboutUs-instagram-wrapper" ref={ref}>
      <section id="about-us-section">
        <div id="about-us-img-box">
          <BrochureBadge />
          <div
            id="about-us-img"
            role="img"
            alt={
              renderGerman
                ? "Vier Frauen, die nebeneinander an einem Baum stehen und lächeln."
                : "Quatre femmes debout l'une à côté de l'autre près d'un arbre et souriant."
            }
          ></div>
          <div id="about-us-img-info-box">
            {renderGerman ? (
              <span id="about-us-info-box-text">
                V.l.n.r.: Sandrine Roux, Jessica Bachmann, Julia Gsell, Adriana
                Stepanov
              </span>
            ) : (
              <span id="about-us-info-box-text">
                D.g.: Sandrine Roux, Jessica Bachmann, Julia Gsell, Adriana
                Stepanov
              </span>
            )}
          </div>
        </div>
        <div id="about-us-text">
          <div id="about-us-heading-box">
            <div id="about-us-marker" />
            {renderGerman ? (
              <h1 className="h1">
                VEREIN FERNWEH<br></br> SCHWEIZ
              </h1>
            ) : (
              <h1 className="h1-french">
                VACANCES DURABLES<br></br> EN SUISSE
              </h1>
            )}
          </div>
          {renderGerman ? (
            <p className="p-main">
              Im Rahmen unserer Ausbildung zu Umweltberaterinnen haben wir den
              Verein Fernweh Schweiz gegründet. Mit dem Ziel, Reisende zur
              Problematik des Flugverkehrs zu sensibilisieren, realisieren wir
              die erste nachhaltige Reisebroschüre für die Schweiz. Unsere
              Kernfrage für dieses Projekt lautet: Weshalb fliegen so viele
              Menschen für ein Ferienerlebnis ins Ausland? Wir sind überzeugt,
              dass es in der Schweiz für alle noch so viel zu entdecken gibt:
              Wunderschöne Natur, spannende Kultur, aufregende Begegnungen und
              wilde Abenteuer!
            </p>
          ) : (
            <p className="p-main">
              Dans le cadre de notre formation de Conseillères en environnement,
              nous avons créé l’association Fernweh Schweiz. Avec l’objectif de
              sensibiliser les voyageurs à la problématique du trafic aérien,
              nous réalisons la première brochure touristique de Suisse
              soucieuse du développement durable. La question centrale de ce
              projet se résume à: pourquoi tant de gens prennent-ils l’avion
              pour une expérience de vacances? Nous sommes convaincues, qu’il y
              a encore beaucoup à découvrir en Suisse pour chacun: une nature
              grandiose, une pléthore de lieux culturels, des recontres
              excitantes et une aventure à couper le souffle!
            </p>
          )}
        </div>
      </section>
      <InstagramCard renderGerman={renderGerman} />
    </div>
  );
};
export default AboutUs;
