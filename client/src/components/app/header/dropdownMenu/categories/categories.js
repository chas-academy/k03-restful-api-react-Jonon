import React, { Component } from "react";
import styles from "./style";
import Radium from "radium";
import Subcategories from "./Subcategories";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          id: 1,
          show: false,
          name: "All",
          subcategories: [<Subcategories publisher="All" />]
        },
        {
          id: 2,
          show: false,
          name: "Marvel",
          subcategories: [<Subcategories publisher="Marvel" />]
        },
        {
          id: 3,
          show: false,
          name: "DC",
          subcategories: [<Subcategories publisher="DC" />]
        },
        {
          id: 4,
          show: false,
          name: "Dark Horse",
          subcategories: [<Subcategories publisher="Darke Horse" />]
        }
      ]
    };
  }

  toggleSubItem = id => {
    let newArray = { ...this.state.categories };
    newArray[id].show = !newArray[id].show;
    this.setState({ newArray });
  };
  render() {
    let { categories } = this.state;

    let category = categories.map((item, id) => {
      return (
        <div style={styles.base}>
          <ul style={{ padding: "0", margin: "0px" }}>
            <li
              key={"category" + id}
              style={[styles.item, styles.category]}
              onClick={this.toggleSubItem.bind(this, id)}
              id={id}
            >
              {item.name}
            </li>
            <div style={[{ display: item.show ? "block" : "none" }]}>
              {item.subcategories}
            </div>
          </ul>
        </div>
      );
    });

    return <div>{category}</div>;
  }
}
export default Radium(Categories);
