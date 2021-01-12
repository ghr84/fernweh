import React, { useContext } from "react";
import { ObserverContext } from "../../../../Context/InterObserver";

import Map from "../../../../../Assets/Images/pictures Jessica/190117_lageplan_DOUBS_web.png";
import MapFR from "../../../../../Assets/Images/pictures Jessica/201211_lageplan_DOUBS_web_f.png";

// Mal Anders Carousel

import MalAndersCarousel from "../../../../Carousels/FernwehStories/Mal Anders/MalAndersCarousel";

// Text DE / FR

import MalAndersText from "./Utilities/MalAndersText";

const FernwehMalAnders = () => {
  // Global state to handle language

  const { german } = useContext(ObserverContext);
  const [renderGerman] = german;

  return (
    <div className="fernweh-story">
      <section className="fernweh-intro">
        <div
          className="fernweh-intro-img-malAnders"
          role="img"
          alt={
            renderGerman
              ? MalAndersText.MalAndersTextDE.intro.alt
              : MalAndersText.MalAndersTextFR.intro.altFR
          }
        ></div>
        <div className="fernweh-text-box mal-anders-intro-text">
          <h3 className="h4">
            {renderGerman
              ? MalAndersText.MalAndersTextDE.intro.h4
              : MalAndersText.MalAndersTextFR.intro.h4}
          </h3>
          <h2 className="h1" style={{ color: "#c18b7c" }}>
            {renderGerman
              ? MalAndersText.MalAndersTextDE.intro.h1
              : MalAndersText.MalAndersTextFR.intro.h1}
          </h2>
          <p className="p-main">
            {renderGerman
              ? MalAndersText.MalAndersTextDE.intro.p
              : MalAndersText.MalAndersTextFR.intro.p}
          </p>
        </div>
      </section>
      <section className="fernweh-main">
        <div className="fernweh-story-content">
          <div className="text-img-box">
            <div className="fernweh-text-box">
              <h3 className="h4">
                {renderGerman
                  ? MalAndersText.MalAndersTextDE.paragraphOne.h4
                  : MalAndersText.MalAndersTextFR.paragraphOne.h4}
              </h3>
              <h2 className="h1" style={{ color: "#c18b7c" }}>
                {renderGerman
                  ? MalAndersText.MalAndersTextDE.paragraphOne.h1
                  : MalAndersText.MalAndersTextFR.paragraphOne.h1}
              </h2>
              <p className="p-main">
                {renderGerman
                  ? MalAndersText.MalAndersTextDE.paragraphOne.p
                  : MalAndersText.MalAndersTextFR.paragraphOne.p}
              </p>
            </div>
            <div className="image-container">
              <div
                className="malAnders-img-woodHouse"
                role="img"
                alt={
                  renderGerman
                    ? MalAndersText.MalAndersTextDE.paragraphOne.alt
                    : MalAndersText.MalAndersTextFR.paragraphOne.altFR
                }
              ></div>
              <div
                className="malAnders-img-text-box"
                style={{ backgroundColor: "#c18b7c" }}
              >
                <span className="p-scndry">
                  {renderGerman
                    ? MalAndersText.MalAndersTextDE.imgTxtBox
                    : MalAndersText.MalAndersTextFR.imgTxtBox}
                </span>
              </div>
            </div>
          </div>
          <div className="text-img-box-two">
            <div className="fernweh-text-box">
              <h2 className="h1" style={{ color: "#c18b7c" }}>
                {renderGerman
                  ? MalAndersText.MalAndersTextDE.paragraphTwo.h1
                  : MalAndersText.MalAndersTextFR.paragraphTwo.h1}
              </h2>
              <p className="p-main">
                {renderGerman
                  ? MalAndersText.MalAndersTextDE.paragraphTwo.p
                  : MalAndersText.MalAndersTextFR.paragraphTwo.p}
              </p>
            </div>
            <div className="image-container">
              <div
                className="malAnders-img-tent"
                role="img"
                alt={
                  renderGerman
                    ? MalAndersText.MalAndersTextDE.paragraphTwo.alt
                    : MalAndersText.MalAndersTextFR.paragraphTwo.altFR
                }
              ></div>
              <div
                className="malAnders-img-text-box"
                style={{ backgroundColor: "#c18b7c" }}
              >
                <span className="p-scndry">
                  {renderGerman
                    ? MalAndersText.MalAndersTextDE.imgTxtBox
                    : MalAndersText.MalAndersTextFR.imgTxtBox}
                </span>
              </div>
            </div>
          </div>
          <div className="text-img-box text-img-box-malAnders">
            <div className="fernweh-text-box">
              <h3 className="h4">
                {renderGerman
                  ? MalAndersText.MalAndersTextDE.paragraphThree.h4
                  : MalAndersText.MalAndersTextFR.paragraphThree.h4}
              </h3>
              <h2 className="h1" style={{ color: "#c18b7c" }}>
                {renderGerman
                  ? MalAndersText.MalAndersTextDE.paragraphThree.h1
                  : MalAndersText.MalAndersTextFR.paragraphThree.h1}
                <br></br>St. Ursanne
              </h2>

              <p className="p-main">
                {renderGerman
                  ? MalAndersText.MalAndersTextDE.paragraphThree.p
                  : MalAndersText.MalAndersTextFR.paragraphThree.p}
              </p>
            </div>
            <div className="image-container">
              <div
                className="malAnders-img-river"
                role="img"
                alt={
                  renderGerman
                    ? MalAndersText.MalAndersTextDE.paragraphThree.alt
                    : MalAndersText.MalAndersTextFR.paragraphThree.altFR
                }
              ></div>
            </div>
          </div>
        </div>
        <div className="co2-info-box" style={{ backgroundColor: "#C18B7B" }}>
          <h3 className="h4" style={{ color: "#5C3023", fontSize: 24 }}>
            {renderGerman
              ? MalAndersText.MalAndersTextDE.co2box.h4
              : MalAndersText.MalAndersTextFR.co2box.h4}
            <span className="source-asterik">*</span>
          </h3>
          <h2 className="h1" style={{ color: "#f9d9d0" }}>
            {renderGerman
              ? MalAndersText.MalAndersTextDE.co2box.h1
              : MalAndersText.MalAndersTextFR.co2box.h1}
          </h2>
          <p className="p-main" style={{ color: "#FFFF" }}>
            {renderGerman
              ? MalAndersText.MalAndersTextDE.co2box.p
              : MalAndersText.MalAndersTextFR.co2box.p}
          </p>
          <br></br>
          <span
            className="p-main"
            style={{ color: "#F0FDFF", fontWeight: "bold" }}
          >
            <a
              className="fernweh-email"
              href="mailto: jessica@fernweh-schweiz.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              jessica@fernweh-schweiz.ch
            </a>
          </span>
          <div className="fernweh-stories-source-box">
            <a
              className="source-links"
              href="http://co2.myclimate.org/de/offset_further_emissions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>*</b> Quelle (S. 8/10/12/14) : Alle aufgeführten Zahlen im
              Destinationenvergleich wurden mit Hilfe von
            </a>
            <a
              className="source-links"
              href="http://www.mobitool.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b> mobitool.ch</b>
            </a>
            <a
              className="source-links"
              href="http://www.swissplanner.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              , <b>swissplanner.ch</b>
            </a>
            <span className="source-txt">, dem BAFU</span>
            <a
              className="source-links"
              href="http://www.www.kbob.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              , <b>www.kbob.ch</b>
            </a>
            <a
              className="source-links"
              href="http://www.wendezeit.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              , <b>wendezeit.ch</b>
            </a>
            <a
              className="source-links"
              href="http://www.larevuedurable.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              , <b>larevuedurable.com</b>
            </a>
            <a
              className="source-links"
              href="http://blog.atairbnb.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              , <b>blog.atairbnb.com </b>
            </a>
            <span className="source-txt">und</span>
            <a
              className="source-links"
              href="http://www.myclimate.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b> myclimate.org </b>
            </a>
            <span className="source-txt">
              berechnet. Die Zahlen gelten pro Person. Darin enthalten sind
              Transport, Unterkunft und Verpflegung.
            </span>
          </div>
        </div>

        <div className="travel-tips-wrapper">
          <div className="travel-tips-intro">
            <div className="travel-banner-malAnders">
              <div className="malAnders-travel-banner-text-box">
                <h2 className="h1" style={{ color: "#b1bacc" }}>
                  {renderGerman
                    ? MalAndersText.MalAndersTextDE.headingBox.title
                    : MalAndersText.MalAndersTextFR.headingBox.title}
                </h2>
                <h3 className="h4" style={{ color: "#ffff", fontSize: 24 }}>
                  {renderGerman
                    ? MalAndersText.MalAndersTextDE.headingBox.location
                    : MalAndersText.MalAndersTextFR.headingBox.location}
                </h3>
              </div>
            </div>
            <div className="travel-map">
              <img
                src={renderGerman ? Map : MapFR}
                alt="Eine Karte von Naturpark Doubs."
              />
            </div>
          </div>
          <MalAndersCarousel renderGerman={renderGerman} />
        </div>
      </section>
    </div>
  );
};
export default FernwehMalAnders;
