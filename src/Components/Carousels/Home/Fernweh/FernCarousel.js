import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import { withRouter } from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";

// Card data import

import FernwehCardData from "./Utilities/FernwehCardData";

// UI import

import CarouselBtn from "../../../Buttons/CarouselBtn";

import ReadMoreBtn from "../../../Buttons/ReadMoreBtn";

class FernwehCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowSize: window.innerWidth,
      useGerman: "",
    };
  }

  getWindowWidth() {
    this.setState({ windowSize: window.innerWidth });
  }

  // https://stackoverflow.com/questions/39398993/in-react-js-using-componentwillunmount-to-remove-an-event-listener-how-can-i-m

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

  render() {
    // Handles routing to individual fernweh stories
    // using withRouter

    const handleNavigation = (route) => {
      this.props.history.push("/fernweh" + route);

      // Land at the top of the page

      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    return (
      <CarouselProvider
        naturalSlideWidth={450}
        naturalSlideHeight={544}
        totalSlides={4}
        infinite={true}
      >
        <DotGroup />
        {this.state.windowSize >= 570 ? (
          <ButtonNext>
            <CarouselBtn />
          </ButtonNext>
        ) : null}
        <Slider>
          {FernwehCardData.fernwehData.map((data) => (
            <Slide key={data.id}>
              <div id="fernweh-card">
                <img
                  src={data.banner}
                  className="fernweh-img"
                  alt={this.state.useGerman ? data.altText : data.altTextFR}
                ></img>
                <div id="fernweh-text-area">
                  <div>
                    <h2
                      className={this.state.useGerman ? "h2" : "h2-french"}
                      style={data.style}
                    >
                      {this.state.useGerman ? data.heading : data.headingFR}
                    </h2>
                    <h3 className="h3-regular">
                      {this.state.useGerman
                        ? data.subHeading
                        : data.subHeadingFR}
                    </h3>
                    <p className="p-main" style={data.margin}>
                      {this.state.useGerman ? data.paragraph : data.paragraphFR}
                    </p>
                  </div>

                  <ReadMoreBtn
                    handleNavigation={handleNavigation}
                    route={data.route}
                    label={this.state.useGerman ? "Weiterlesen" : "Continuer"}
                    style={{
                      backgroundColor: data.style.color,
                    }}
                  />
                </div>
              </div>
            </Slide>
          ))}
        </Slider>
        {this.state.windowSize >= 570 ? (
          <ButtonBack>
            <CarouselBtn />
          </ButtonBack>
        ) : null}
      </CarouselProvider>
    );
  }
}

export default withRouter(FernwehCarousel);
