import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
import Disclaimer from "./components/disclaimer/disclaimer.component";

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById("root")
);

ReactDOM.render(
  <Disclaimer />,
  document.getElementById("disclaimer")
);
