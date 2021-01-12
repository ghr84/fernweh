import React, { useContext } from "react";
import { ObserverContext } from "../../../../Context/InterObserver";

import Map from "../../../../../Assets/Images/pictures Adriana/190113_lageplan_WINTI_web.png";
import MapFR from "../../../../../Assets/Images/pictures Adriana/201211_lageplan_WINTI_web_f.png";

// Kultur Carousel

import KulturCarousel from "../../../../Carousels/FernwehStories/Kultur/KulturCarousel";

// Text DE / FR

import KulturText from "./Utilities/KulturText";

const FernwehKultur = () => {
  // Global state to handle language

  const { german } = useContext(ObserverContext);
  const [renderGerman] = german;
  return (
    <div className="fernweh-story">
      <section className="fernweh-intro">
        <div
          className="fernweh-intro-img-kultur"
          role="img"
          alt={
            renderGerman
              ? KulturText.KulturTextDE.intro.alt
              : KulturText.KulturTextFR.intro.altFR
          }
        ></div>
        <div className="fernweh-text-box">
          <h3 className="h4">
            {renderGerman
              ? KulturText.KulturTextDE.intro.h4
              : KulturText.KulturTextFR.intro.h4}
          </h3>
          <h2 className="h1" style={{ color: "#3fadba" }}>
            {renderGerman
              ? KulturText.KulturTextDE.intro.h1
              : KulturText.KulturTextFR.intro.h1}
          </h2>
          <p className="p-main">
            {renderGerman
              ? KulturText.KulturTextDE.intro.p
              : KulturText.KulturTextFR.intro.p}
          </p>
        </div>
      </section>
      <section className="fernweh-main">
        <div className="fernweh-story-content">
          <div className="text-img-box">
            <div className="fernweh-text-box kultur-text-box">
              <h3 className="h4">
                {renderGerman
                  ? KulturText.KulturTextDE.paragraphOne.h4
                  : KulturText.KulturTextFR.paragraphOne.h4}
              </h3>
              <h2 className="h1" style={{ color: "#3fadba" }}>
                {renderGerman
                  ? KulturText.KulturTextDE.paragraphOne.h1
                  : KulturText.KulturTextFR.paragraphOne.h1}
              </h2>
              <p className="p-main">
                {renderGerman
                  ? KulturText.KulturTextDE.paragraphOne.partOne
                  : KulturText.KulturTextFR.paragraphOne.partOne}
              </p>
            </div>
            <div className="image-container">
              <div
                className="kultur-img-fridayBanner"
                role="img"
                alt={
                  renderGerman
                    ? KulturText.KulturTextDE.paragraphOne.alt
                    : KulturText.KulturTextFR.paragraphOne.altFR
                }
              ></div>
            </div>
          </div>
          <div className="text-img-box-two">
            <div className="fernweh-text-box">
              <h3 className="h4">
                {renderGerman
                  ? KulturText.KulturTextDE.paragraphTwo.h4
                  : KulturText.KulturTextFR.paragraphTwo.h4}
              </h3>
              <h2 className="h1" style={{ color: "#3fadba" }}>
                {renderGerman
                  ? KulturText.KulturTextDE.paragraphTwo.h1
                  : KulturText.KulturTextFR.paragraphTwo.h1}
              </h2>
              <p className="p-main">
                {renderGerman
                  ? KulturText.KulturTextDE.paragraphTwo.partOne
                  : KulturText.KulturTextFR.paragraphTwo.partOne}
              </p>
              <p className="p-main">
                <br></br>
                {renderGerman
                  ? KulturText.KulturTextDE.paragraphTwo.partTwo
                  : KulturText.KulturTextFR.paragraphTwo.partTwo}
              </p>
            </div>
            <div className="image-container">
              <div
                className="kultur-img-saturdayBanner"
                role="img"
                alt={
                  renderGerman
                    ? KulturText.KulturTextDE.paragraphTwo.alt
                    : KulturText.KulturTextFR.paragraphTwo.altFR
                }
              ></div>
              <div
                className="kultur-img-text-box"
                style={{ backgroundColor: "#3fadba" }}
              >
                <span className="p-scndry">
                  {renderGerman
                    ? KulturText.KulturTextDE.imgTxtBox
                    : KulturText.KulturTextFR.imgTxtBox}
                </span>
              </div>
            </div>
          </div>
          <div className="text-img-box text-img-box-kultur">
            <div className="fernweh-text-box">
              <h3 className="h4">
                {renderGerman
                  ? KulturText.KulturTextDE.paragraphThree.h4
                  : KulturText.KulturTextFR.paragraphThree.h4}
              </h3>
              <h2 className="h1" style={{ color: "#3fadba" }}>
                {renderGerman
                  ? KulturText.KulturTextDE.paragraphThree.h1
                  : KulturText.KulturTextFR.paragraphThree.h1}
              </h2>
              <p className="p-main">
                {renderGerman
                  ? KulturText.KulturTextDE.paragraphThree.partOne
                  : KulturText.KulturTextFR.paragraphThree.partOne}
              </p>
              <p className="p-main">
                <br></br>
                {renderGerman
                  ? KulturText.KulturTextDE.paragraphThree.partTwo
                  : KulturText.KulturTextFR.paragraphThree.partTwo}
              </p>
            </div>
            <div className="image-container">
              <div
                className="kultur-img-winterthurBanner"
                role="img"
                alt={
                  renderGerman
                    ? KulturText.KulturTextDE.paragraphThree.alt
                    : KulturText.KulturTextFR.paragraphThree.altFR
                }
              ></div>
            </div>
          </div>
        </div>
        <div className="co2-info-box" style={{ backgroundColor: "#3fadba" }}>
          <h3 className="h4" style={{ color: "#06454C", fontSize: 24 }}>
            {renderGerman
              ? KulturText.KulturTextDE.co2box.h4
              : KulturText.KulturTextFR.co2box.h4}
            <span className="source-asterik">*</span>
          </h3>
          <h2 className="h1" style={{ color: "#AAF6FF" }}>
            {renderGerman
              ? KulturText.KulturTextDE.co2box.h1
              : KulturText.KulturTextFR.co2box.h1}
          </h2>
          <p className="p-main" style={{ color: "#F0FDFF" }}>
            {renderGerman
              ? KulturText.KulturTextDE.co2box.p
              : KulturText.KulturTextFR.co2box.p}
          </p>
          <br></br>
          <span
            className="p-main"
            style={{ color: "#F0FDFF", fontWeight: "bold" }}
          >
            <a
              className="fernweh-email"
              href="mailto:adriana@fernweh-schweiz.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              adriana@fernweh-schweiz.ch
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
            <div className="travel-banner-kultur">
              <div className="travel-banner-text-box">
                <h2 className="h1" style={{ color: "#b1bacc" }}>
                  {renderGerman
                    ? KulturText.KulturTextDE.headingBox.title
                    : KulturText.KulturTextFR.headingBox.title}
                </h2>
                <h3 className="h4" style={{ color: "#ffff", fontSize: 24 }}>
                  {renderGerman
                    ? KulturText.KulturTextDE.headingBox.location
                    : KulturText.KulturTextFR.headingBox.location}
                </h3>
              </div>
            </div>
            <div className="travel-map">
              <img
                src={renderGerman ? Map : MapFR}
                alt="Eine Karte von Winterthur."
              />
            </div>
          </div>
          <KulturCarousel renderGerman={renderGerman} />
        </div>
      </section>
    </div>
  );
};

export default FernwehKultur;
