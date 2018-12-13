import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "mobx-react";
import stores from "./stores"; // default: index.js
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Provider {...stores}>
      <App />
    </Provider>
  </Router>,
  global.document.getElementById("root")
);

serviceWorker.unregister();
