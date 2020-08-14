import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

// const logger = function ({ dispatch, getState }) {
//   //redux will automatically pass dispatch and getState function is logger function. This is not store
//   return function (next) {
//     return function (action) {
//       //middleware code
//       console.log("ACTION_TYPE = ", action.type);
//       next(action);
//     };
//   };
// };

const logger = ({ dispatch, getState }) => (next) => (action) => {
  //logger code
  console.log("ACTION_TYPE = ", action.type);
  next(action);
};

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Store", store);

ReactDOM.render(
  // <React.StrictMode>
  <App store={store} />,
  // </React.StrictMode>,
  document.getElementById("root")
);
