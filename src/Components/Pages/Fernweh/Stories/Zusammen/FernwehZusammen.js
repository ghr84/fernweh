import React, { useContext } from "react";
import { ObserverContext } from "../../../../Context/InterObserver";

// Img's

import Map from "../../../../../Assets/Images/pictures Sandrine/190116_lageplan_3SEEN_web.png";
import MapFR from "../../../../../Assets/Images/pictures Sandrine/201211_lageplan_3SEEN_web_f.png";

// Carousel

import ZusammenCarousel from "../../../../Carousels/FernwehStories/Zusammen/ZusammenCarousel";

// Text DE / FR

import ZusammenText from "./Utilities/ZusammenText";

const FernwehZusammen = () => {
  // Global state to handle language

  const { german } = useContext(ObserverContext);
  const [renderGerman] = german;

  return (
    <div className="fernweh-story">
      <section className="fernweh-intro">
        <div
          className="fernweh-intro-img-zusammen"
          role="img"
          alt={
            renderGerman
              ? ZusammenText.ZusammenTextDE.intro.alt
              : ZusammenText.ZusammenTextFR.intro.altFR
          }
        ></div>
        <div className="fernweh-text-box">
          <h3 className="h4">
            {renderGerman
              ? ZusammenText.ZusammenTextDE.intro.h4
              : ZusammenText.ZusammenTextFR.intro.h4}
          </h3>
          <h2 className="h1" style={{ color: " #626e8b" }}>
            {renderGerman
              ? ZusammenText.ZusammenTextDE.intro.h1
              : ZusammenText.ZusammenTextFR.intro.h1}
          </h2>
          <p className="p-main">
            {renderGerman
              ? ZusammenText.ZusammenTextDE.intro.p
              : ZusammenText.ZusammenTextFR.intro.p}
          </p>
        </div>
      </section>
      <section className="fernweh-main">
        <div className="fernweh-story-content">
          <div className="text-img-box">
            <div className="fernweh-text-box">
              <h3 className="h4">
                {renderGerman
                  ? ZusammenText.ZusammenTextDE.paraGraphOne.h4
                  : ZusammenText.ZusammenTextFR.paraGraphOne.h4}
              </h3>
              <h2 className="h1" style={{ color: " #626e8b" }}>
                {renderGerman
                  ? ZusammenText.ZusammenTextDE.paraGraphOne.h1
                  : ZusammenText.ZusammenTextFR.paraGraphOne.h1}
              </h2>
              <p className="p-main">
                {renderGerman
                  ? ZusammenText.ZusammenTextDE.paraGraphOne.partOne
                  : ZusammenText.ZusammenTextFR.paraGraphOne.partOne}
              </p>
              <br></br>
              <p className="p-main">
                {renderGerman
                  ? ZusammenText.ZusammenTextDE.paraGraphOne.partTwo
                  : ZusammenText.ZusammenTextFR.paraGraphOne.partTwo}
              </p>
            </div>
            <div className="image-container">
              <div
                className="zusammen-img-tukTuk"
                role="img"
                alt={
                  renderGerman
                    ? ZusammenText.ZusammenTextDE.paraGraphOne.alt
                    : ZusammenText.ZusammenTextFR.paraGraphOne.altFR
                }
              ></div>
              <div className="img-text-box">
                <span className="p-scndry">
                  {renderGerman
                    ? ZusammenText.ZusammenTextDE.imgTxtBoxOne.p
                    : ZusammenText.ZusammenTextFR.imgTxtBoxOne.p}
                </span>
              </div>
            </div>
          </div>

          <div className="text-img-box-two">
            {/* For smaller then 1000px width -- Display first half of paragraph above img  */}

            <div className="fernweh-text-box zusammen-text-mobile">
              <p className="p-main">
                {renderGerman
                  ? ZusammenText.ZusammenTextDE.paraGraphOne.partThree
                  : ZusammenText.ZusammenTextFR.paraGraphOne.partThree}
              </p>
            </div>

            {/* For 1000px width -- Display paragraph as one in desktop  */}

            <div className="zusammen-text-desktop">
              <p className="p-main">
                {renderGerman
                  ? ZusammenText.ZusammenTextDE.paraGraphOne.partThree
                  : ZusammenText.ZusammenTextFR.paraGraphOne.partThree}
              </p>
              <h2 className="h1" style={{ color: " #626e8b" }}>
                {renderGerman
                  ? ZusammenText.ZusammenTextDE.paraGraphTwo.h1
                  : ZusammenText.ZusammenTextFR.paraGraphTwo.h1}
              </h2>
              <p className="p-main">
                {renderGerman
                  ? ZusammenText.ZusammenTextDE.paraGraphTwo.p
                  : ZusammenText.ZusammenTextFR.paraGraphTwo.p}
              </p>
            </div>

            {/* Image */}

            <div className="image-container">
              <div
                className="zusammen-img-kid"
                role="img"
                alt={
                  renderGerman
                    ? ZusammenText.ZusammenTextDE.paraGraphTwo.alt
                    : ZusammenText.ZusammenTextFR.paraGraphTwo.altFR
                }
              ></div>
              <div className="img-text-box">
                <span className="p-scndry">
                  {renderGerman
                    ? ZusammenText.ZusammenTextDE.imgTxtBoxTwo.p
                    : ZusammenText.ZusammenTextFR.imgTxtBoxTwo.p}
                </span>
              </div>
            </div>

            {/* For smaller then 1000px width -- Display scnd half of paragraph below img  */}

            <div className="fernweh-text-box-two zusammen-text-mobile">
              <h2 className="h1" style={{ color: " #626e8b" }}>
                {renderGerman
                  ? ZusammenText.ZusammenTextDE.paraGraphTwo.h1
                  : ZusammenText.ZusammenTextFR.paraGraphTwo.h1}
              </h2>
              <p className="p-main">
                {renderGerman
                  ? ZusammenText.ZusammenTextDE.paraGraphTwo.p
                  : ZusammenText.ZusammenTextFR.paraGraphTwo.p}
              </p>
            </div>
          </div>
        </div>
        <div className="co2-info-box" style={{ backgroundColor: "#626E8B" }}>
          <h3 className="h4" style={{ color: "#192134", fontSize: 24 }}>
            {renderGerman
              ? ZusammenText.ZusammenTextDE.infoBox.h4
              : ZusammenText.ZusammenTextFR.infoBox.h4}
            <span className="source-asterik">*</span>
          </h3>
          <h2 className="h1" style={{ color: "#CFD5E2" }}>
            {renderGerman
              ? ZusammenText.ZusammenTextDE.infoBox.h1
              : ZusammenText.ZusammenTextFR.infoBox.h1}
          </h2>
          <p className="p-main" style={{ color: "#FFFFFF" }}>
            {renderGerman
              ? ZusammenText.ZusammenTextDE.infoBox.p
              : ZusammenText.ZusammenTextFR.infoBox.p}
          </p>
          <br></br>
          <span
            className="p-main"
            style={{ color: "#F0FDFF", fontWeight: "bold" }}
          >
            <a
              className="fernweh-email"
              href="mailto: sandrine@fernweh-schweiz.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              sandrine@fernweh-schweiz.ch
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
            <div className="travel-banner-zusammen">
              <div
                className="travel-banner-text-box"
                style={
                  renderGerman
                    ? ZusammenText.ZusammenTextDE.headingBox.boxStyle
                    : ZusammenText.ZusammenTextFR.headingBox.boxStyle
                }
              >
                <h2 className="h1" style={{ color: "#b1bacc" }}>
                  {renderGerman
                    ? ZusammenText.ZusammenTextDE.headingBox.title
                    : ZusammenText.ZusammenTextFR.headingBox.title}
                </h2>
                <h3 className="h4" style={{ color: "#ffff", fontSize: 24 }}>
                  {renderGerman
                    ? ZusammenText.ZusammenTextDE.headingBox.location
                    : ZusammenText.ZusammenTextFR.headingBox.location}
                </h3>
              </div>
            </div>
            <div className="travel-map">
              <img
                src={renderGerman ? Map : MapFR}
                alt={
                  renderGerman
                    ? ZusammenText.ZusammenTextDE.mapAltTxt
                    : ZusammenText.ZusammenTextFR.mapAltTxtFR
                }
              />
            </div>
          </div>
          <ZusammenCarousel renderGerman={renderGerman} />
        </div>
      </section>
    </div>
  );
};

export default FernwehZusammen;
