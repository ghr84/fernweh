import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

// Context

import { ObserverContext } from "../../Context/InterObserver";

const FernwehNav = () => {
  // Global state that control which language to render

  const { german } = useContext(ObserverContext);
  const [renderGerman] = german;

  const navStyleFR = {
    maxWidth: 330,
  };

  return (
    <nav className="fernweh-nav" style={renderGerman ? null : navStyleFR}>
      <NavLink
        to="/fernweh/zusammen"
        className="nav-links"
        activeClassName="zusammen-active"
        aria-current="page"
      >
        {renderGerman ? <span>ZUSAMMEN</span> : <span>ENSEMBLE</span>}
        <div className="underScore"></div>
      </NavLink>
      <NavLink
        to="/fernweh/abenteuer"
        className="nav-links"
        activeClassName="abenteuer-active"
        aria-current="page"
      >
        {renderGerman ? <span>ABENTEUER</span> : <span>AVENTURE</span>}
        <div className="underScore"></div>
      </NavLink>
      <NavLink
        to="/fernweh/kultur"
        className="nav-links"
        activeClassName="kultur-active"
        aria-current="page"
      >
        {renderGerman ? <span>KULTUR</span> : <span>CULTURE</span>}
        <div className="underScore"></div>
      </NavLink>
      <NavLink
        to="/fernweh/mal-anders"
        className="nav-links"
        activeClassName="mal-anders-active"
        aria-current="page"
      >
        {renderGerman ? <span>MAL ANDERS</span> : <span>INSOLITE</span>}

        <div className="underScore"></div>
      </NavLink>
    </nav>
  );
};

export default FernwehNav;
