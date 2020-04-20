import React, { Component } from "react";
import Radium from "radium";
import { Link } from "react-router-dom";
import style from "./style";
import Button from "../../../buttons/Button";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch(`${this.props.location.pathname}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          items: data,
        });
      });
  }

  render() {
    const { items } = this.state;
    const comics = items.map((item) => {
      return (
        <div
          style={[{ display: "flex", flexDirection: "column" }, style.posterBox]}
          key={item._id}
        >
          <div style={{ flex: "1" }}>
            <Link to={`${this.props.location.pathname}/${item._id}`}>
              <li style={{ padding: "1rem" }} key={item._id}>
                <img src={item.poster} style={style.image} alt="poster" />
                <h3 style={[style.posterText, style.title]}>{item.title}</h3>
                <h4 style={[style.posterText, style.price]}>{item.price}
€
</h4>
              </li>
            </Link>
          </div>
          <Button title="Add to cart" kind="primary" width="100%" size="lg" />
        </div>
      );
    });
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <ul style={[style.posterContainer]}>{comics}</ul>
        </div>
      </div>
    );
  }
}

export default Radium(ProductList);
