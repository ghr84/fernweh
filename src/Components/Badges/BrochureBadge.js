import React, { useContext } from "react";
import { ObserverContext } from "../Context/InterObserver";

// Downloadable items

import BrochureDE from "../../Assets/Download/BrochureDE.pdf";
import BrochureFR from "../../Assets/Download/BrochureFR.pdf";

const BrochureBadge = () => {
  // Global state that control which language to render

  const { german } = useContext(ObserverContext);
  const [renderGerman] = german;

  return (
    <div id="brochure-badge-wrapper">
      <a
        href={renderGerman ? BrochureDE : BrochureFR}
        download={
          renderGerman
            ? "Fernweh Schweiz Broschüre"
            : "Brochure vacances durables en Suisse"
        }
      >
        <div id="brochure-badge">
          <div className="text-container">
            {renderGerman ? (
              <span className="p-main">
                Lade hier<br></br>die Broschüre herunter!
              </span>
            ) : (
              <span className="p-main">Téléchargez la brochure ici!</span>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

export default BrochureBadge;
