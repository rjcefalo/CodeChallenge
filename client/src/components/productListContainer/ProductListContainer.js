import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, ButtonToolbar } from "react-bootstrap";

import Loading from "../loading/Loading";

import "./ProductListContainer.scss";

class ProductListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    setTimeout(() => {
      axios.get(`http://localhost:3001/products`).then(res => {
        const data = res.data;
        this.setState({ ...this.state, data });
      });
    }, 1000);
  }

  render() {
    if (this.state.data) {
      this.state.data.map(product => console.log(product.title));
      return (
        <div className="ProductListContainer">
          <nav>
            <ul>
              <ButtonToolbar>
                {this.state.data.map(product => (
                  <li>
                    <Link to={product.title}>
                      <Button className="push_button blue" size="lg">
                        {product.title}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ButtonToolbar>
            </ul>
          </nav>
        </div>
      );
    } else {
      return (
        <div className="ProductListContainer">
          <Loading />
        </div>
      );
    }
  }
}

export default ProductListContainer;
