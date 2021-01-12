import React, { useContext, useEffect } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { withRouter } from "react-router-dom";

// Context

import { ObserverContext } from "../Context/InterObserver";

// Img

import logo from "../../Assets/Logos/fernweh-logo56x56.png";

const Header = ({ handleBurgerMenu, history, setBackBtnClass }) => {
  // Use intersection observer to render underscore when section is in view

  const { aboutUs } = useContext(ObserverContext);
  const [isAboutUsInView] = aboutUs;

  const { fernweh } = useContext(ObserverContext);
  const [isFernwehInView] = fernweh;

  const { reasons } = useContext(ObserverContext);
  const [isReasonsInView] = reasons;

  const { theorie } = useContext(ObserverContext);
  const [isTheorieInView] = theorie;

  const { media } = useContext(ObserverContext);
  const [isMediaInView] = media;

  // Global state that control which language to render

  const { german } = useContext(ObserverContext);
  const [renderGerman, setRenderGerman] = german;

  // Handle navigation to home page

  const goHome = (route) => {
    history.push(route);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    setBackBtnClass("back-up-btn-unactive");
  };

  // Handle language

  useEffect(() => {
    if (localStorage.length === 0 || undefined) {
      localStorage.setItem("useGerman", JSON.stringify(true));
    }
  });

  useEffect(() => {
    const localStore = localStorage.getItem("useGerman");
    const parsedData = JSON.parse(localStore);
    setRenderGerman(parsedData);
  });

  const handleLanguage = () => {
    localStorage.setItem("useGerman", !renderGerman);
    handleGlobalLangState();
  };

  const handleGlobalLangState = () => {
    setRenderGerman(!renderGerman);
  };

  return (
    <div id="header">
      <img
        src={logo}
        className="logo"
        alt="Fernweh Schweiz logo"
        onClick={() => goHome("/")}
      />
      <nav id="mobile-nav">
        <div id="burger-menu-icon" onClick={() => handleBurgerMenu()}>
          <div className="burger-div"></div>
          <div className="burger-div"></div>
        </div>
      </nav>

      {/* Desktop Nav */}

      <nav id="desktop-nav">
        <NavLink
          exact
          to="/#about-us-section"
          className="nav-links"
          aria-current="page"
          scroll={(el) =>
            el.scrollIntoView({
              behavior: "smooth",
              block: "start",
              alignToTop: true,
            })
          }
        >
          {renderGerman ? <span>VEREIN</span> : <span>ASSOCIATION</span>}
          {isAboutUsInView ? (
            <div
              className={
                renderGerman
                  ? "aboutUs-german-underScore-active"
                  : "aboutUs-french-underScore-active"
              }
            ></div>
          ) : (
            <div
              className={
                renderGerman
                  ? "aboutUs-german-underScore-unactive"
                  : "aboutUs-french-underScore-unactive"
              }
            ></div>
          )}
        </NavLink>
        <NavLink
          exact
          to="/#fernweh-section"
          className="nav-links"
          aria-current="page"
          scroll={(el) =>
            el.scrollIntoView({
              behavior: "smooth",
              block: "start",
              alignToTop: true,
            })
          }
        >
          {renderGerman ? <span>FERNWEH</span> : <span>VACANCES DURABLES</span>}

          {isFernwehInView ? (
            <div
              className={
                renderGerman
                  ? "fernweh-german-underScore-active"
                  : "fernweh-french-underScore-active"
              }
            ></div>
          ) : (
            <div
              className={
                renderGerman
                  ? "fernweh-german-underScore-unactive"
                  : "fernweh-french-underScore-unactive"
              }
            ></div>
          )}
        </NavLink>
        <NavLink
          exact
          to="/#reasons-section"
          className="nav-links"
          aria-current="page"
          scroll={(el) =>
            el.scrollIntoView({
              behavior: "smooth",
              block: "start",
              alignToTop: true,
            })
          }
        >
          {renderGerman ? <span>10 GRÜNDE</span> : <span>10 RAISONS</span>}
          {isReasonsInView ? (
            <div className="reasons-german-underScore-active"></div>
          ) : (
            <div className="reasons-german-underScore-unactive"></div>
          )}
        </NavLink>
        <NavLink
          exact
          to="/#theorie-section"
          className="nav-links"
          aria-current="page"
          scroll={(el) =>
            el.scrollIntoView({
              behavior: "smooth",
              block: "start",
              alignToTop: true,
            })
          }
        >
          {renderGerman ? <span>THEORIE</span> : <span>THÉORIE</span>}
          {isTheorieInView ? (
            <div className="theorie-german-underScore-active"></div>
          ) : (
            <div className="theorie-german-underScore-unactive"></div>
          )}
        </NavLink>
        <span
          className="nav-links"
          aria-current="page"
          onClick={() => goHome("/media")}
        >
          {renderGerman ? <span>MEDIA</span> : <span>MÉDIA</span>}
          {isMediaInView ? (
            <div className="media-german-underScore-active"></div>
          ) : (
            <div className="media-german-underScore-unactive"></div>
          )}
        </span>
        {/* <NavLink
          exact
          to="/media/#media-page-wrapper"
          className="nav-links"
          aria-current="page"
          scroll={(el) =>
            el.scrollIntoView({
              behavior: "smooth",
              block: "start",
              alignToTop: true,
            })
          }
        >
          {renderGerman ? <span>MEDIA</span> : <span>MÉDIA</span>}
          {isMediaInView ? (
            <div className="media-german-underScore-active"></div>
          ) : (
            <div className="media-german-underScore-unactive"></div>
          )}
        </NavLink> */}
        {renderGerman ? (
          <span
            className={
              renderGerman ? "french-switch-unactive" : "french-switch-active"
            }
            onClick={() => handleLanguage()}
          >
            FR
          </span>
        ) : (
          <span
            className={
              renderGerman ? "german-switch-active" : "german-switch-unactive"
            }
            onClick={() => handleLanguage()}
          >
            DE
          </span>
        )}
      </nav>
    </div>
  );
};

export default withRouter(Header);
