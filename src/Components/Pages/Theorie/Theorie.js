import React, { useContext, useEffect, useState } from "react";
import { ObserverContext } from "../../Context/InterObserver";
import { withRouter } from "react-router-dom";

// Graph cards

import GraphCard from "../../Cards/Graph-cards/GraphCard";

// Graph cards data

import GraphCardsData from "../../Cards/Graph-cards/Utilities/GraphCardsData";

// Text

import TheorieText from "./TheorieText";

const Theorie = ({ history }) => {
  // Global state that handles nav underscore for theorie

  const { theorie } = useContext(ObserverContext);
  const [isTheorieInView, setIsTheorieInView] = theorie;

  useEffect(() => {
    if (history.location.pathname === "/theorie") {
      setIsTheorieInView(true);
    }

    return () => {
      // Clean up
      setIsTheorieInView(false);
    };
  }, [setIsTheorieInView, isTheorieInView, history.location.pathname]);

  // Global state to handle language

  const { german } = useContext(ObserverContext);
  const [renderGerman] = german;

  // Info banner two, handle list items

  const [listItems, setListItems] = useState({
    firstFiveDe: [],
    secondFiveDe: [],
    firstFiveFr: [],
    secondFiveFr: [],
  });

  useEffect(() => {
    const listItemsArrayDe = Object.values(
      TheorieText.TheorieTextDe.infoBannerTwo.listItems
    );
    const listItemsArrayFr = Object.values(
      TheorieText.TheorieTextFr.infoBannerTwo.listItems
    );
    setListItems({
      firstFiveDe: listItemsArrayDe.slice(0, 5),
      secondFiveDe: listItemsArrayDe.slice(5, 10),
      firstFiveFr: listItemsArrayFr.slice(0, 5),
      secondFiveFr: listItemsArrayFr.slice(5, 10),
    });
  }, [setListItems]);

  return (
    <div id="theorie-page-wrapper">
      <div className="theorie-page-intro">
        <div className="theorie-page-text-box">
          <h2 className="h1">
            {renderGerman
              ? TheorieText.TheorieTextDe.intro.h1
              : TheorieText.TheorieTextFr.intro.h1}
          </h2>
          <h3 className="h3-regular">
            {renderGerman
              ? TheorieText.TheorieTextDe.intro.h3
              : TheorieText.TheorieTextFr.intro.h3}
          </h3>
          <p className="p-main">
            {renderGerman
              ? TheorieText.TheorieTextDe.intro.p_main
              : TheorieText.TheorieTextFr.intro.p_main}
          </p>
        </div>
        <div
          className="theorie-page-intro-img"
          role="img"
          alt={
            renderGerman
              ? TheorieText.TheorieTextDe.intro.alt
              : TheorieText.TheorieTextFr.intro.altFR
          }
        ></div>
      </div>

      {/* Paragraph One desktop layout */}

      <div className="theorie-page-text theorie-text-desktop">
        <div className="heading-paragraph-box">
          <h2 className="h2">
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphOneDesktop.h2
              : TheorieText.TheorieTextFr.paraGraphOneDesktop.h2}
          </h2>
          <p className="p-main">
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphOneDesktop.textOne
              : TheorieText.TheorieTextFr.paraGraphOneDesktop.textOne}
          </p>
        </div>
        <div
          className="paragraph-box paragraph-box-fr"
          style={
            renderGerman
              ? TheorieText.TheorieTextDe.paraGraphOneDesktop.textGerMargin
              : TheorieText.TheorieTextFr.paraGraphOneDesktoptextFrMargin
          }
        >
          <p className="p-main">
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphOneDesktop.textOne_Two
              : TheorieText.TheorieTextFr.paraGraphOneDesktop.textOne_Two}
          </p>
          <p className="p-main">
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphOneDesktop.textThree
              : TheorieText.TheorieTextFr.paraGraphOneDesktop.textThree}
          </p>
        </div>
      </div>

      {/* Paragraph One mobile layout */}

      <div className="theorie-page-text theorie-text-mobile">
        <div className="heading-paragraph-box">
          <h2 className="h2">
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphOneDesktop.h2
              : TheorieText.TheorieTextFr.paraGraphOneDesktop.h2}
          </h2>
          <p className="p-main">
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphOneMobile.textOne
              : TheorieText.TheorieTextFr.paraGraphOneMobile.textOne}
          </p>
        </div>
        <div className="paragraph-box">
          <p className="p-main">
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphOneMobile.textTwo
              : TheorieText.TheorieTextFr.paraGraphOneMobile.textTwo}
          </p>
        </div>
      </div>

      <div
        className="info-banner"
        style={{
          backgroundColor: "#626E8B",
        }}
      >
        <div className="banner-wrapper">
          <div className="headline-box">
            <h2
              className="h2"
              style={{
                color: "#2F3646",
              }}
            >
              {renderGerman
                ? TheorieText.TheorieTextDe.infoBannerOneMobile.h2
                : TheorieText.TheorieTextFr.infoBannerOneMobile.h2}
            </h2>
            <h3
              className="h3-regular"
              style={{
                color: "#D0D7E8",
              }}
            >
              {renderGerman
                ? TheorieText.TheorieTextDe.infoBannerOneMobile.h3
                : TheorieText.TheorieTextFr.infoBannerOneMobile.h3}
            </h3>
          </div>

          {/* Info banner text box Desktop */}

          <div className="text-box text-box-mobile">
            <p className="p-main">
              {renderGerman
                ? TheorieText.TheorieTextDe.infoBannerOneMobile.paragraphOne
                : TheorieText.TheorieTextFr.infoBannerOneMobile.paragraphOne}
            </p>
          </div>

          {/* Info banner text box Desktop */}

          <div className="text-box text-box-desktop">
            <p className="p-main">
              {renderGerman
                ? TheorieText.TheorieTextDe.infoBannerOneDesktop
                    .paragraphPartOne
                : TheorieText.TheorieTextFr.infoBannerOneDesktop
                    .paragraphPartOne}
            </p>
            <p className="p-main">
              {renderGerman
                ? TheorieText.TheorieTextDe.infoBannerOneDesktop
                    .paragraphPartTwo
                : TheorieText.TheorieTextFr.infoBannerOneDesktop
                    .paragraphPartTwo}
            </p>
          </div>
        </div>
      </div>

      {/* Paragraph Two Mobile layout */}

      <div className="theorie-page-text theorie-text-mobile">
        <div className="heading-paragraph-box">
          <h2 className="h2">
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphTwo.h2
              : TheorieText.TheorieTextFr.paraGraphTwo.h2}
          </h2>
          <p className="p-main">
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphTwo.textOne
              : TheorieText.TheorieTextFr.paraGraphTwo.textOne}
          </p>
        </div>
        <GraphCard
          props={
            renderGerman
              ? GraphCardsData.PassengersCardDe
              : GraphCardsData.PassengersCardFr
          }
        />
      </div>
      <div className="theorie-page-text theorie-text-mobile">
        <div className="paragraph-box">
          <p className="p-main">
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphTwo.textTwo
              : TheorieText.TheorieTextFr.paraGraphTwo.textTwo}

            <br></br>
            <br></br>
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphTwo.textThree
              : TheorieText.TheorieTextFr.paraGraphTwo.textThree}
          </p>
        </div>
        <GraphCard
          props={
            renderGerman
              ? GraphCardsData.CarbonCardDe
              : GraphCardsData.CarbonCardFr
          }
        />
      </div>

      {/* Paragraph Two Desktop layout */}

      <div className="theorie-page-text theorie-text-desktop">
        <div className="heading-paragraph-box">
          <h2 className="h2">
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphTwo.h2
              : TheorieText.TheorieTextFr.paraGraphTwo.h2}
          </h2>
          <p className="p-main">
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphTwo.textOne
              : TheorieText.TheorieTextFr.paraGraphTwo.textOne}
          </p>
          <p className="p-main">
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphTwo.textTwo
              : TheorieText.TheorieTextFr.paraGraphTwo.textTwo}
            <br></br>
            <br></br>
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphTwo.textThree
              : TheorieText.TheorieTextFr.paraGraphTwo.textThree}
          </p>
        </div>
        <div>
          <GraphCard
            props={
              renderGerman
                ? GraphCardsData.PassengersCardDe
                : GraphCardsData.PassengersCardFr
            }
          />
          <GraphCard
            props={
              renderGerman
                ? GraphCardsData.CarbonCardDe
                : GraphCardsData.CarbonCardFr
            }
          />
        </div>
      </div>

      {/* Paragraph Three */}

      <div className="theorie-page-text">
        <div className="heading-paragraph-box">
          <h2 className="h2">
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphThree.h2
              : TheorieText.TheorieTextFr.paraGraphThree.h2}
          </h2>
          <p className="p-main">
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphThree.textOne
              : TheorieText.TheorieTextFr.paraGraphThree.textOne}
            <br></br>
            <br></br>
            {renderGerman
              ? ""
              : TheorieText.TheorieTextFr.paraGraphThree.textTwo}
          </p>
        </div>
        <div className="paragraph-box">
          <p className="p-main">
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphThree.textTwo
              : TheorieText.TheorieTextFr.paraGraphThree.textThree}
          </p>
        </div>
      </div>

      {/* Info Banner Two li's */}

      <div
        className="info-banner-li"
        style={{
          backgroundColor: "#7F972A",
        }}
      >
        <div className="banner-wrapper">
          <div className="headline-box">
            <h2
              className="h2"
              style={{
                color: "#374507",
              }}
            >
              {renderGerman
                ? TheorieText.TheorieTextDe.infoBannerTwo.h2
                : TheorieText.TheorieTextFr.infoBannerTwo.h2}
            </h2>
            <h3
              className="h3-regular"
              style={{
                color: "#E5FD97",
              }}
            >
              {renderGerman
                ? TheorieText.TheorieTextDe.infoBannerTwo.h3
                : TheorieText.TheorieTextFr.infoBannerTwo.h3}
            </h3>
          </div>

          <div className="text-box">
            <ul className="list-items">
              {renderGerman
                ? listItems.firstFiveDe.map((items, index) => (
                    <li className="p-main" key={index}>
                      {items}
                    </li>
                  ))
                : listItems.firstFiveFr.map((items, index) => (
                    <li className="p-main" key={index}>
                      {items}
                    </li>
                  ))}
            </ul>
            <ul className="list-items">
              {renderGerman
                ? listItems.secondFiveDe.map((items, index) => (
                    <li className="p-main" key={index}>
                      {items}
                    </li>
                  ))
                : listItems.secondFiveFr.map((items, index) => (
                    <li className="p-main" key={index}>
                      {items}
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="theorie-page-text">
        <div className="heading-paragraph-box">
          <h2 className="h2">
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphFour.h2
              : TheorieText.TheorieTextFr.paraGraphFour.h2}
          </h2>
          <p className="p-main">
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphFour.textOne
              : TheorieText.TheorieTextFr.paraGraphFour.textOne}
          </p>
          <p className="p-main">
            {renderGerman
              ? TheorieText.TheorieTextDe.paraGraphFour.textTwo
              : TheorieText.TheorieTextFr.paraGraphFour.textTwo}
            <br></br>
            <br></br>
            <span className="email-box-desktop">
              <a
                className="fernweh-link"
                href="mailto:jessica@fernweh-schweiz.ch"
                target="_blank"
                rel="noopener noreferrer"
              >
                jessica@fernweh-schweiz.ch
              </a>
            </span>
          </p>
        </div>
        <GraphCard
          props={
            renderGerman
              ? GraphCardsData.AirTrafficCardDe
              : GraphCardsData.AirTrafficCardFr
          }
        />
      </div>
      <div className="email-box">
        <a
          className="fernweh-link"
          href="mailto:jessica@fernweh-schweiz.ch"
          target="_blank"
          rel="noopener noreferrer"
        >
          jessica@fernweh-schweiz.ch
        </a>
      </div>
      <div className="sources-box">
        <span>
          <a
            className="fernweh-link"
            href="http://www.wwf.ch/de/unsere-ziele/flugverkehr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>1.</b> Quelle: WWF, <b>www.wwf.ch/de/unsere-ziele/flugverkehr</b>
          </a>
        </span>
        <span>
          <a
            className="fernweh-link"
            href="http://de.statista.com/statistik/daten/studie/291494/umfrage/anzahl-der-flugpassagiere-in-der-schweiz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>2.</b> Quelle: Statista,
            <b>
              {" "}
              de.statista.com/
              <wbr />
              statistik/
              <wbr />
              daten/
              <wbr />
              studie/
              <wbr />
              291494/
              <wbr />
              umfrage/
              <wbr />
              anzahl-der-flugpassagiere-in-der-schweiz/
            </b>
          </a>
        </span>
        <span>
          <b>3.</b> Quelle: Dr. Schubert, Markus. 2015: «Entwicklung des
          Luftverkehrs in der Schweiz bis 2030. Nachfrageprognose». Intraplan
          Consult GmbH (im Auftrag des Bundesamtes für Zivilluftfahrt [BAZL]),
          Orleansplatz 5a, D-81667 München. S. 42, S. 52.
        </span>
        <span>
          <a
            className="fernweh-link"
            href="http://co2.myclimate.org/de/offset_further_emissions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>4.</b> Quelle: MyClimate,
            <b> co2.myclimate.org/de/offset_further_emissions</b>
          </a>
        </span>
        <span>
          <a
            className="fernweh-link"
            href="http://www.mobitool.ch/de/tools/vergleichsrechner-15.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>5.</b> Quelle: Mobitool,
            <b> www.mobitool.ch/de/tools/vergleichsrechner-15.html</b>
          </a>
        </span>
      </div>
    </div>
  );
};

export default withRouter(Theorie);
