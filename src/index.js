import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/HomePageEn/HomePageEn.js";
import HomepageHy from "views/HomePageHy/HomepageHy.js";
import GamePageEn from "views/GamePageEn/GamePageEn.js";
import GamePageHy from "views/GamePageHy/GamePageHy.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/game-page/hy" component={GamePageHy} />
      <Route path="/hy" component={HomepageHy} />
      <Route path="/game-page" component={GamePageEn} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
