import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import { ObserverContext } from "../../Context/InterObserver";

// Constants

import FernwehNav from "./FernwehNav";

// Pages

import FernwehAbenteuer from "./Stories/Abenteuer/FernwehAbenteuer";
import FernwehKultur from "./Stories/Kultur/FernwehKultur";
import FernwehMalAnders from "./Stories/Mal-Anders/FernwehMalAnders";
import FernwehZusammen from "./Stories/Zusammen/FernwehZusammen";

const FernwehHome = ({ history }) => {
  const { fernweh } = useContext(ObserverContext);
  const [isFernwehInView, setIsFernwehInView] = fernweh;

  useEffect(() => {
    if (
      history.location.pathname === "/fernweh/abenteuer" ||
      "/fernweh/kultur" ||
      "/fernweh/zusammen" ||
      "/fernweh/mal-anders"
    ) {
      setIsFernwehInView(true);
    }

    return () => {
      // Clean up
      setIsFernwehInView(false);
    };
  }, [setIsFernwehInView, isFernwehInView, history.location.pathname]);

  return (
    <div id="fernweh-page" style={{ marginTop: 8 + "rem" }}>
      <Router>
        <FernwehNav />
        <Switch>
          <Route exact path="/fernweh/abenteuer" component={FernwehAbenteuer} />
          <Route exact path="/fernweh/kultur" component={FernwehKultur} />
          <Route
            exact
            path="/fernweh/mal-anders"
            component={FernwehMalAnders}
          />
          <Route exact path="/fernweh/zusammen" component={FernwehZusammen} />
        </Switch>
      </Router>
    </div>
  );
};

export default withRouter(FernwehHome);
