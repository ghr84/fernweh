import React, { useContext } from "react";
import { ObserverContext } from "../../../Context/InterObserver";

// Carousel

import Carousel from "../../../Carousels/Home/Friends/FriendsCarousel";

// Global state that control which language to render

const FriendsColleague = () => {
  // Global state that control which language to render

  const { german } = useContext(ObserverContext);
  const [renderGerman] = german;

  return (
    <section id="friends-section">
      <div id="friends-grid-container">
        <div id="friends-heading-box">
          {renderGerman ? (
            <h2 className="h1">FREUNDE & KOLLEGINNEN</h2>
          ) : (
            <h2 className="h1-french">COPAINS & COLLÈGUES FÉMININES</h2>
          )}
        </div>
      </div>
      <div id="friends-card-container">
        <Carousel renderGerman={renderGerman} />
      </div>
    </section>
  );
};

export default FriendsColleague;
