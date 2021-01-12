// Graph Cards

//Icons

import AirplaneIcon from "../../../../Assets/Icons/airplane.png";
import CarbonCloud from "../../../../Assets/Icons/carbonCloud.png";
import Passengers from "../../../../Assets/Icons/passengers.png";

//Graph images

import AirTrafficGraphDe from "../../../../Assets/Images/theorie/graphs/grafik_1_web.png";
import CarbonGraphDe from "../../../../Assets/Images/theorie/graphs/grafik_berlin-zuerich_web.png";
import PassengersGraphDe from "../../../../Assets/Images/theorie/graphs/grafik_passagiere_web.png";
import AirTrafficGraphFr from "../../../../Assets/Images/theorie/graphs/grafik_1_web_f.png";
import CarbonGraphFr from "../../../../Assets/Images/theorie/graphs/grafik_berlin-zuerich_web_f.png";
import PassengersGraphFr from "../../../../Assets/Images/theorie/graphs/grafik_passagiere_web_f.png";

//Airtraffic Card De

const AirTrafficCardDe = {
  headingNumber: "32x ",
  headingText: "mehr",
  primaryText:
    "Soviel Treibhausgase stösst ein Flug mehr im Vergleich zum sanften Transportmittel Zug aus.",
  sourceNumber: "5",
  mainInfo:
    "Grafik 3: Vergleich diverser Transportmittel (Personenverkehr) und deren Emissionen mit Einbezug der jeweiligen Auslastung.",
  scndryInfo:
    "Folgende Treibhausgase wurden berücksichtigt: CO₂, CH₄, N₂O angegeben in CO₂-Äquivalenten. Der SBB Strommix beinhaltet 4% Kernkraft, 96% Wasserkraft.",
  graph: AirTrafficGraphDe,
  icon: AirplaneIcon,
  iconAltTxt: "Flugzeugsymbol",
  imgAltTxt:
    "Eine Grafik, die zeigt, wie viel Treibhausgase ein Flug im Vergleich zu Zugreisen ausstößt.",
  cardStyle: {
    top: 192,
    themeColor: "#c18b7c",
    altColor: "#6F3C2D",
    height: 618.54,
  },
  iconStyle: {
    height: 3 + "rem",
    width: 3 + "rem",
  },
};

//Airtraffic Card Fr

const AirTrafficCardFr = {
  headingNumber: "32x ",
  headingText: "plus",
  primaryText:
    "Autant de fois plus émet un avion comparé au train, par personne par km.",
  sourceNumber: "5",
  mainInfo:
    "Graphique 3: Comparaison des différents moyens de transport (transport de personne) et leurs émissions de CO₂ en considérant leur remplissage moyen en Suisse.",
  scndryInfo:
    "Les gaz à effet de serre suivant ont été considérés: CO₂, CH₄, N₂O convertis en équivalents carbone. Le mix énergétique de la SBB contient à 96% de l’hydroélectrique et à 4% du nucléaire.",
  graph: AirTrafficGraphFr,
  icon: AirplaneIcon,
  iconAltTxt: "Icône d'avion.",
  imgAltTxt:
    "Un graphique qui montre la quantité de gaz à effet de serre émise par un vol par rapport aux voyages en train.",
  cardStyle: {
    top: 168,
    themeColor: "#c18b7c",
    altColor: "#6F3C2D",
    height: 609.54,
  },
  iconStyle: {
    height: 3 + "rem",
    width: 3 + "rem",
  },
};

//Carbon Card De

const CarbonCardDe = {
  headingNumber: "0.6 t  ",
  headingText: " Pro Jahr",
  primaryText:
    "Soviel CO₂ sollte eine Person pro Jahr maximal verursachen, um den Klimawandel aufzuhalten.",
  sourceNumber: "4",
  mainInfo:
    "Grafik 2: Berechneter CO₂ -Ausstoss für den Hin- und Rückflug in diverse Feriendestinationen (Aubflug ab Zürich).",
  scndryInfo:
    "Mit nur einem Europaflug erreicht man bereits die Hälfte des jährlich empfohlenen CO₂ -Verbrauchs. Dabei wurden noch keine Grundbedürfnisse wie Essen, Wohnen oder Ähnliches abgedeckt. Alle Werte geiten pro Person.",
  graph: CarbonGraphDe,
  icon: CarbonCloud,
  iconAltTxt: "Wolkensymbol",
  imgAltTxt:
    "Eine Grafik zeigt die maximale Menge an CO₂, die eine Person pro Jahr verursachen sollte, um den Klimawandel zu stoppen.",
  cardStyle: {
    top: 172,
    height: 617.54,
    themeColor: "#3fadba",
    altColor: "#18666f",
    letterSpacing: -3,
    marginRight: 3,
  },
  iconStyle: {
    height: 2 + "rem",
    width: 3 + "rem",
  },
};

//Carbon Card Fr

const CarbonCardFr = {
  headingNumber: "0.6 t ",
  headingText: "pour une année",
  primaryText:
    "Autant de tonnes de CO₂ devraient être au maximum émises par une personne pour une année afin de limiter le réchauffement climatique.",
  sourceNumber: "4",
  mainInfo:
    "Graphique 2: Calcul des émissions de CO₂ pour l’aller et retour en avion (départ de Zürich).",
  scndryInfo:
    "Avec seulement un vol européen nous consommons déjà la moitié de notre budget carbone annuel. Pourtant, les besoins primaires n’y sont pas encore inclus, comme la nourriture et le logement. Toutes les valeurs sont par personne.",
  graph: CarbonGraphFr,
  icon: CarbonCloud,
  iconAltTxt: "Symbole de nuage",
  imgAltTxt:
    "Un graphique montre la quantité maximale de CO₂ qu'une personne devrait produire chaque année pour arrêter le changement climatique.",
  cardStyle: {
    top: 214,
    height: 656.54,
    themeColor: "#3fadba",
    altColor: "#18666f",
    lineHeight: 47 + "px",
    letterSpacing: -3,
    marginRight: 3,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  iconStyle: {
    height: 2 + "rem",
    width: 3 + "rem",
    marginTop: 8,
  },
};

//Passengers Card De

const PassengersCardDe = {
  headingNumber: "78 ",
  headingText: "Mio.",
  primaryText:
    "Soviele Passagiere werden in Schweizer Flughäfen bis im Jahr 2030 erwartet.",
  sourceNumber: "2,3",
  mainInfo:
    "Grafik 1: Überblick über Anzahl Lokal- und Transferpassagiere im gesamten Linien- und Charterverkehr in der Schweiz von 2000 bis 2017, inkl. Prognose bis 2030.",
  scndryInfo:
    "Im Jahr 2017 gab es insgesamt rund 54,9 Millionen Flugpassagiere im Linien- und Charterverkehr in der Schweiz. Werte alle gerundet. Veröffentlichungsdatum: März 2018.² ³",
  graph: PassengersGraphDe,
  icon: Passengers,
  iconAltTxt: "Passagiersymbol",
  imgAltTxt:
    "Eine Grafik zeigt, wie viele Passagiere bis 2030 an Schweizer Flughäfen erwartet werden.",
  cardStyle: {
    top: 169,
    height: 631.54,
    themeColor: "#89A235",
    altColor: "#53631F",
  },
  iconStyle: {
    height: 3 + "rem",
    width: 3.5 + "rem",
  },
};

//Passengers Card Fr

const PassengersCardFr = {
  headingNumber: "78 ",
  headingText: "Mio.",
  primaryText:
    "Autant de passagers sont attendus dans les aéroports suisses d’ici 2030.",
  sourceNumber: "2,3",
  mainInfo:
    "Graphique 1: Tour d’horizon sur le nombre de passagers, locaux et en transfert, de ligne et charter, incluant le pronostic jusqu’en 2030.",
  scndryInfo:
    "En 2017, le nombre de passagers montait à 54,9 millions, valeurs arrondies, incluant le trafic de ligne et charter. Date de publication: mars 2018.² ³",
  graph: PassengersGraphFr,
  icon: Passengers,
  iconAltTxt: "Symbole passager",
  imgAltTxt:
    "Un graphique montre le nombre de passagers attendus dans les aéroports suisses d'ici 2030.",
  cardStyle: {
    top: 168,
    height: 594.54,
    themeColor: "#89A235",
    altColor: "#53631F",
  },
  iconStyle: {
    height: 3 + "rem",
    width: 3.5 + "rem",
  },
};

export default {
  AirTrafficCardDe,
  AirTrafficCardFr,
  CarbonCardDe,
  CarbonCardFr,
  PassengersCardDe,
  PassengersCardFr,
};
