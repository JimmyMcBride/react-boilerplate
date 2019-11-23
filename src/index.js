import React from "react";
import ReactDOM from "react-dom";

// Import css files for most global settings
// Sets HTML font-size to 2vw making everything responsive (Use rem instead of pixles now)
import "./index.css";

// Normalizes our css among different browsers
import "normalize.css";

import App from "./App";

// Keep this puppy here for later
import * as serviceWorker from "./serviceWorker";

// Set up Redux/Router
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// Import reducer/index.js as root reducer, it's where we're combining all our reducer files
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
