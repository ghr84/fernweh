import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";

// Icon/Img import

import GlobeIcon from "../../../../Assets/Icons/internet-globe.png";
import ProZentrumBanner from "../../../../Assets/Images/pictures Sandrine/BILDRECHTE-YlBR Yverdon Champ Pittet Parcours©YlBR_bearb.jpg";

// Card data import

import TravelTipsData from "./Utilities/ZusammenTipsData";

// UI import

import CarouselBtn from "../../../Buttons/CarouselBtn";

export default class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowSize: window.innerWidth,
      useGerman: this.props.renderGerman,
      sortedCardsActivity: [],
    };
  }

  // https://stackoverflow.com/questions/39398993/in-react-js-using-componentwillunmount-to-remove-an-event-listener-how-can-i-m

  getWindowWidth() {
    this.setState({ windowSize: window.innerWidth });
  }

  boundFunc = this.getWindowWidth.bind(this);

  componentDidMount() {
    window.addEventListener("load", this.boundFunc);
    window.addEventListener("resize", this.boundFunc);

    // Check what language is being render and then sort
    // activity cards by title in an alphabetical order.

    if (this.props.renderGerman) {
      this.setState({
        sortedCardsActivity: TravelTipsData.Activity.sort((a, b) =>
          a.title.localeCompare(b.title)
        ),
      });
    } else if (!this.props.renderGerman) {
      this.setState({
        sortedCardsActivity: TravelTipsData.Activity.sort((a, b) =>
          a.titleFR.localeCompare(b.titleFR)
        ),
      });
    }
  }

  componentDidUpdate(prevProps) {
    console.log(this.state.windowSize);
    // Check if the newest prop value(renderGerman) = The previews prop value(prevProps)
    // if not set useGerman State with the new prop value.

    if (this.props.renderGerman !== prevProps.renderGerman) {
      this.setState({ useGerman: this.props.renderGerman });
    }

    // Check what language is being rendered and then sort
    // activity cards by title in an alphabetical order.

    if (this.props.renderGerman !== prevProps.renderGerman) {
      if (this.props.renderGerman) {
        this.setState({
          sortedCardsActivity: TravelTipsData.Activity.sort((a, b) =>
            a.title.localeCompare(b.title)
          ),
        });
      } else if (!this.props.renderGerman) {
        this.setState({
          sortedCardsActivity: TravelTipsData.Activity.sort((a, b) =>
            a.titleFR.localeCompare(b.titleFR)
          ),
        });
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.boundFunc);
    window.removeEventListener("resize", this.boundFunc);
  }

  render() {
    const mailTo = "mailto:";
    console.log(this.state.windowSize);
    return (
      <div>
        <div className="travel-info">
          <div className="activity-section">
            {/* Aktivitäten */}

            <div className="activity-label-box">
              <span className="activity-label">
                {this.state.useGerman ? "Aktivitäten" : "Activités"}
              </span>
            </div>
            <div className="travel-info-cards-container">
              <Carousel
                infinite={false}
                dots={false}
                animationSpeed={350}
                minDraggableOffset={0.1}
                itemWidth={330}
                addArrowClickHandler={true}
                arrowLeft={
                  this.state.windowSize > 571 ? <CarouselBtn /> : false
                }
                arrowRight={
                  this.state.windowSize > 571 ? <CarouselBtn /> : false
                }
              >
                {this.state.sortedCardsActivity.map((data) => (
                  <div
                    className="travel-info-card"
                    key={data.id}
                    style={{ marginRight: 32, alignSelf: "start" }}
                  >
                    <h3 className="h3-regular-bold">
                      {this.state.useGerman ? data.title : data.titleFR}
                    </h3>
                    <div className="url-box">
                      <img
                        src={data.icon}
                        alt={
                          this.state.useGerman
                            ? "Ein Globus-Symbol."
                            : "Une icône de globe."
                        }
                        className="url-icon"
                      />
                      <a
                        href={
                          this.state.useGerman
                            ? data.realUrl
                            : data.realUrlFR || data.realUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {this.state.useGerman
                          ? data.url
                          : data.urlFR || data.url}
                      </a>
                    </div>
                    <p className="p-main">
                      {this.state.useGerman
                        ? data.about
                        : data.aboutFR || data.about}
                    </p>
                    <div className="travel-card-divider" />
                    <h3 className="h3-regular-bold">Kontakt</h3>
                    <span className="p-main">
                      <a
                        className="fernweh-link"
                        href={mailTo + data.contact}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.contact}
                      </a>
                      {data.phoneNr}
                      {this.state.useGerman
                        ? data.address
                        : data.addressFR || data.address}
                    </span>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="fernweh-image-container" style={{ marginBottom: 32 }}>
            <img
              src={ProZentrumBanner}
              className="fernweh-banner"
              alt={
                this.state.useGerman
                  ? "Eine Familie, die vor dem Pro Zentrum Champ-Pittet steht und von einem Plakat liest."
                  : "Une famille debout devant le Pro Zentrum Champ-Pittet lisant une affiche."
              }
            />
            <div
              className="img-text-box"
              style={{ backgroundColor: "#505a71" }}
            >
              <span className="p-scndry" style={{ color: "white" }}>
                {this.state.useGerman
                  ? TravelTipsData.ImageTextBox.txtDE
                  : TravelTipsData.ImageTextBox.txtFR}
              </span>
            </div>
          </div>
          <div className="activity-section">
            {/* Schlafen */}

            <div className="activity-label-box">
              <span className="activity-label">
                {this.state.useGerman ? "Schlafen" : "Hébergement"}
              </span>
            </div>
            <div className="travel-info-cards-container">
              {/* When in mobile/tablet we use carousel to be able to swipe between cards
                  when the window is wider then 739px we have two stand alone cards 
              */}

              {this.state.windowSize <= 739 ? (
                <Carousel
                  infinite={false}
                  dots={false}
                  animationSpeed={350}
                  minDraggableOffset={0.1}
                  itemWidth={330}
                  addArrowClickHandler={true}
                  arrowLeft={
                    this.state.windowSize > 571 ? <CarouselBtn /> : false
                  }
                  arrowRight={
                    this.state.windowSize > 571 ? <CarouselBtn /> : false
                  }
                >
                  <div
                    className="travel-info-card"
                    style={{ marginRight: 32, alignSelf: "start" }}
                  >
                    <h3 className="h3-regular-bold">La Ferme de la Corbiere</h3>
                    <div className="url-box">
                      <img
                        src={GlobeIcon}
                        alt={
                          this.state.useGerman
                            ? "Ein Globus-Symbol."
                            : "Une icône de globe."
                        }
                        className="url-icon"
                      />
                      <a
                        href="https://www.corbiere.ch"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        corbiere.ch
                      </a>
                    </div>
                    <p className="p-main">
                      {this.state.useGerman
                        ? TravelTipsData.Schlafen.cardOne.aboutOne
                        : TravelTipsData.Schlafen.cardOne.aboutOneFR}
                    </p>
                    <div className="travel-card-divider" />
                    <h3 className="h3-regular-bold">Kontact</h3>
                    <span className="p-main">
                      <a
                        className="fernweh-link"
                        href={mailTo + "info@corbiere.ch"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        info@corbiere.ch
                      </a>
                      <span>
                        / tele: 026 663 36 19 / La Corbière 2, 1470 Estavayer-le
                        Lac
                      </span>
                    </span>
                  </div>

                  <div
                    className="travel-info-card"
                    style={{ marginRight: 32, alignSelf: "start" }}
                  >
                    <h3 className="h3-regular-bold">La Ferme du Petit-Vivy</h3>
                    <p className="p-main">
                      {this.state.useGerman
                        ? TravelTipsData.Schlafen.cardTwo.aboutTwo
                        : TravelTipsData.Schlafen.cardTwo.aboutTwoFR}
                    </p>
                    <div className="travel-card-divider" />
                    <h3 className="h3-regular-bold">Kontakt</h3>
                    <span className="p-main">
                      <a
                        className="fernweh-link"
                        href="mailto:aeberhardb@bluewin.ch"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        aeberhardb@bluewin.ch
                      </a>
                      <span>
                        / tele: 026 684 19 62 / Béat & Elsbeth Aeberhard,
                        Petit-Vivy 11, 1783 Barberêche
                      </span>
                    </span>
                  </div>
                </Carousel>
              ) : (
                <div className="no-carousel-container">
                  <div
                    className="travel-info-card"
                    style={{ marginRight: 32, alignSelf: "start" }}
                  >
                    <h3 className="h3-regular-bold">La Ferme de la Corbiere</h3>
                    <div className="url-box">
                      <img
                        src={GlobeIcon}
                        alt={
                          this.state.useGerman
                            ? "Ein Globus-Symbol."
                            : "Une icône de globe."
                        }
                        className="url-icon"
                      />
                      <a
                        href="https://www.corbiere.ch"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        corbiere.ch
                      </a>
                    </div>
                    <p className="p-main">
                      {this.state.useGerman
                        ? TravelTipsData.Schlafen.cardOne.aboutOne
                        : TravelTipsData.Schlafen.cardOne.aboutOneFR}
                    </p>
                    <div className="travel-card-divider" />
                    <h3 className="h3-regular-bold">Kontakt</h3>
                    <span className="p-main">
                      <a
                        className="fernweh-link"
                        href={mailTo + "info@corbiere.ch"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>info@corbiere.ch </span>
                      </a>
                      <span>
                        / tele: 026 663 36 19 / La Corbière 2, 1470 Estavayer-le
                        Lac
                      </span>
                    </span>
                  </div>

                  <div
                    className="travel-info-card"
                    style={{ marginRight: 32, alignSelf: "start" }}
                  >
                    <h3 className="h3-regular-bold">La Ferme du Petit-Vivy</h3>
                    <p className="p-main">
                      {this.state.useGerman
                        ? TravelTipsData.Schlafen.cardTwo.aboutTwo
                        : TravelTipsData.Schlafen.cardTwo.aboutTwoFR}
                    </p>
                    <div className="travel-card-divider" />
                    <h3 className="h3-regular-bold">Kontakt</h3>
                    <span className="p-main">
                      <a
                        className="fernweh-link"
                        href="mailto:aeberhardb@bluewin.ch"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        aeberhardb@bluewin.ch
                      </a>
                      <span>
                        / tele: 026 684 19 62 / Béat & Elsbeth Aeberhard,
                        Petit-Vivy 11, 1783 Barberêche
                      </span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="activity-section">
            {/* Essen */}

            <div className="activity-label-box">
              <span className="activity-label">
                {this.state.useGerman ? "Essen" : "Restauration"}
              </span>
            </div>
            <div className="travel-info-cards-container">
              <div className="travel-info-card stand-alone-card">
                <h3 className="h3-regular-bold">Frogs & Roses Café</h3>
                <div className="url-box">
                  <img
                    src={GlobeIcon}
                    alt={
                      this.state.useGerman
                        ? "Ein Globus-Symbol."
                        : "Une icône de globe."
                    }
                    className="url-icon"
                  />
                  <a
                    href="https://www.frogsandroses.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    frogsandroses.ch
                  </a>
                </div>
                <p className="p-main">
                  {this.state.useGerman
                    ? TravelTipsData.Essen.card.about
                    : TravelTipsData.Essen.card.aboutFR}
                </p>
                <div className="travel-card-divider" />
                <h3 className="h3-regular-bold">Kontakt</h3>
                <span className="p-main">
                  <a
                    className="fernweh-link"
                    href="mailto:info@frogsandroses.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    info@frogsandroses.ch
                  </a>
                  <span>
                    / tele: 026 664 01 01 / Rue de la Gare 19, 1470
                    Estavayer-le-Lac
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="activity-section">
            {/* Shopping */}

            <div className="activity-label-box">
              <span className="activity-label">Shopping</span>
            </div>
            <div className="travel-info-cards-container">
              <Carousel
                infinite={false}
                dots={false}
                animationSpeed={350}
                minDraggableOffset={0.1}
                itemWidth={330}
                addArrowClickHandler={true}
                arrowLeft={
                  this.state.windowSize > 571 ? <CarouselBtn /> : false
                }
                arrowRight={
                  this.state.windowSize > 571 ? <CarouselBtn /> : false
                }
              >
                {TravelTipsData.Shopping.map((data) => (
                  <div
                    className="travel-info-card"
                    key={data.id}
                    style={{
                      marginRight: 32,
                      alignSelf: "start",
                    }}
                  >
                    <h3 className="h3-regular-bold">{data.title}</h3>
                    <div className="url-box">
                      <img
                        src={data.icon}
                        alt={
                          this.state.useGerman
                            ? "Ein Globus-Symbol."
                            : "Une icône de globe."
                        }
                        className="url-icon"
                      />
                      <a
                        href={data.realUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.url}
                      </a>
                    </div>
                    <p className="p-main">
                      {this.state.useGerman ? data.about : data.aboutFR}
                    </p>
                    <div className="travel-card-divider" />
                    <h3 className="h3-regular-bold">Kontakt</h3>
                    <span className="p-main">
                      <a
                        className="fernweh-link"
                        href={mailTo + data.contact}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.contact}
                      </a>
                      {data.phoneNr}
                      {this.state.useGerman
                        ? data.address
                        : data.addressFR || data.address}
                    </span>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
