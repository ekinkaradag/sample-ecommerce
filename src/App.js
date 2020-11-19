import React from "react";
import { Route, HashRouter } from "react-router-dom";

import "./App.css";

import SourceCodeInfo from "./components/source-code-info/source-code-info.component";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

function App() {
  return (
    <div className='app'>
      <Header />
      <HashRouter basename="/">
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </HashRouter>
      <SourceCodeInfo />
    </div>
  );
}

export default App;
