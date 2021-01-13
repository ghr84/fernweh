import React, { useContext, useEffect } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { withRouter } from "react-router-dom";

// Context

import { ObserverContext } from "../Context/InterObserver";

const BurgerMenu = ({ handleBurgerMenu, burgerVisibility, history }) => {
  // Global state(s)

  // Control rendering appropriate styles to nav/burger when sections are in sight

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

  // Handle navigation to sub directories

  const handleNavigation = (route) => {
    history.push(route);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    handleBurgerMenu();
  };

  return (
    <div
      className={
        burgerVisibility ? "burger-menu-wrapper" : "burger-menu-wrapper-closed"
      }
    >
      <div
        onClick={() => handleBurgerMenu()}
        className={
          burgerVisibility ? "burger-backdrop-open" : "burger-backdrop-closed"
        }
      ></div>
      <div
        className={burgerVisibility ? "burger-menu-open" : "burger-menu-closed"}
      >
        <div className="lang-closeBtn-box">
          <div
            className={
              burgerVisibility ? "lang-btn-box" : "lang-btn-box-closed"
            }
          >
            <span
              className={
                renderGerman ? "german-switch-active" : "german-switch-unactive"
              }
              onClick={() => handleLanguage()}
            >
              DE
            </span>
            <span
              className={
                renderGerman ? "french-switch-unactive" : "french-switch-active"
              }
              onClick={() => handleLanguage()}
            >
              FR
            </span>
          </div>
          <div className="close-icon" onClick={() => handleBurgerMenu()}>
            <div className="icon-1"></div>
            <div className="icon-2"></div>
          </div>
        </div>
        <div className="menu-items">
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
            onClick={() => handleBurgerMenu()}
          >
            {renderGerman ? (
              <span className={isAboutUsInView ? "burger-about-active" : null}>
                VEREIN
              </span>
            ) : (
              <span className={isAboutUsInView ? "burger-about-active" : null}>
                SOCIÉTÉ
              </span>
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
            onClick={() => handleBurgerMenu()}
          >
            {renderGerman ? (
              <span
                className={isFernwehInView ? "burger-fernweh-active" : null}
              >
                FERNWEH
              </span>
            ) : (
              <span
                className={isFernwehInView ? "burger-fernweh-active" : null}
              >
                VACANCES DURABLES
              </span>
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
            onClick={() => handleBurgerMenu()}
          >
            {renderGerman ? (
              <span
                className={isReasonsInView ? "burger-reasons-active" : null}
              >
                10 GRÜNDE
              </span>
            ) : (
              <span
                className={isReasonsInView ? "burger-reasons-active" : null}
              >
                10 RAISONS
              </span>
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
            onClick={() => handleBurgerMenu()}
          >
            {renderGerman ? (
              <span
                className={isTheorieInView ? "burger-theorie-active" : null}
              >
                THEORIE
              </span>
            ) : (
              <span
                className={isTheorieInView ? "burger-theorie-active" : null}
              >
                THÉORIE
              </span>
            )}
          </NavLink>
          <span
            className="nav-links"
            aria-current="page"
            onClick={() => handleNavigation("/media")}
          >
            {renderGerman ? (
              <span className={isMediaInView ? "burger-media-active" : null}>
                MEDIA
              </span>
            ) : (
              <span className={isMediaInView ? "burger-media-active" : null}>
                MÉDIA
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(BurgerMenu);
