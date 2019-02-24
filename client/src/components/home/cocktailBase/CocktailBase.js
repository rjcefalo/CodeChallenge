import React, { Component } from 'react';

import "./CocktailBase.scss"

class CocktailBase extends Component {
  render() {
    return (
      <div className="CocktailBase">
        <h2>Main ingredient</h2>
        <ul>
            <li>Tequila</li>
            <li>Rum</li>
            <li>Vodka</li>
        </ul>
      </div>
    );
  }
}

export default CocktailBase;