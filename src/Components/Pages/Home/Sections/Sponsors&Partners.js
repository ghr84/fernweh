import React, { useContext } from "react";
import { ObserverContext } from "../../../Context/InterObserver";

// Sponsors & partners carousel

import SponsorsCarousel from "../../../Carousels/Home/Partners&Sponsors/SponsorsCarousel";
import PartnersCarousel from "../../../Carousels/Home/Partners&Sponsors/PartnersCarousel";

const Sponsors = () => {
  // Global state that control which language to render

  const { german } = useContext(ObserverContext);
  const [renderGerman] = german;

  return (
    <section id="sponsors-partners-section">
      <div id="sponsors-heading-box">
        {renderGerman ? (
          <h2 className="h1">SPONSOREN & PARTNER</h2>
        ) : (
          <h2 className="h1-french">COMMANDITAIRES & PARTENAIRES</h2>
        )}
        {renderGerman ? (
          <h3 className="h3-regular">Sponsoren</h3>
        ) : (
          <h3 className="h3-regular">Commanditaires</h3>
        )}
      </div>
      <div id="sponsors-icon-container">
        <SponsorsCarousel />
      </div>
      <div id="partners-heading-box">
        {renderGerman ? (
          <h3 className="h3-regular">Medien & Netzwerkpartner</h3>
        ) : (
          <h3 className="h3-regular">Partenaires réseau et distribution</h3>
        )}
      </div>
      <div id="partners-icon-container">
        <PartnersCarousel />
      </div>
    </section>
  );
};

export default Sponsors;
