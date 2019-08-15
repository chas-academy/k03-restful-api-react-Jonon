import React, { Component } from "react";
import Radium from "radium";
import style from "./style";
import Button from "../../../buttons/Button";
import styles from "../../../buttons/style";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3004/comics")
      .then(res => res.json())
      .then(data => {
        this.setState({
          items: data
        });
      });
  }

  render() {
    let { items } = this.state;
    let comics = items.map(item => {
      return (
        <div
          style={[
            { display: "flex", flexDirection: "column" },
            style.posterBox
          ]}
          key={item.id}
        >
          <div style={{ flex: "1" }}>
            <li style={{ padding: "1rem" }} key={item.id}>
              <img src={item.poster} style={style.image} />
              <h3 style={[style.posterText, style.title]}>{item.title}</h3>
              <h4 style={[style.posterText, style.price]}>{item.price}</h4>
            </li>
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
