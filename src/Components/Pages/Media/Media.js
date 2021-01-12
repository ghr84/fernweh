import React, { useEffect, useContext } from "react";
import { ObserverContext } from "../../Context/InterObserver";
import { useInView } from "react-intersection-observer";

// Downloadable items

import BrochureDE from "../../../Assets/Download/BrochureDE.pdf";
import BrochureFR from "../../../Assets/Download/BrochureFR.pdf";
import LogoRGB from "../../../Assets/Download/116x116_Fernweh_Logo.jpg";

// UI

import DownloadBtn from "../../Buttons/DownloadBtn";

const Media = () => {
  const { media } = useContext(ObserverContext);
  const [isMediaInView, setIsMediaInView] = media;

  const { ref, inView } = useInView({
    /* Optional options */

    threshold: 0.01,
    trackVisibility: true,
    delay: 100,
  });

  useEffect(() => {
    if (inView) {
      setIsMediaInView(true);
    }

    return () => {
      // Clean up

      setIsMediaInView(false);
    };
  }, [setIsMediaInView, inView, isMediaInView]);

  // Global state that control which language to render

  const { german } = useContext(ObserverContext);
  const [renderGerman] = german;

  return (
    <div id="media-page-wrapper" ref={ref}>
      <div className="media-intro">
        <div className="media-intro-img"></div>
        <div className="txt-container">
          <div className="heading-box">
            <div className="media-marker"></div>
            {renderGerman ? (
              <h2 className="h1">MEDIENDATEN</h2>
            ) : (
              <h2 className="h1">DONNÉES MÉDIATIQUES</h2>
            )}
          </div>
          <div className="heading-box-mobile">
            {renderGerman ? (
              <div className="heading-box-de">
                <div className="media-marker"></div>
                <h2 className="h1">MEDIENDATEN</h2>
              </div>
            ) : (
              <div className="heading-box-fr">
                <div className="heading-marker-flexbox">
                  <h2 className="h1">DONNÉES</h2>
                  <div className="media-marker"></div>
                </div>
                <h2 className="h1">MÉDIATIQUES</h2>
              </div>
            )}
          </div>
          <div className="text-box">
            <p className="p-main">
              {renderGerman
                ? "Du interessierst dich für unser Projekt? Medienschaffende finden hier den entsprechenden Medienkontakt, unsere Broschüre als PDF, das Ferweh-Logo für Print und Web sowie weitere Informationen. Wir danken dir für dein Interesse."
                : `Êtes-vous intéressé par notre projet? Les professionnels des médias peuvent trouver les contacts médias pertinents, notre brochure au format PDF, le logo Ferweh pour l'impression et le Web et plus d'informations ici. Merci pour vos intérêt.`}
            </p>
          </div>
        </div>
      </div>
      <div className="extra-info-card-wrapper">
        <div className="extra-info-card">
          <h2 className="h2">
            {renderGerman ? "ALLGEMEINER KONTAKT" : "CONTACT GÉNÉRAL"}
          </h2>
          <div>
            <p className="p-main">
              {renderGerman
                ? "Solltest du ein Anliegen oder eine Frage haben, wenden dich bitte an:"
                : "Si vous avez un problème ou une question, veuillez contacter:"}
            </p>
            <a
              className="fernweh-link"
              href="mailto: adriana@fernweh-schweiz.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              adriana@fernweh-schweiz.ch
            </a>
          </div>
        </div>
      </div>
      <div className="download-section">
        <div className="brochure">
          <h2 className="h2">{renderGerman ? "BROSCHÜRE" : "BROCHURE"}</h2>
          <p className="p-main">
            {renderGerman
              ? "Anbei kannst du unsere Fernweh Schweiz Broschüre herunterladen (6.2 MB)."
              : "Télécharger la vacances durables en Suisse brochure (9.4 MB)."}
          </p>
          <DownloadBtn
            label={renderGerman ? "Broschüre" : "Brochure"}
            href={renderGerman ? BrochureDE : BrochureFR}
            docName={
              renderGerman
                ? "Fernweh Schweiz Broschüre"
                : "Brochure vacances durables en Suisse"
            }
            style={{
              backgroundColor: "#2f5a5f",
              width: 198,
            }}
          />
        </div>
        <div className="Logos">
          <h2 className="h2">LOGOS</h2>
          <p className="p-main">
            {renderGerman
              ? `Anbei findest du unser Logo als Vektorgrafik für den Print- oder
                  Screenbereich.`
              : `Veuillez trouver ci-joint notre logo sous forme de graphique
                  vectoriel pour la zone d'impression ou d'écran.`}
          </p>
          <div className="logo-RGB">
            <DownloadBtn
              label="RGB"
              href={LogoRGB}
              docName="fernweh_logo_RGB"
              style={{
                backgroundColor: "#2f5a5f",
                width: 198,
              }}
            />
          </div>
          <div className="logo-CMYK">
            <DownloadBtn
              label="CMYK"
              href={LogoRGB}
              docName="fernweh_logo_CMYK"
              style={{
                backgroundColor: "#2f5a5f",
                width: 198,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
