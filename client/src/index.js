import React from "react";
import ReactDOM from "react-dom";
import "./css/Master.css";

// import registerServiceWorker from "./registerServiceWorker";

import configureStore from "./store/store";
import Root from "./components/root";

let store;
store = configureStore();

const render = () => {
  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
};

render();

if (module.hot) {
  module.hot.accept("./components/root", () => {
    render();
  });
}

// registerServiceWorker();
