import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// Scss

import "@brainhubeu/react-carousel/lib/style.css";
import "./Styles/App.scss";

// Constants

import Footer from "./Components/Constants/Footer";
import Header from "./Components/Constants/Header";
import BurgerMenu from "./Components/Constants/BurgerMenu";

// Pages

import Home from "./Components/Pages/Home/Home";
import Media from "./Components/Pages/Media/Media";
import FernwehHome from "./Components/Pages/Fernweh/FernwehHome";
import Theorie from "./Components/Pages/Theorie/Theorie";
import Imprint from "./Components/Pages/Imprint/Imprint";
import Copyright from "./Components/Pages/Copyright/Copyright";
import Privacy from "./Components/Pages/Privacy/Privacy";

// Button

import BackUpBtn from "./Components/Buttons/BackUpBtn";

// Context Intersection Observer

import { IntersectionProvider } from "./Components/Context/InterObserver";

function App() {
  // Handle header UI functionality

  const [burgerVisibility, setBurgerVisibility] = useState(false);

  const handleBurgerMenu = () => {
    setBurgerVisibility(!burgerVisibility);
    preventVerticalScroll();
  };

  const reRenderState = () => {
    setBurgerVisibility(false);
  };

  const preventVerticalScroll = () => {
    const body = document.querySelector("body");
    if (burgerVisibility === false) {
      body.classList.add("body-overflowY-hidden");
    } else if (burgerVisibility === true) {
      body.classList.remove("body-overflowY-hidden");
    } else {
      return "";
    }
  };

  // Handle backUpBtn visibility by toggling "on/off" classes

  const [backUpBtnClass, setBackBtnClass] = useState("back-up-btn-unactive");

  return (
    <Router>
      <div className="App">
        <IntersectionProvider>
          <BurgerMenu
            handleBurgerMenu={handleBurgerMenu}
            burgerVisibility={burgerVisibility}
            setBurgerVisibility={setBurgerVisibility}
          />
          <Header
            handleBurgerMenu={handleBurgerMenu}
            setBackBtnClass={setBackBtnClass}
            reRenderState={reRenderState}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/media" component={Media} />
            <Route path="/fernweh" component={FernwehHome} />
            <Route path="/theorie" component={Theorie} />
            <Route path="/imprint" component={Imprint} />
            <Route path="/copyright" component={Copyright} />
            <Route path="/privacy" component={Privacy} />
          </Switch>
          <BackUpBtn
            setBackBtnClass={setBackBtnClass}
            backUpBtnClass={backUpBtnClass}
          />
          <Footer />
        </IntersectionProvider>
      </div>
    </Router>
  );
}

export default App;
