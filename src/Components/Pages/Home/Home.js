import React from "react";

// Sections

import AboutUs from "./Sections/AboutUs";
import Fernweh from "./Sections/Fernweh";
import Reasons from "./Sections/Reasons";
import Theorie from "./Sections/Theorie";
import Friends from "./Sections/Friends&Colleague";
import SponsorsPartners from "./Sections/Sponsors&Partners";

const Home = () => {
  return (
    <main>
      <AboutUs />
      <Fernweh />
      <Reasons />
      <Theorie />
      <Friends />
      <SponsorsPartners />
    </main>
  );
};

export default Home;
