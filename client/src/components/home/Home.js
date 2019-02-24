import React, { Component } from "react";

import "./Home.scss";
import CocktailBase from "./cocktailBase/CocktailBase";
import CocktailName from "./cocktailName/CocktailName";
import CocktailPic from "./cocktailPic/CocktailPic";
import TopCocktail from "./topCocktail/TopCocktail";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <CocktailBase />
        <CocktailName />
        <CocktailPic />
        <TopCocktail />
      </div>
    );
  }
}

export default Home;
