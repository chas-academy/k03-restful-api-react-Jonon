import React, { Component } from "react";
import Radium from "radium";
import styles from "./style";

class Subcategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://192.168.11.197:3004/comics")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          items: data,
        });
      });
  }

  render() {
    const { items } = this.state;

    // Filter to only show publishers comics
    const testing = items.filter((item) => {
      return item.publisher === this.props.publisher;
    });

    const comicList = testing.map((item) => {
      return (
        <li style={[styles.subCategory, styles.item]} key={item.id}>
          {item.title}
        </li>
      );
    });

    return <div>{comicList}</div>;
  }
}

export default Radium(Subcategories);
