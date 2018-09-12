import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import reducers from "./reducers";

import HomePage from "./HomePage";
import SearchResultsPage from "./SearchResultsPage";

import Footer from "./components/homepage/Footer";


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
