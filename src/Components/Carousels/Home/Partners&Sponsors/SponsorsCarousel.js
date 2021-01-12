import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";

// Card data import

import SponsorsData from "./Utilities/SponsorsCardData";

// UI import

export default class MyCarousel extends Component {
  constructor() {
    super();
    this.state = {
      windowSize: window.innerWidth,
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
        autoPlay={2000}
        infinite={true}
      >
        {/* Card One */}
        {SponsorsData.map((data, i) => (
          <img
            className="sponsor-icon"
            key={i}
            src={data.icon}
            alt={data.altText}
            style={data.style}
          ></img>
        ))}
      </Carousel>
    );
  }
}
