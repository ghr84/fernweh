import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

// Context statemanagement

import { ObserverContext } from "../Context/InterObserver";

const Footer = () => {
  const { footer } = useContext(ObserverContext);
  const [isFooterInView, setIsFooterInView] = footer;

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.001,
  });

  // Global state that control which language to render

  const { german } = useContext(ObserverContext);
  const [renderGerman] = german;

  useEffect(() => {
    if (inView) {
      setIsFooterInView(true);
    }
    return () => {
      setIsFooterInView(false);
    };
  }, [inView, isFooterInView, setIsFooterInView]);

  // Go to top of page

  const goToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <footer ref={ref}>
      <div id="footer-col-1">
        <div id="email-box">
          <h3 className="footer-labels">E-Mail</h3>
          <span className="footer-items">
            <a
              className="fernweh-link"
              href="mailto:info@fernweh-schweiz.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@fernweh-schweiz.ch
            </a>
          </span>
        </div>
        <div id="addresse-box">
          <h3 className="footer-labels">Adresse</h3>
          <span className="footer-items">
            Erlengweg 16<br></br>
          </span>
          <span className="footer-items">3360 Herzogenbuchsee</span>
        </div>
      </div>
      <div id="footer-col-2">
        <div id="social-box">
          {renderGerman ? (
            <h3 className="footer-labels">Social Media</h3>
          ) : (
            <h3 className="footer-labels">Des médias sociaux</h3>
          )}
          <span className="footer-items">
            <a
              className="fernweh-link"
              href="https://www.facebook.com/fernwehSchweiz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </span>
          <span className="footer-items">
            <a
              className="fernweh-link"
              href="https://www.instagram.com/fernwehschweiz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </span>
        </div>
        <div id="info-box">
          <h3 className="footer-labels">Info</h3>
          <Link exact="true" to="/Imprint" onClick={() => goToTop()}>
            {renderGerman ? (
              <span className="footer-items">Impressum</span>
            ) : (
              <span className="footer-items">Imprimer</span>
            )}
          </Link>
          <Link exact="true" to="/Privacy" onClick={() => goToTop()}>
            {renderGerman ? (
              <span className="footer-items">Privacy</span>
            ) : (
              <span className="footer-items">intimité</span>
            )}
          </Link>
          <Link exact="true" to="/Copyright" onClick={() => goToTop()}>
            {renderGerman ? (
              <span className="footer-items">Copyright</span>
            ) : (
              <span className="footer-items">droits d'auteur</span>
            )}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
