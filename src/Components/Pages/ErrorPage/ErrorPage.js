import React, { useContext } from "react";
import { ObserverContext } from "../../Context/InterObserver";

const ErrorPage = () => {
  // Global state that control which language to render
  const { german } = useContext(ObserverContext);
  const [renderGerman] = german;

  return (
    <div id="error-page">
      <div className="content-wrapper">
        <div className="error-img"></div>
        <div className="text-container">
          <h2 className="h2">
            {renderGerman
              ? "Ups, da ist was schief gegangen."
              : "Oups, quelque chose s'est mal passé."}
          </h2>
          <p className="p-main">
            {renderGerman
              ? "Das gewählte Reiseziel ist auch uns nicht bekannt."
              : "La destination choisie ne nous est pas connue non plus."}
          </p>
          {renderGerman ? (
            <p className="p-main">
              Dies kann mehrere Ursachen haben. Aber hier ein paar alternative{" "}
              <a
                rel="noopener noreferrer"
                href="https://fernweh-schweiz.ch/#/fernweh/zusammen"
              >
                Reiseideen
              </a>
              {". "}
              Möchtest Du mehr zur Nachhaltigkeit beim Reisen wissen, findest du{" "}
              <a
                rel="noopener noreferrer"
                href="https://fernweh-schweiz.ch/#/theorie"
              >
                hier
              </a>
              {""} weitere Informationen.
            </p>
          ) : (
            <p className="p-main">
              Cela peut avoir plusieurs causes. Mais voici quelques idées de{" "}
              <a
                rel="noopener noreferrer"
                href="https://fernweh-schweiz.ch/#/fernweh/zusammen"
              >
                voyage alternatives
              </a>
              . Si vous souhaitez en savoir plus sur la durabilité lors de vos
              voyages, vous pouvez trouver plus d'informations{" "}
              <a
                rel="noopener noreferrer"
                href="https://fernweh-schweiz.ch/#/theorie"
              >
                ici
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
