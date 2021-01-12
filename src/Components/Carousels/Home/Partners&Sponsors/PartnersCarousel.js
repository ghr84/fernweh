import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";

// Card data import

import PartnersData from "./Utilities/PartnersCardData";

// UI import

export default class MyCarousel extends Component {
  constructor() {
    super();
    this.state = {
      windowSize: 0,
    };
  }

  boundFunc = this.getWindowWidth.bind(this);

  getWindowWidth() {
    this.setState({ windowSize: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener("load", this.boundFunc);
    window.addEventListener("resize", this.boundFunc);
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.boundFunc);
    window.removeEventListener("resize", this.boundFunc);
  }

  render() {
    return (
      <Carousel
        dots={false}
        animationSpeed={350}
        minDraggableOffset={0.1}
        itemWidth={180}
        infinite={true}
        autoPlay={2000}
      >
        {/* Card One */}
        {PartnersData.map((data, i) => (
          <img
            key={i}
            src={data.icon}
            alt={data.altText}
            className="partner-icon"
            style={data.style}
          ></img>
        ))}
      </Carousel>
    );
  }
}
