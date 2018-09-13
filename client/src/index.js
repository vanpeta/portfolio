import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import reducers from "./reducers";

import HomePage from "./components/pages/HomePage";
import SearchResultsPage from "./components/pages/SearchResultsPage";

import Footer from "./components/HomePage/Footer";


const store = createStore(reducers, {}, applyMiddleware());


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/search_results" component={SearchResultsPage} />
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
