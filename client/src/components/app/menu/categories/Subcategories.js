import React, { Component } from "react";
import styles from "./style";
import Radium from "radium";

class Subcategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, title: "Alien", publisher: "Dark Horse" },
        { id: 2, title: "Predator", publisher: "Dark Horse" },
        { id: 3, title: "Justice League Dark", publisher: "DC" },
        { id: 4, title: "Aquaman", publisher: "DC" },
        { id: 5, title: "Wonder Woman", publisher: "DC" },
        { id: 6, title: "Batman", publisher: "DC" },
        { id: 7, title: "Promethee 13:13", publisher: "Delcourt" },
        { id: 8, title: "Death", publisher: "Vertigo" },
        { id: 9, title: "Venom vs. Carnage", publisher: "Marvel" }
      ]
    };
  }

  render() {
    let { items } = this.state;

    // Filter to only show publishers comics
    let testing = items.filter(item => {
      return (
        item.publisher == this.props.publisher
      );
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
