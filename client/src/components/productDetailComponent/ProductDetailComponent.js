import React, { Component } from "react";
import axios from "axios";

import "./ProductDetailComponent.scss";



class ProductDetailComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/products`).then(res => {
      const data = res.data;
      this.setState({ ...this.state, data });
    });
  }

  getProduct = (key, title) => {
    return this.state.data.filter(product => product[key] == title);
  };

  render() {
    let product;
    if (this.state.data && this.props.match.params.id) {
      product = this.getProduct("title", this.props.match.params.id);
    }
    if (product) {
      return (
        <div className="ProductDetailComponent">
          {product.map(res => {
            return (
              <div className="Details">
                <h1>{res.title}</h1>
                <img className="Model" src={res.image} alt="" />
                <p>Brand: {res.description}</p>
                <p>Colour: {res.color}</p>
                <h2>Price: €{res.price}</h2>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default ProductDetailComponent;
