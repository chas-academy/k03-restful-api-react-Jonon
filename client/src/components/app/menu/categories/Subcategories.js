import React, { Component } from "react";
import styles from "./style";
import Radium from "radium";

class Subcategories extends Component {
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

    // Filter to only show publishers comics
    let testing = items.filter(item => {
      return item.publisher == this.props.publisher;
    });

    let comicList = testing.map(item => {
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
