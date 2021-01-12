import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";

// Icon/Img import

import GlobeIcon from "../../../../Assets/Icons/internet-globe.png";
import GlacierBanner from "../../../../Assets/Images/pictures Julia/IMG_9092_bearb.jpg";

// Card data import

import TravelTipsData from "./Utilities/AbenteuerTipsData";

// UI import

import CarouselBtn from "../../../Buttons/CarouselBtn";

export default class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowSize: window.innerWidth,
      useGerman: this.props.renderGerman,
      sortedCardsSchlafen: [],
    };
  }

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
        sortedCardsSchlafen: TravelTipsData.Schlafen.sort((a, b) =>
          a.title.localeCompare(b.title)
        ),
      });
    } else if (!this.props.renderGerman) {
      this.setState({
        sortedCardsSchlafen: TravelTipsData.Schlafen.sort((a, b) =>
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
          sortedCardsSchlafen: TravelTipsData.Schlafen.sort((a, b) =>
            a.title.localeCompare(b.title)
          ),
        });
      } else if (!this.props.renderGerman) {
        this.setState({
          sortedCardsSchlafen: TravelTipsData.Schlafen.sort((a, b) =>
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
                  {TravelTipsData.Activity.map((data) => (
                    <div
                      className="travel-info-card"
                      key={data.id}
                      style={{ marginRight: 32, alignSelf: "start" }}
                    >
                      <h3 className="h3-regular-bold">
                        {this.state.useGerman
                          ? data.title
                          : data.titleFR || data.title}
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
                          href={
                            this.state.useGerman
                              ? data.realUrl
                              : data.realUrlFR || data.realUrl
                          }
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
              ) : (
                <div className="no-carousel-container">
                  {TravelTipsData.Activity.map((data) => (
                    <div
                      className="travel-info-card"
                      key={data.id}
                      style={{ marginRight: 32, alignSelf: "start" }}
                    >
                      <h3 className="h3-regular-bold">
                        {this.state.useGerman
                          ? data.title
                          : data.titleFR || data.title}
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
                          href={
                            this.state.useGerman
                              ? data.realUrl
                              : data.realUrlFR || data.realUrl
                          }
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
              src={GlacierBanner}
              className="fernweh-banner"
              alt={
                this.state.useGerman
                  ? "Eine lächelnde Frau mit einer Gruppe von Gletscherwanderern"
                  : "Une femme souriante avec un groupe de randonneurs sur glacier."
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
                {this.state.sortedCardsSchlafen.map((data) => (
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
                        href={
                          this.state.useGerman
                            ? data.realUrl
                            : data.realUrlFR || data.realUrl
                        }
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
          <div className="activity-section">
            {/* Essen */}
            {/* When in mobile/tablet we use carousel to be able to swipe between cards
                  when the window is wider then 739px we have two stand alone cards 
            */}

            <div className="activity-label-box">
              <span className="activity-label">
                {this.state.useGerman ? "Essen" : "Restauration"}
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
                  {TravelTipsData.Essen.map((data) => (
                    <div
                      className="travel-info-card"
                      key={data.id}
                      style={{ marginRight: 32, alignSelf: "start" }}
                    >
                      <h3 className="h3-regular-bold">
                        {this.state.useGerman
                          ? data.title
                          : data.titleFR || data.title}
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
              ) : (
                <div className="no-carousel-container">
                  {TravelTipsData.Essen.map((data) => (
                    <div
                      className="travel-info-card"
                      key={data.id}
                      style={{ marginRight: 32, alignSelf: "start" }}
                    >
                      <h3 className="h3-regular-bold">
                        {this.state.useGerman
                          ? data.title
                          : data.titleFR || data.title}
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
                    style={{ marginRight: 32, alignSelf: "start" }}
                  >
                    <h3 className="h3-regular-bold">
                      {this.state.useGerman
                        ? data.title
                        : data.titleFR || data.title}
                    </h3>
                    <div className="url-box">
                      {data.url === undefined ? (
                        ""
                      ) : (
                        <div>
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
                      )}
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
