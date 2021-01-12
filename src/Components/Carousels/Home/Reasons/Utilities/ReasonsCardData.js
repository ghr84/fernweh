// Icons

import IconOne from "../../../../../Assets/Icons/iconsVector/salut.svg";
import IconTwo from "../../../../../Assets/Icons/iconsVector/geld.svg";
import IconThree from "../../../../../Assets/Icons/iconsVector/clock.svg";
import IconFour from "../../../../../Assets/Icons/iconsVector/tree.svg";
import IconFive from "../../../../../Assets/Icons/iconsVector/skies.svg";
import IconSix from "../../../../../Assets/Icons/iconsVector/kultur.svg";
import IconSeven from "../../../../../Assets/Icons/iconsVector/überall.svg";
import IconEight from "../../../../../Assets/Icons/iconsVector/drop.svg";
import IconNine from "../../../../../Assets/Icons/iconsVector/cutlery.svg";
import IconTen from "../../../../../Assets/Icons/iconsVector/recycle.svg";

// Other data

const reasonsCardsData = [
  {
    id: 1,
    number: "1",
    heading: "UNBEKANNTE SCHWEIZ",
    headingFR: "SUISSE INCONNUE",
    altText: 'Sprechblasen, die sagen; "Salut" und "Hoi".',
    altTextFR: 'Bulles qui disent; "Salut" et "Hoi".',
    paragraph: `Durch einen Canyon wandern, Strandferien machen, 
                  Fremdsprachen sprechen und internationale Küche geniessen? 
                  Das könnt ihr alles in der Schweiz.`,
    paragraphFR: `Randonner dans un canyon, passer des vacances à la plage, parler des langues étrangères et profiter de la cuisine internationale? Tout cela est possible en Suisse.`,
    icon: IconOne,
    topBoxStyles: {
      width: 19 + "rem",
    },
    textBoxStyles: {
      width: 19 + "rem",
    },
  },
  {
    id: 2,
    number: "2",
    heading: "GELD WECHSELN",
    headingFR: "CHANGER DES DEVISE",
    altText: "Drei Münzen übereinander gestapelt.",
    altTextFR: "Trois pièces empilées les unes sur les autres.",
    paragraph: `Geld wechseln und Wechselkurse
                  umrechnen? Das ist unnötig.`,
    paragraphFR: `Changer de l’argent et se perdre en taux de change? C’est inutile.`,
    icon: IconTwo,
    iconStyle: {
      height: 3.5 + "rem",
    },
    topBoxStyles: {
      width: 15.5 + "rem",
    },
    textBoxStyles: {
      width: 16.5 + "rem",
    },
  },
  {
    id: 3,
    number: "3",
    heading: "MEHR FERIENZEIT",
    headingFR: "PLUS DE TEMPS POUR LES VACANCES",
    altText: "Eine Uhr",
    altTextFR: "Une horloge",
    paragraph: `Wartezeiten am Flughafen?
            Mit dem Zug seid ihr bereits am
            Ziel – ganz ohne Jetlag.`,
    paragraphFR: `Temps d’attente à l’aéroport? Avec le train vous êtes déjà à destination – et sans jetlag.`,
    icon: IconThree,
    iconStyle: {
      height: 3.5 + "rem",
    },
    topBoxStyles: {
      width: 16 + "rem",
    },
    textBoxStyles: {
      width: 17 + "rem",
    },
    pScndryStyles: {
      width: 220 + "px",
    },
  },
  {
    id: 4,
    number: "4",
    heading: "VIElLFALT",
    headingFR: "DIVERSITÉ",
    altText: "Eine Palme, die sich leicht neigt",
    altTextFR: "Un palmier qui se plie légèrement",
    paragraph: `Grüne Hügel, kalkige Berge, tiefe Täler,
                farbige Wiesen und sonnige Strände – in
                der Schweiz findet ihr alle Klimazonen.`,
    paragraphFR: `Collines vertes, monts calcaires, vallées profondes, prairies colorées et plages ensoleillées – en Suisse vous trouvez toutes les zones climatiques et géologiques.`,
    icon: IconFour,
    topBoxStyles: {
      width: 12 + "rem",
    },
  },
  {
    id: 5,
    number: "5",
    heading: "NATUR TANKEN",
    headingFR: "FAIRE LE PLEIN DE SPORT-NATURE",
    altText: "Zwei Skier gekreuzt und aufrecht stehend.",
    altTextFR: "Deux skis croisés et debout.",
    paragraph: `Lust auf Sport? Hier findet ihr
            beste Bedingungen für Sommer- und
            Wintersport – vor der Haustüre.`,
    paragraphFR: `Envie de sport? Ici vous trouvez les meilleures conditions pour les sports d’été et d’hiver – à votre porte.`,
    icon: IconFive,
    topBoxStyles: {
      width: 15 + "rem",
    },
    pScndryStyles: {
      width: 221 + "px",
    },
  },
  {
    id: 6,
    number: "6",
    heading: "KULTURHOCHBURG",
    headingFR: "HAUT LIEU DE CULTURE",
    altText: "Eine Kamera, die ein Bild macht.",
    altTextFR: "Un appareil photo qui prend une photo.",
    paragraph: `Neugierig auf Kultur?
            Kaum ein anderes Land hat
            derart viele verschiedene
            Museen wie die Schweiz.`,
    paragraphFR: `Curieux de culture?
    Peu d’autres pays ont autant de musées que la Suisse.`,
    icon: IconSix,
    iconStyle: {
      transform: "rotate(8deg)",
    },
    topBoxStyles: {
      width: 17 + "rem",
    },
  },
  {
    id: 7,
    number: "7",
    heading: "ÜBERALL VERBUNDEN",
    headingFR: "CONNECTÉ PARTOUT",
    altText: "ein elektrischer Zug.",
    altTextFR: "un train électrique.s",
    paragraph: `ÖV-Verbindungen in jedes Tal –
          zum besten Wanderwegnetz der Welt?
          Das findet ihr nur in der Schweiz.`,
    paragraphFR: `Des transports en commun dans toutes les vallées pour rejoindre le meilleur réseau de sentiers de randonnées au monde? Cela n’existe qu’en Suisse.`,
    icon: IconSeven,
    topBoxStyles: {
      width: 18 + "rem",
    },
  },
  {
    id: 8,
    number: "8",
    heading: "TRINKEN FÜR LAU",
    headingFR: "BOIRE Á VOLONTÉ",
    altText: "ein Wassertropfen",
    altTextFR: "une goutte d'eau",
    paragraph: `Durstig? Hier gibt’s gratis
            Trinkwasser aus Hahn und
            Brunnen so viel ihr wollt.`,
    paragraphFR: `Assoiffés(es)? Ici l’eau des fontaines est gratuite et jusqu’à plus soif.`,
    icon: IconEight,
    topBoxStyles: {
      width: 15 + "rem",
    },
  },
  {
    id: 9,
    number: "9",
    heading: "BESTE SPEZIALITÄTEN",
    headingFR: "LES MEILLEURES SPÉCIALITÉS",
    altText: "Ein Löffel, eine Gabel und ein Messer.",
    altTextFR: "Une cuillère, une fourchette et un couteau.",
    paragraph: `Hungrig? Die beste Schokolade
            und den besten Käse gibt es nun
            mal in der Schweiz.`,
    paragraphFR: `Affamés(es)? Le meilleur
    chocolat et les meilleurs fromages se trouvent en Suisse.`,
    icon: IconNine,
    topBoxStyles: {
      width: 18 + "rem",
    },
    pScndryStyles: {
      width: 237 + "px",
    },
  },
  {
    id: 10,
    number: "10",
    heading: "UNSERE SCHWEIZ – UNSERE ZUKUNFT",
    headingFR: "NOTRE SUISSE - NOTRE AVENIR",
    altText: "Drei Pfeile bilden ein Dreieck.",
    altTextFR: "Trois flèches forment un triangle.",
    paragraph: `Immer noch nicht überzeugt?
            Bleibt in der Schweiz, damit ihr den
            zukünftigen Generationen eine
            intakte Umwelt zurücklassen könnt.`,
    paragraphFR: `Toujours pas convaincus (es)? Restez en Suisse afin de laisser aux générations suivantes un environnement intact.`,
    icon: IconTen,
    topBoxStyles: {
      width: 17 + "rem",
    },
    textBoxStyles: {
      width: 14 + "rem",
    },
  },
];

export default reasonsCardsData;
