import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";

// Card data import

import FriendsCardsData from "./Utilities/FriendsCardData";

// UI import

import CarouselBtn from "../../../Buttons/CarouselBtn";

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
        infinite={true}
        dots={false}
        animationSpeed={350}
        minDraggableOffset={0.1}
        itemWidth={330}
        offset={0}
        addArrowClickHandler={true}
        arrowLeft={this.state.windowSize > 570 ? <CarouselBtn /> : false}
        arrowRight={this.state.windowSize > 570 ? <CarouselBtn /> : false}
      >
        {FriendsCardsData.map((data, i) => (
          <div className="friends-card" key={i}>
            <img
              src={data.img}
              className="friends-img"
              alt={this.props.renderGerman ? data.altText : data.altTextFR}
            ></img>
            <div className="text-box">
              <h2 className="h3">{data.heading}</h2>
              <div id="url-box">
                <div id="url-icon"></div>
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  {data.urlLabel}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    );
  }
}
