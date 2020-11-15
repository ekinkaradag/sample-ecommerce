import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import "./App.css";

import SourceCodeInfo from "./components/source-code-info/source-code-info.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <SourceCodeInfo
        href={"https://github.com/ekinkaradag/sample-ecommerce"}
      />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch basename="/">
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
