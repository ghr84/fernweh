import React, { useContext } from "react";
import { ObserverContext } from "../../../../Context/InterObserver";

// Img

import Map from "../../../../../Assets/Images/pictures Julia/190122_lageplan_Aletsch_web.png";
import MapFR from "../../../../../Assets/Images/pictures Julia/201211_lageplan_Aletsch_web_f.png";

// Abenteuer Carousel

import AbenteuerCarousel from "../../../../Carousels/FernwehStories/Abenteuer/AbenteuerCarousel";

// Text DE / FR

import AbenteuerText from "./Utilities/AbenteuerText";

const FernwehAbenteuer = () => {
  // Global state to handle language

  const { german } = useContext(ObserverContext);
  const [renderGerman] = german;

  return (
    <div className="fernweh-story">
      <section className="fernweh-intro">
        <div
          className="fernweh-intro-img-abenteuer"
          role="img"
          alt={
            renderGerman
              ? AbenteuerText.AbenteuerTextDE.intro.alt
              : AbenteuerText.AbenteuerTextFR.intro.altFR
          }
        ></div>
        <div className="fernweh-text-box">
          <h3 className="h4">
            {renderGerman
              ? AbenteuerText.AbenteuerTextDE.intro.h4
              : AbenteuerText.AbenteuerTextFR.intro.h4}
          </h3>
          <h2 className="h1" style={{ color: "#89a235" }}>
            {renderGerman
              ? AbenteuerText.AbenteuerTextDE.intro.h1
              : AbenteuerText.AbenteuerTextFR.intro.h1}
          </h2>
          <p className="p-main">
            {renderGerman
              ? AbenteuerText.AbenteuerTextDE.intro.p
              : AbenteuerText.AbenteuerTextFR.intro.p}
          </p>
        </div>
      </section>

      <section className="fernweh-main">
        <div className="fernweh-story-content">
          <div className="text-img-box">
            <div className="abenteuer-text-box">
              <h3 className="h4">
                {renderGerman
                  ? AbenteuerText.AbenteuerTextDE.paragraphOne.h4
                  : AbenteuerText.AbenteuerTextFR.paragraphOne.h4}
              </h3>
              <h2 className="h1" style={{ color: "#89a235" }}>
                {renderGerman
                  ? AbenteuerText.AbenteuerTextDE.paragraphOne.h1
                  : AbenteuerText.AbenteuerTextFR.paragraphOne.h1}
              </h2>
              <p className="p-main">
                {renderGerman
                  ? AbenteuerText.AbenteuerTextDE.paragraphOne.p
                  : AbenteuerText.AbenteuerTextFR.paragraphOne.p}
              </p>
            </div>
            <div className="image-container">
              <div
                className="abenteuer-img-joga"
                role="img"
                alt={
                  renderGerman
                    ? AbenteuerText.AbenteuerTextDE.paragraphOne.alt
                    : AbenteuerText.AbenteuerTextFR.paragraphOne.altFR
                }
              ></div>
              <div
                className="abenteuer-img-text-box"
                style={{ backgroundColor: "#89a235" }}
              >
                <span className="p-scndry">
                  {renderGerman
                    ? AbenteuerText.AbenteuerTextDE.imgTxtBox
                    : AbenteuerText.AbenteuerTextFR.imgTxtBox}
                </span>
              </div>
            </div>
          </div>
          <div className="text-img-box-two">
            <div className="fernweh-text-box">
              <h3 className="h4">
                {renderGerman
                  ? AbenteuerText.AbenteuerTextDE.paragraphTwo.h4
                  : AbenteuerText.AbenteuerTextFR.paragraphTwo.h4}
              </h3>
              <h2 className="h1" style={{ color: "#89a235" }}>
                {renderGerman
                  ? AbenteuerText.AbenteuerTextDE.paragraphTwo.h1
                  : AbenteuerText.AbenteuerTextFR.paragraphTwo.h1}
              </h2>
              <p className="p-main">
                {renderGerman
                  ? AbenteuerText.AbenteuerTextDE.paragraphTwo.p
                  : AbenteuerText.AbenteuerTextFR.paragraphTwo.p}
              </p>
            </div>
            <div className="image-container">
              <div
                className="abenteuer-img-landMark"
                role="img"
                alt={
                  renderGerman
                    ? AbenteuerText.AbenteuerTextDE.paragraphTwo.alt
                    : AbenteuerText.AbenteuerTextFR.paragraphTwo.altFR
                }
              ></div>
            </div>
          </div>
          <div className="text-img-box text-img-box-abenteuer">
            <div className="fernweh-text-box">
              <h3 className="h4">
                {renderGerman
                  ? AbenteuerText.AbenteuerTextDE.paragraphThree.h4
                  : AbenteuerText.AbenteuerTextFR.paragraphThree.h4}
              </h3>
              <h2 className="h1" style={{ color: "#89a235" }}>
                {renderGerman
                  ? AbenteuerText.AbenteuerTextDE.paragraphThree.h1
                  : AbenteuerText.AbenteuerTextFR.paragraphThree.h1}
              </h2>
              <p className="p-main">
                {renderGerman
                  ? AbenteuerText.AbenteuerTextDE.paragraphThree.p
                  : AbenteuerText.AbenteuerTextFR.paragraphThree.p}
              </p>
            </div>
            <div className="image-container">
              <div
                className="abenteuer-img-bridge"
                role="img"
                alt={
                  renderGerman
                    ? AbenteuerText.AbenteuerTextDE.paragraphThree.alt
                    : AbenteuerText.AbenteuerTextFR.paragraphThree.altFR
                }
              ></div>
            </div>
          </div>
        </div>
        <div className="co2-info-box" style={{ backgroundColor: "#89A235" }}>
          <h3 className="h4" style={{ color: "#3B4321", fontSize: 24 }}>
            {renderGerman
              ? AbenteuerText.AbenteuerTextDE.co2box.h4
              : AbenteuerText.AbenteuerTextFR.co2box.h4}
            <span className="source-asterik">*</span>
          </h3>
          <h2 className="h1" style={{ color: "#E6EFCC" }}>
            {renderGerman
              ? AbenteuerText.AbenteuerTextDE.co2box.h1
              : AbenteuerText.AbenteuerTextFR.co2box.h1}
          </h2>
          <p className="p-main" style={{ color: "#FFFF" }}>
            {renderGerman
              ? AbenteuerText.AbenteuerTextDE.co2box.p
              : AbenteuerText.AbenteuerTextFR.co2box.p}
          </p>
          <br></br>
          <p className="p-main" style={{ color: "#FFFF" }}>
            {renderGerman
              ? AbenteuerText.AbenteuerTextDE.co2box.p
              : AbenteuerText.AbenteuerTextFR.co2box.p}
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
              julia@fernweh-schweiz.ch
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
            <div className="travel-banner-abenteuer">
              <div
                className="abenteuer-travel-banner-text-box"
                style={
                  renderGerman
                    ? AbenteuerText.AbenteuerTextDE.headingBox.boxStyle
                    : AbenteuerText.AbenteuerTextFR.headingBox.boxStyle
                }
              >
                <h2 className="h1" style={{ color: "#b1bacc" }}>
                  {renderGerman
                    ? AbenteuerText.AbenteuerTextDE.headingBox.title
                    : AbenteuerText.AbenteuerTextFR.headingBox.title}
                </h2>
                <h3 className="h4" style={{ color: "#ffff", fontSize: 24 }}>
                  {renderGerman
                    ? AbenteuerText.AbenteuerTextDE.headingBox.location
                    : AbenteuerText.AbenteuerTextFR.headingBox.location}
                </h3>
              </div>
            </div>
            <div className="travel-map">
              <img
                src={renderGerman ? Map : MapFR}
                alt={
                  renderGerman
                    ? AbenteuerText.AbenteuerTextDE.mapAltTxt
                    : AbenteuerText.AbenteuerTextFR.mapAltTxtFR
                }
              />
            </div>
          </div>
          <AbenteuerCarousel renderGerman={renderGerman} />
        </div>
      </section>
    </div>
  );
};

export default FernwehAbenteuer;
