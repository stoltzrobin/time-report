import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { MonthProvider } from "./context/monthContext";
import { initialMonthState } from "./initialState/monthState";
import { monthCombinedReducer } from "./reducers/monthReducers";

ReactDOM.render(
  <MonthProvider
    reducer={monthCombinedReducer}
    initialState={initialMonthState}
  >
    <App />
  </MonthProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
