import React from "react";

const InstagramBanner = ({ renderGerman }) => {
  return (
    <section id="instagram-section">
      <div id="instagram-banner">
        <h2 className="h1">
          <a
            className="fernweh-link"
            href="https://www.instagram.com/explore/tags/fernwehschweiz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {renderGerman ? "#fernwehschweiz" : "#vacancesdurablessuisse"}
          </a>
        </h2>
        {renderGerman ? (
          <p className="p-main">
            Uns gibt es auch digital! Unsere Web- und{" "}
            <a
              href="https://www.facebook.com/fernwehSchweiz"
              className="instagram-card-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            -Seiten zeigen nebst der Broschüre weitere Ausflugstipps und
            Informationen. Bist du auf{" "}
            <a
              href="https://www.instagram.com/fernwehschweiz/"
              className="instagram-card-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            ? Dann füge bei jedem Post von einem Ausflug in der Schweiz den
            Hashtag{" "}
            <a
              href="https://www.instagram.com/explore/tags/fernwehschweiz/"
              className="instagram-card-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              #fernwehschweiz
            </a>{" "}
            an. Hilf uns, allen Kritikern zu beweisen, dass ein Urlaub in der
            Schweiz ebenso spannend ist. Mit einer grossen und starken Community
            erreichen wir mehr. Teilen erwünscht!
          </p>
        ) : (
          <p className="p-main">
            Nous sommes aussi en ligne! En plus de la brochure, nos pages Web et{" "}
            <a
              href="https://www.facebook.com/fernwehSchweiz"
              className="instagram-card-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{" "}
            contiennent d’autres conseils et informations sur les vacances
            durables. Êtes-vous sur{" "}
            <a
              href="https://www.instagram.com/fernwehschweiz/"
              className="instagram-card-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            ? Alors pour chaque post d’excursion en Suisse, ajoutez notre
            hashtag{" "}
            <a
              href="https://www.instagram.com/explore/tags/fernwehschweiz/"
              className="instagram-card-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              #vacancesdurablessuisse
            </a>
            . Aidez-nous à montrer à tous les sceptiques que des vacances en
            Suisse peuvent aussi être exhaltantes. Avec une communité grande et
            forte nous atteindrons plus, tous ensemble. N’hésitez pas à
            partager!
          </p>
        )}
      </div>
    </section>
  );
};

export default InstagramBanner;
