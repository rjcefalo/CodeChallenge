import React, { Component } from "react";

import "./Home.scss";

import { Link, Switch, Route } from "react-router-dom";


import Adds from "./Adds"
import ProductListContainer from "../productListContainer/ProductListContainer";
import ProductDetailComponent from "../productDetailComponent/ProductDetailComponent";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <ProductListContainer />
        <Switch>
          <Route exact path="/" component={Adds} />
          <Route exact path="/:id" component={ProductDetailComponent} />
        </Switch>
      </div>
    );
  }
}

export default Home;
