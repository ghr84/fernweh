import AbenteuerBanner from "../../../../../Assets/Images/pictures Julia/julia-banner.png";
import KulturBanner from "../../../../../Assets/Images/pictures Adriana/adriana-banner.png";
import ZusammenBanner from "../../../../../Assets/Images/pictures Sandrine/sandrine-banner.png";
import MalAndersBanner from "../../../../../Assets/Images/pictures Jessica/jessica-banner.png";

const fernwehData = [
  {
    heading: "FERNWEH ZUSAMMEN",
    headingFR: "VACANCES DURABLES: ENSEMBLE",
    subHeading: "Mit Sandrine in den Familienferien",
    subHeadingFR: "Avec Sandrine dans la région des Trois-Lacs",
    altText: "Ein Blick über einen See.",
    altTextFR: "Une vue sur un lac.",
    paragraph: `Das Naturreservat Grande Cariçaie ist der Hotspot für Familien. Die Vogeldichte ist rekordverdächtig. Familien können Spannendes über Wildkorridore und Artenschutz im Pro Natura-Zentrum lernen. Wer in der Region zwischen Yverdon-les-Bains (VD) und Murten (FR) Urlaub mit Kindern macht, bietet den Kleinen mit Sicherheit viel Spass und eine gute Portion Natur und Wissenschaft.`,
    paragraphFR: `La réserve naturelle de la Grande Cariçaie est un bonheur pour les familles. Le niveau de présence des oiseaux est un record. Les familles peuvent découvrir les corridors pour animaux et la protection des espèces au centre Pro Natura. Ceux et celles qui passent leurs vacances avec des enfants entre Yverdon-les-Bains (VD) et Morat (FR) leur offrent avec assurance une belle part de nature et de sciences.`,
    banner: ZusammenBanner,
    style: {
      color: "#626E8B",
    },
    actionBtnStyle: {
      marginTop: 7.5 + "rem",
    },
    id: 0,
    route: "/zusammen",
  },
  {
    heading: "FERNWEH ABENTEUER",
    headingFR: "VACANCES DURABLES: AVENTURE",
    subHeading: "Mit Julia in der Aletschregion",
    subHeadingFR: "Avec Julia dans la région d’Aletsch",
    altText: "Ein Wahrzeichen vor einem Gletscher in einem Tal.",
    altTextFR: "Un repère devant un glacier dans une vallée.",
    paragraph: `Wieso ein Gletscher im Mittelpunkt des Berichts? In meinen Augen
    sind Gletscher ein extremes Sinnbild für den Klimawandel – sie
    machen die sonst nur spürbare Entwicklung für einmal auch
    sichtbar. Hier erzähle ich, wieso ich mich genau für diese
    Region entschieden habe, was mich auch einmal an meinem
    Entscheid zweifeln liess und natürlich was ich in dieser Zeit
    entdeckt und erlebt habe. In der Hoffnung, euch inspirieren zu
    können, Ferien in der Schweiz zu machen.`,
    paragraphFR: `Pourquoi un glacier au milieu de cette brochure touristique? Parce qu’à mes yeux, les glaciers sont un symbole du changement climatique. Ils rendent visibles une tendance impalpable. Il s’agit ici de vous raconter pourquoi je me suis décidée pour cette région, puis ce qui m’a fait douter de ma décision, et, enfin, ce que j’y ai découvert et vécu. Dans l’espoir de pouvoir vous inspirer à passer, vous aussi, vos vacances en Suisse.`,
    banner: AbenteuerBanner,
    style: {
      color: "#89a235",
      margin: 0,
    },
    actionBtnStyle: {
      marginTop: 5.5 + "rem",
    },
    id: 1,
    route: "/abenteuer",
  },
  {
    heading: "FERNWEH KULTUR",
    headingFR: "VACANCES DURABLES: CULTURE",
    subHeading: "Mit Adriana durch Winterthur",
    subHeadingFR: "Avec Adriana à Winterthour",
    altText: "Bild einer nachhaltigen Produktmesse.",
    altTextFR: "Image d'un salon de produits durables.",
    paragraph: `Wieviel unbekannte Kultur bietet mir mein Heimatland? 
    Ich wage das Experiment. Während andere per Flugzeug für drei
    Tage nach Berlin fliegen, nehme ich den Zug nach Winterthur. 
    Etwas ungewohnt, aber ich realisiere schnell die grossartigen 
    Vorteile: Keine wertvolle Reisezeit geht für Check-in und das 
    dazugehörende Warten verloren, es herrscht Beinfreiheit im Zug 
    und der letzte Teil der Reise, der meist mühsame Transfer, 
    wird zum Kinderspiel.`,
    paragraphFR: `Combien de culture inconnue m’offre
    mon propre pays? J’ose l’expérimentation. Tandis que d’aucun prend l’avion pour trois jours à Berlin, je prends le train pour Winterthour. Quelque peu incongru, mais je réalise vite les avantages formidables: gain de temps précieux en check-in et files d’attentes, liberté de se mouvoir, et un transfert – normalement bien fatiguant – aisé comme un jeu d’enfant.`,
    banner: KulturBanner,
    style: {
      color: "#3fadba",
    },
    actionBtnStyle: {
      marginTop: 5.5 + "rem",
    },
    id: 2,
    route: "/kultur",
  },
  {
    heading: "FERNWEH MAL ANDERS",
    headingFR: "VACANCES DURABLES: INSOLITE",
    subHeading: "Mit Jessica durch das Doubs-Gebiet",
    subHeadingFR: "Avec Jessica dans la région du Doubs",
    altText: "Ein Blick über Bäume mit einem Fluss im Hintergrund.",
    altTextFR: "Une vue sur les arbres avec une rivière en arrière-plan.",
    paragraph: `In der Natur zu sein macht Spass, bietet
    Erholung und wunderschöne Aussichten.
    Wie jedoch die Übernachtung selbst zum
    Abenteuer der Reise wird, zeige ich euch
    auf diesen zwei Seiten. Der Naturpark
    Doubs ist eine Region, die nicht von Touristen überschwemmt ist und noch weite
    Gebiete unberührter Natur aufweist. Ich
    entscheide mich für alternative Übernachtungsmöglichkeiten. Denn ein Zirkuswagen ist für mich eindeutig spannender
    als ein All-incluvise-Hotel.
    Und wer ist schon mal in einem Baumhaus, in einem
    Zirkuswagen oder in einem Tipi aufwacht?`,
    paragraphFR: `Être dans la nature rend heureux, apporte repos et beaux paysages. C’est pourtant de logement dont je vais vous parler sur ces deux pages, comment il peut devenir l’aventure du voyage. La région du Parc Naturel du Doubs est loin d’être noyée sous un flot de touristes et offre des coins de nature encore intacte. Je décide de choisir un hébergement insolite. Parce que pour moi, une roulotte est plus exci- tante qu’un club tout inclus. Qui s’est déjà réveillé dans une cabane dans un arbre, une roulotte ou un tipi?`,
    banner: MalAndersBanner,
    style: {
      color: "#c18b7c",
    },
    actionBtnStyle: {
      marginTop: null,
    },
    id: 3,
    route: "/mal-anders",
  },
];

export default { fernwehData };
