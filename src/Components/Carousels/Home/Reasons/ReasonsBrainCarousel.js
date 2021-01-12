import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";

// Card data import

import ReasonsCardsData from "./Utilities/ReasonsCardData";

// UI import

import CarouselBtn from "../../../Buttons/CarouselBtn";

export default class MyCarousel extends Component {
  constructor() {
    super();

    this.state = {
      windowSize: window.innerWidth,
      useGerman: "",
    };
  }

  boundFunc = this.getWindowWidth.bind(this);

  componentDidMount() {
    this.setState({ useGerman: this.props.renderGerman });

    window.addEventListener("load", this.boundFunc);
    window.addEventListener("resize", this.boundFunc);
  }

  componentDidUpdate(prevProps) {
    // Check if the newest prop value(useGerman) = The previews prop value(prevProps)
    // if not set useGerman State with the new prop value.

    if (this.props.renderGerman !== prevProps.renderGerman) {
      this.setState({ useGerman: this.props.renderGerman });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.boundFunc);
    window.removeEventListener("resize", this.boundFunc);
  }

  getWindowWidth() {
    this.setState({ windowSize: window.innerWidth });
  }

  render() {
    return (
      <Carousel
        dots={false}
        animationSpeed={340}
        minDraggableOffset={0.1}
        itemWidth={350}
        infinite={true}
        addArrowClickHandler={true}
        arrowLeft={this.state.windowSize > 570 ? <CarouselBtn /> : false}
        arrowRight={this.state.windowSize > 570 ? <CarouselBtn /> : false}
      >
        {ReasonsCardsData.map((data) => (
          <div id="reasons-card" key={data.id}>
            <div id="reasons-top-box" style={data.topBoxStyles}>
              <h2 className="h2">{data.number}</h2>
              <img
                src={data.icon}
                className="reasons-icon"
                alt={this.state.useGerman ? data.altText : data.altTextFR}
                style={data.iconStyle}
              ></img>
            </div>
            <div id="reasons-text-area" style={data.textBoxStyles}>
              <h2 className="h3">
                {this.state.useGerman ? data.heading : data.headingFR}
              </h2>
              <p className="p-main">
                {this.state.useGerman ? data.paragraph : data.paragraphFR}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    );
  }
}
