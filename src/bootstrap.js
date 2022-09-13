import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styles from "./style/navbar.scss";

import App from "./components/app";
import reducers from "./reducers";
import AddSpell from "./authuser/add-spell";
import AddElement from "./authuser/add-element";
import AddFormElement from "./authuser/add-form";
import Navbar from "./components/NavBar";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div className="navbar">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/add-spell">
            <AddSpell />
          </Route>
          <Route path="/add-element">
            <AddElement />
          </Route>
          <Route path="/add-FormElement">
            <AddFormElement />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
