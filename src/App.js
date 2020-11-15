import React from "react";
import { Switch, Route } from "react-router-dom";

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
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
