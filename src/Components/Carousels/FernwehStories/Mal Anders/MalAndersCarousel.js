import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";

// Icon/Img import

import GlobeIcon from "../../../../Assets/Icons/internet-globe.png";
import TreeHouseBanner from "../../../../Assets/Images/pictures Jessica/BILDRECHTE-cabane_bearb copy.jpg";

// Card data import

import TravelTipsData from "./Utilities/MalAndersTipsData";

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

  getWindowWidth = () => {
    this.setState({ windowSize: window.innerWidth });
  };

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
                  {TravelTipsData.Activity.map((data) => (
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
                          src={GlobeIcon}
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
                      <p className="p-main">{data.about}</p>
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
                        {data.address}
                      </span>
                    </div>
                  ))}
                </Carousel>
              ) : (
                <div className="no-carousel-container">
                  {TravelTipsData.Activity.map((data) => (
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
                          src={GlobeIcon}
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
                        {data.address}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="fernweh-image-container" style={{ marginBottom: 32 }}>
            <img
              src={TreeHouseBanner}
              alt={
                this.state.useGerman
                  ? "Ein Baumhaus in einem Wald."
                  : "Une cabane dans les arbres dans une forêt."
              }
              className="fernweh-banner"
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
                {TravelTipsData.Schlafen.map((data) => (
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
                        src={GlobeIcon}
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
                      {data.address}
                    </span>
                  </div>
                ))}
              </Carousel>
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
                {TravelTipsData.Essen.map((data) => (
                  <div
                    className="travel-info-card"
                    key={data.id}
                    style={{ marginRight: 32, alignSelf: "start" }}
                  >
                    <h3 className="h3-regular-bold">{data.title}</h3>
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
                      {data.address}
                    </span>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="activity-section">
            {/* Shopping */}

            <div className="activity-label-box">
              <span className="activity-label">Shopping</span>
            </div>
            <div className="travel-info-cards-container">
              <div className="travel-info-card stand-alone-card">
                <h3 className="h3-regular-bold">
                  {TravelTipsData.Shopping.title}
                </h3>
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
                    href={TravelTipsData.Shopping.realUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {TravelTipsData.Shopping.url}
                  </a>
                </div>
                <p className="p-main">
                  {this.state.useGerman
                    ? TravelTipsData.Shopping.about
                    : TravelTipsData.Shopping.aboutFR}
                </p>
                <div className="travel-card-divider" />
                <h3 className="h3-regular-bold">Kontakt</h3>
                <span className="p-main">
                  {TravelTipsData.Shopping.address}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
